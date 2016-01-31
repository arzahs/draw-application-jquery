
var color = $(".activated").css("background-color");

//click on buttons with color
$(".controls li").click(function(){
  console.log("click");
  $(this).siblings().removeClass("activated");
  $(this).addClass("activated");
  //save current clicked color
  color = $(this).css("background-color");
});
