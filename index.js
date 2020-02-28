/*For Wow Animation*/
new WOW().init();
/*For Wow Animation*/

/*Full Screen Overlay Starts*/

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function openSearch() {
  document.getElementById("sui2").style.display = "block";
  document.getElementById("sui").style.width = "98%";
}

function closeSearch() {
  document.getElementById("sui").style.width = "0%";
  document.getElementById("sui2").style.display = "none";
}

$("#ang").click(function(){
  $(".customDa").toggle();
});
/*Full Screen Overlay Ends*/