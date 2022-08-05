$(document).ready(function () {
  $(window).scroll(function () {
    console.log("You are scrolling");
  });
  $("#box").scroll(function () {
    console.log("You are scrolling the div");
  });
  $(window).resize(function () {
    console.log("You are resizing the window");
  });
  $("#box").resize(function () {
    console.log("You are resizing the div");
  });
});
