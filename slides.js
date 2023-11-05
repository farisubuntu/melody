var navContainer=document.querySelector('#myNav');
var pageTop=document.querySelector('.top')
onload=function(){
 pageTop.appendChild(navContainer);

 openNav();
};


function openNav() {
  
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
