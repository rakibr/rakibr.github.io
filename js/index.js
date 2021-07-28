$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
  });
  // var typed = new Typed(".typing", {
  //   Strings: ["webdesigner", "rakib ul"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   lop: true,
  // });
  // var typed = new Typed(".type2", {
  //   Strings: ["webdesigner", "rakib ul" ,"rakib ul","rakib ul"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   lop: true,
  // });
  var typed = new Typed('.typing', {
     strings: ["Web Designer.",],
    typeSpeed:100,
    backspeed:60,
    lop:true,
  });
  var typed = new Typed('.type2', {
    strings: ["Web Designer.",],
   typeSpeed:100,
   backspeed:60,
   lop:true,
 });
  
});
