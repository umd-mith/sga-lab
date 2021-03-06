// NB Mirador is assumed to be globally available.
// NB Annotator is assumed to be globally available.

import CETEI from 'CETEIcean'
import formatSurface from './surfaceformatter'

// Start Mirador
const mdor = Mirador({
  "id": "IIIF",
  "layout": "1x1",
  "mainMenuSettings" : {
    'show' : false
  },
  "data": [
    { "manifestUri": "http://localhost:8888/manifests/ox-ms_abinger_c56.json", "location": "University of Maryland"}
  ],
  "windowObjects": [
     {
      "loadedManifest": "http://localhost:8888/manifests/ox-ms_abinger_c56.json",
      "viewType" : "ImageView",
      "displayLayout": false,
      "bottomPanel" : false,
      "sidePanel" : false,
      "annotationLayer" : false
    }
  ],
  "annotationEndpoint": { "name":"Local Storage", "module": "LocalStorageEndpoint" }
});

// Bind External controls
mdor.eventEmitter.subscribe("windowAdded", function(e, id){
  let w = mdor.viewer.workspace.windows[0]

  renderTEI(w.canvasID)

  $("#mnext").click((e)=>{
    for (let [i, img] of Array.from(w.imagesList).entries()) {
        if (img["@id"] == w.canvasID) {
          let next = w.imagesList[i + 1]["@id"]
          mdor.viewer.workspace.windows[0]
            .setCurrentCanvasID(next)
          renderTEI(next)
          break;
        }
    }
  })

  $("#mprev").click((e)=>{
    for (let [i, img] of Array.from(w.imagesList).entries()) {
        if (img["@id"] == w.canvasID) {
          let prev = w.imagesList[i - 1]["@id"]
          mdor.viewer.workspace.windows[0]
            .setCurrentCanvasID(prev)
          renderTEI(prev)
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
  console.log('h')
  $("#TEI").children().unbind();
  $("#TEI").unbind();
  $("#TEI").empty();
  CETEIcean.getHTML5('tei/ox/' + id, function(data) {
    document.getElementById("TEI").innerHTML = "";
    document.getElementById("TEI").appendChild(data);
    formatSurface(data)
  });
}
