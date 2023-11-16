var navButtons=document.querySelector('.nav-btns');
var active='button-44 active';
var inactive='button-44 inactive';
var ch_content_wrapper=document.querySelector('#chapter-wrapper');

function buildNav(button){
 // append classes:
 for(var i=0;i<navButtons.children.length;i++){
  navButtons.children[i].classList=inactive;
 }
  button.classList = active;
}

function showContent(n,sender){
 buildNav(sender);
switch (n) {
 case 1:
  ch_content_wrapper.innerHTML=ch1;
  break;
case 2:
 ch_content_wrapper.innerHTML=ch2;
 break;
case 3:
 ch_content_wrapper.innerHTML=ch3;
 break;
case 4:
 ch_content_wrapper.innerHTML=ch4;
 break;
case 5:
 ch_content_wrapper.innerHTML=ch5; 
 break;
 case 6:
  ch_content_wrapper.innerHTML=ch6; 
  break;
case 7:
 ch_content_wrapper.innerHTML=ch7; 
 break;
case 8:
 ch_content_wrapper.innerHTML=ch8; 
 break;
 default:
  ch_content_wrapper.innerHTML="Press to show chapter content";
  break;
}

}
