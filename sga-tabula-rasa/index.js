var Presentation = require("tabula-rasa"),
    fs = require("fs"),
    path = require("path")
    xml2js = require('xml2js'),
    argv = require('minimist')(process.argv.slice(2));

var tei = argv._[0]

// create a collection
var c = new Presentation.Collections.Collection()

// add some manifests to the root collection
c.manifests = new Presentation.ManifestList()

var manifest = c.manifests.add(
  { _id: tei, '@id': tei, label: [{'@value':tei}]}
)

var sequence = manifest.sequences.add({'@id': 'default'})

// Parse top-level XML file
var parser = new xml2js.Parser();
fs.readFile(tei, function(err, data) {
    parser.parseString(data, function (err, result) {

      var promises = [];

      var createCanvases = () => {
        // console.log(result.TEI.sourceDoc[0]["xi:include"])
        var includes = result.TEI.sourceDoc[0]["xi:include"]
        var tot_includes = result.TEI.sourceDoc[0]["xi:include"].length
        for (var i=0; i < tot_includes; i++) {
          var include = includes[i]
          var dir = path.parse(tei).dir
          var data = fs.readFileSync(dir + path.sep + include.$.href)
          parser.parseString(data, function (err, surface) {
            var atts = surface.surface.$
            var url = surface.surface.graphic[0].$.url
            var s3_url = url.replace("http://shelleygodwinarchive.org/images/", "http://s3.amazonaws.com/sga-tiles/")
                            .replace(".jp2", "")
            var service = {service: {
              "@id": s3_url,
              "@context": "http://iiif.io/api/image/2/context.json",
              "profile": "http://iiif.io/api/image/2/profiles/level2.json"
            }}

            var canvas = sequence.canvases.add({
              _id: include.$.href,
              '@id': include.$.href,
              label: atts["mith:folio"],
              height: parseInt(atts.lry),
              width: parseInt(atts.lrx),
              thumbnail: s3_url+"/full/159,/0/default.jpg"
            })

            // Determine thumbnail size (for static tiles)

            // canvas.set({thumbnail: {
            //   "@id" : s3_url + "/full/159,/0/default.jpg"
            // }})

            // canvas.thumbnail.set(service)

            // ATTN: TabulaRasa doens't let me specify the target (on)
            // BUT: "Although it seems redundant, the URI of the canvas
            // must be repeated in the on field of the Annotation."
            var image = canvas.images.add({
              motivation: "sc:painting",
              on: include.$.href
            })


            // If this is the first include, add a thumbnail to the manifest
            // if (i == 0) {
            //     manifest.thumbnail = s3_url + "/full/159,/0/default.jpg"
            // }

            image.set({ resource : {
              "@id": s3_url,
              "@type": "dctypes:Image",
              format: "image/jpg",
              height: parseInt(atts.lry),
              width: parseInt(atts.lrx)
            }})
            image.resource.set(service)
          });
        }
      //   result.TEI.sourceDoc[0]["xi:include"].forEach((include, i)=>{
      //     {
      //       var dir = path.parse(tei).dir
      //       var p = new Promise(function(resolve) {
      //       fs.readFile(dir + path.sep + include.$.href, (err, data)=>{
      //
      //       });
      //     });
      //     promises.push(p)
      //   }
      // })
      // Write JSON-LD
      var jManifest = c.manifests.get(tei).toJSON();
      fs.writeFile("/tmp/test.json", JSON.stringify(jManifest), function(err) {
          if(err) {
              return console.log(err);
          }

          console.log("The file was saved!");
      })
      //.reason(function(err){console.log(err)});
    };

    createCanvases()

    // createCanvases().then((res) => {
    //   console.log(res)
    //   Promise.all(promises).then(function(results) {
    //     // Write JSON-LD
    //     var jManifest = c.manifests.get(tei).toJSON();
    //     fs.writeFile("/tmp/test.json", JSON.stringify(jManifest), function(err) {
    //         if(err) {
    //             return console.log(err);
    //         }
    //
    //         console.log("The file was saved!");
    //     }).reason(function(err){console.log(err)});
    //   });
    // })
  });
});
