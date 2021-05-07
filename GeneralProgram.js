$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

  const imgTrans = 3000;
  const slidshowLength = 5;
  let currImag = 0;


  slideShowImage[currImag].style.display = "block"

  function nextImage(){
    slideShowImage[currImag].style.display = "none"
    currImag = (currImag +1)% slidshowLength;
    slideShowImage[currImag].style.display = "block"

  }
//Basic Functions










//Navagation
  
function MoveContact() {
  
  location.replace("Contact.html")
}
function MoveExmp() {

  location.replace("Exp.html")
}
function MoveAbout() {

  location.replace("About.html")
}
function MoveHome() {

  location.replace("Home.html")
}

  function homeLoad(){
    document.getElementById("Corey").style.opacity = 1;
    document.getElementById("Braun").style.left = 1;
    document.getElementById("Corey").style.right = 1;
    document.getElementById("Braun").style.opacity = 1;
  }
  function subLoad(){
    document.getElementById("Corey").style.opacity = 0;
    document.getElementById("Corey").style.left = 0;
    document.getElementById("Braun").style.right = 0//change
    document.getElementById("Braun").style.opacity = 0;
  }

//Project Slides
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
  function openProject(inProj){ //animation not working, something wrong with css #project
    
    var allProj = document.getElementById("projHub").childNodes

    for(o=0;o<allProj.length;o++){
      if(allProj[o] == inProj){
        var shelf = inProj.childNodes[3]
        shelf.style.left = "100%";
        o++;
      }
      else{
        var top = allProj[o];
        top.style.opacity = .1;
      }
    }
  }
  function closeProject(inProj){ //animation not working, something wrong with css #project
    var shelf = document.getElementById("projectslide");
    shelf.style.left = "0"; 
    var top = document.getElementById("project");
    top.style.opacity = 1;
 
  }

  