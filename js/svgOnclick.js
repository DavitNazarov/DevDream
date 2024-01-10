// JS
// Get all the SVG elements
var svgs = document.querySelectorAll("svg");

// Loop through each SVG element
svgs.forEach(function (svg) {
  // Add a click event listener
  svg.addEventListener("click", function () {
    // Get the current fill color
    var color = svg.getAttribute("fill");
    //  Get the current tag id
    var svgId = svg.getAttribute("id");

    // if the fill id === heart ( heart === heart) then he change color, ანუ id უნდა იყოს ტოლი რომ შეცვალოს ფერი მაგის გარეშე არ იზავს მასე იმიტომ დავწერე რომ გულის და ვარსკვლავის სვჯ სხვადასხვა ფერი უნა ყოფილიყო

    if (svgId === "heart") {
      if (color == "gray") {
        svg.setAttribute("fill", "red");
      } else {
        svg.setAttribute("fill", "gray");
      }
    } else if (svgId == "star") {
      if (color == "gray") {
        svg.setAttribute("fill", "yellow");
      } else {
        svg.setAttribute("fill", "gray");
      }
    }

    // If the color is gray, change it to yellow
    // if (color == "gray") {
    //   svg.setAttribute("fill", "yellow");
    // } else {
    //   // Otherwise, change it back to gray
    //   svg.setAttribute("fill", "gray");
    // }
  });
});
