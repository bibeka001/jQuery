$(document).ready(function () {
  // <--color change -->
  $("#sname, #sclass, #scountry").focus(function () {
    $(this).css("background-color", "lime");
  });
  $("#sname, #sclass, #scountry").blur(function () {
    $(this).css("background-color", "");
  });
  //   Value select, color change and value pick
  $("#scountry").change(function () {
    // $(this).css("background-color", "pink");
    var a = $(this).val();
    $("#test").html(a);
  });
  //    Value Select
  $("#sname, #sclass").select(function () {
    $(this).css("background-color", "yellow");
  });
  $("#sform").submit(function () {
    console.log("Form Submitted");
    alert("Form Submitted"); 
  });
});
