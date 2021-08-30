$(document).ready(function() {
  $("form#triangleType").submit(function(event) {
    event.preventDefault();
    const firstSide = parseInt($("input#side1").val());
    const secondSide = parseInt($("input#side2").val());
    const thirdSide = parseInt($("input#side3").val());

    if (firstSide + secondSide <= thirdSide || firstSide + thirdSide <= secondSide || secondSide + thirdSide <= firstSide) {
      $("#noTriangle").show();
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
    } else if (firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide) {
      $("#noTriangle").hide();
      $("#equilateral").show();
      $("#isosceles").hide();
      $("#scalene").hide();
    } else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide) {
      $("#noTriangle").hide();
      $("#equilateral").hide();
      $("#isosceles").show();
      $("#scalene").hide();
    } else if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide) {
      $("#noTriangle").hide();
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").show();
    }
  });
});