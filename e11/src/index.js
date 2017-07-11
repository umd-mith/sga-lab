// NB Mirador is assumed to be globally available.
// NB Annotator is assumed to be globally available.

import CETEI from 'CETEIcean'
import formatSurface from './surfaceformatter'

function urlExists(url, callback){
  $.ajax({
    type: 'HEAD',
    url: url,
    success: function(){
      callback(true);
    },
    error: function() {
      callback(false);
    }
  });
}

function start(url, page){
  // Start Mirador
  const mdor = Mirador({
    "id": "IIIF",
    "layout": "1x1",
    "mainMenuSettings" : {
      'show' : false
    },
    "data": [
      { "manifestUri": url, "location": "University of Maryland"}
    ],
    "windowObjects": [
       {
        "loadedManifest": url,
        "viewType" : "ImageView",
        "displayLayout": false,
        "bottomPanel" : false,
        "sidePanel" : false,
        "annotationLayer" : false
      }
    ],
    "annotationEndpoint": { "name":"Local Storage", "module": "LocalStorageEndpoint" }
  });
  let goToPage = function (canvasID) {
    // Go to the right page
    mdor.viewer.workspace.windows[0]
      .setCurrentCanvasID(canvasID)
    renderTEI(canvasID)
  }

  // Bind External controls
  mdor.eventEmitter.subscribe("windowAdded", function(e, id){
    let w = mdor.viewer.workspace.windows[0]

    // Populate the go-to page list
    let cur_page = ""
    for (let [i, p] of Array.from(w.imagesList).entries()) {
      $("#pages").append("<a class='dropdown-item' href='#"+(i+1)+"'>"+p.label+"</a>")
      if (i+1 == page) {
        $("#cur_page").text(p.label)
        cur_page = p["@id"]
      }
    }

    let triggered = false

    mdor.eventEmitter.subscribe('windowUpdated', function(){
      if (!triggered) {
        triggered = true
        goToPage(cur_page)
      }
    })


    // And set a hashchange for jump-to selections
    window.onhashchange = function() {
      var hash = window.location.hash.substring(window.location.hash.indexOf('#')+1);
      if (hash != "") page = hash
      for (let [i, p] of Array.from(w.imagesList).entries()) {
        $("#pages").append("<a class='dropdown-item' href='#"+(i+1)+"'>"+p.label+"</a>")
        if (i+1 == page) {
            page = p["@id"]
            $("#cur_page").text(p.label)
            goToPage(page)
            break
        }
      }
    };

    $("#mnext").click((e)=>{
      for (let [i, img] of Array.from(w.imagesList).entries()) {
          if (img["@id"] == w.canvasID) {
            let next = w.imagesList[i + 1]["@id"]
            window.location.hash = "#"+(i+2)
            break;
          }
      }
    })

    $("#mprev").click((e)=>{
      for (let [i, img] of Array.from(w.imagesList).entries()) {
          if (img["@id"] == w.canvasID) {
            let prev = w.imagesList[i - 1]["@id"]
            $("#cur_page").text( w.imagesList[i + 1].label)
            window.location.hash = "#"+(i)
            break;
          }
      }
    })
  })

  mdor.eventEmitter.subscribe("windowUpdated", function(){
    // Remove next and prev native controls
    // NB need to find the correct config for this
    $(".mirador-osd-next").remove()
    $(".mirador-osd-previous").remove()
  })

  console.log(mdor)

  // Render with CETEIcean
  var CETEIcean = new CETEI();

  const renderTEI = function (id) {
    $("#TEI").children().unbind();
    $("#TEI").unbind();
    $("#TEI").empty();
    CETEIcean.getHTML5(id, function(data) {
      document.getElementById("TEI").innerHTML = "";
      document.getElementById("TEI").appendChild(data);
      formatSurface(data)
    });
  }

}

var page = "1"
var hash = window.location.hash.substring(window.location.hash.indexOf('#')+1);
if (hash != "") page = hash

// var url = "https://raw.githubusercontent.com/umd-mith/sga-lab/master/c4/manifests/ox-ms_shelley_adds_c4.json"
start("manifests/ox-ms_shelley_adds_c4.json", page)
