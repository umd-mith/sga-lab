const formatSurface = function (TEI5) {
  let $TEI5 = $(TEI5);
  let main_zone = $TEI5.find("tei-zone[type=main]");
  $TEI5.find("tei-line:has(tei-add[place=superlinear])").css("margin-top", ".5em");
  $TEI5.find("tei-line:has(tei-add[place=sublinear])").each(function(i, line) {
    let $line = $(line);
    $line.css("margin-bottom", ".5em");
    let adds = $line.find("tei-add[place=sublinear]");
    for (let [i, add] of Array.from(adds).entries()) {
      let prev = adds[i - 1]
      if (prev != null){
        let prevBox = prev.getBoundingClientRect()
        let thisBox = add.getBoundingClientRect()
        if(_intersectRect(prevBox, thisBox)){
          let offset = prevBox.right - thisBox.left
          $(add).css("padding-left", (offset + 10) + "px")
        }
        // Increase line height if this add is nested
        if ($(add).closest("tei-add").length > 0) {
          let lh = parseInt($line.css("padding-top").replace(/^(\d+).*?$/, "$1"));
          $line.css("padding-top", (lh + 10)+"px")
        }
      }
    }
  });
  $TEI5.find("tei-line:has(tei-add[place=superlinear])").each(function(i, line) {
    let $line = $(line);
    $line.css("margin-top", ".5em");
    let adds = $line.find("tei-add[place=superlinear]");
    for (let [i, add] of Array.from(adds).entries()) {
      let prev = adds[i - 1]
      if (prev != null){
        let prevBox = prev.getBoundingClientRect()
        let thisBox = add.getBoundingClientRect()
        if(_intersectRect(prevBox, thisBox)){
          let offset = prevBox.right - thisBox.left
          $(add).css("padding-left", (offset + 10) + "px")
        }
        // Increase line height if this add is nested
        if ($(add).closest("tei-add").length > 0) {
          let lh = parseInt($line.css("padding-top").replace(/^(\d+).*?$/, "$1"));
          $line.css("padding-top", (lh + 10)+"px")
        }
      }
    }
  });
  let left_margin_zones = $TEI5.find("tei-zone[type=left_margin]");
  if (left_margin_zones.length > 0){
    // Make room for margin zone when needed
    main_zone.css("margin-left", "10em")
  }
  left_margin_zones.css("margin-top", main_zone.position().top);
  left_margin_zones.each(function(i, lmz) {
    $(lmz).css("top", (i * (100 / left_margin_zones.length)) + "%");
  });

  // Determine longest line on surface and left-margin necessary to center text
  let $lines = $TEI5.find("tei-line");
  let longest = 0;
  $lines.each((i,line) =>{
    let w = $(line).clone()
      .children()
      .remove()
      .end()
      .text()
      .length
    longest = w > longest ? w : longest
  })
  $("tei-line[rend='center']").each((i, line)=>{
    $(line).css("padding-left",
     (longest - $(line).text().length) / 2 + "ex")
  })
  // Add indentation
  let increments = $TEI5.width() / 10
  $("tei-line[rend^='indent']").each((i, line)=>{
    let indent = /^indent(\d+)/.exec($(line).attr("rend"))[1]
    let padding = parseInt(indent) * increments
    $(line).css("padding-left",padding)
  })
}

const _intersectRect = function (r1, r2) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}


export default formatSurface
