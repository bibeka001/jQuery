$(document).ready(function () {
  $("#clist").focus(function () {
    $(this).css("color", "green");
  });
  $("#clist").blur(function () {
    $(this).css("background-color", "red");
  });
  $("#citylist").focus(function () {
    $(this).css("background-color", "red");
  });
  $("#citylist").blur(function () {
    $(this).css("color", "magenta");
  });
  $("#clist").select(function(){
    $(this).css("background-color", "tan ")
  })

});
