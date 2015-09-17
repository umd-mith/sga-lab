TEIditto.addBehaviors
  "line": "div"

TEIditto.getHTML5 'xml/ox-ms_abinger_c56-0011.xml', null, (h5) -> 
  $("#TEI").html(h5)

  # Make JS formatting adjustments

  main_zone = $("tei-zone[type=main]")

  # Make room for interlinear insertions...
  # $("tei-line:has(tei-add[place=superlinear])")
  $("tei-line:has(tei-add[place=superlinear])").css("margin-top", ".5em")

  # Avoid overlapping insertions
  $("tei-line:has(tei-add[place=sublinear])").each (i, line) ->
    $line = $(line)
    $line.css("margin-bottom", ".5em")
    adds = $line.find("tei-add[place=sublinear]")

    for add, i in adds
      if adds[i-1]?
          $(add).css "padding-left", $(adds[i-1]).text().length + "em"

  $("tei-line:has(tei-add[place=superlinear])").each (i, line) ->
    $line = $(line)
    $line.css("margin-top", ".5em")
    adds = $line.find("tei-add[place=superlinear]")

    for add, i in adds
      if adds[i-1]?
          $(add).css "padding-left", $(adds[i-1]).text().length + "em"


  # Position marginal annotations
  left_margin_zones = $("tei-zone[type=left_margin]")

  left_margin_zones.css "margin-top", main_zone.position().top

  left_margin_zones.each (i, lmz) ->
    $(lmz).css "top", (i * (100 / left_margin_zones.length)) + "%"

  # Kick off annotation!
  app = new annotator.App()
  app.include(annotator.ui.main)
  app.start()

