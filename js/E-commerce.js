function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("main").style.marginLeft = "200px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
$(document).ready(function(){
  $(window).on("scroll",function () {
    if ($(window).scrollTop()){
      $("nav").addClass("black");
    } else {
      $("nav").removeClass("black");
    }
  }); 
});
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
function openNav1() {
  document.getElementById("mySidenav1").style.width = "250px";
}

function closeNav1() {
  document.getElementById("mySidenav1").style.width = "0";
}
// 
const action =document.getElementsByClassName
("contenbx");
for(i=0; i<action.length; i++){
    action[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

