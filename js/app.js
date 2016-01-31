
var color = $(".activated").css("background-color");

function changeColor(){
  var red = $("#red").val();
  var green = $("#green").val();
  var blue = $("#blue").val();
  var rgb = "rgb("+red+","+green+","+blue+")";
  $("#newColor").css("background-color", rgb);
}

//click on buttons with color
$(".controls").on("click","li", function(){
  console.log("click");
  $(this).siblings().removeClass("activated");
  $(this).addClass("activated");
  //save current clicked color
  color = $(this).css("background-color");
});


$("#revealColorSelect").click(function(){

  changeColor();
  $("#colorSelect").toggle();

});

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function(){
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  $newColor.click();
});
