
var color = $(".activated").css("background-color");

var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
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

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }

}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
