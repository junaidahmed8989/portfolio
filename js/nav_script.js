function myFunction() {

  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var dd =   document.getElementsById("out");
  dd.classList.add("none");
}