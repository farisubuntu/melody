var containers;//.clip-box-container
var wordsImages; //.phrase-image
var words = [];
var imageArray = [];
var output,html;
console.log('extract_words.js invoked...')
function getWords() {
 containers = document.querySelectorAll('.clip-box-container');
 extractQuizGameWords();
}

function extractQuizGameWords() {
 var i = 0;
 containers.forEach(function (w) {
  words[i] = w.innerText;
  i++;
 });

}
function getImages() {
 wordsImages = document.querySelectorAll('.phrase-image');
 var attrValue;
 var start; var end; var urlValue;

 for (var i = 0; i < wordsImages.length; i++) {
  attrValue = wordsImages[i].style.backgroundImage;
  start = attrValue.indexOf('(') + 2;
  end = attrValue.indexOf(')');
  urlValue = attrValue.substring(start, end);
  imageArray[i] = urlValue;
 }

}

function createElements() {
 getWords();
 getImages();
 var target = '';
 var mother = '';
 var imgUrl = '';
 var url=window.location.href.split('/');
 var page_url=url.pop();
 output=`<div id='${page_url}' class='lesson-wrapper'>
  <header>
   <h2>${page_url}</h2>
  </header>
  <div class='audio-wrapper'>
   <audio controls preload='auto'>
    <source src='#' type='audio/mpeg'> Your browser not support audio format. 
   </audio>
  </div><div class='words'>`;
  
 for (var i = 0; i < words.length; i++) {
  [target, mother] = words[i].split('\n');
  imgUrl = imageArray[i];

  output += `
  
   <div class='word'>
     <div class='target'>${target}</div>
     <div class='mother'>${mother}</div>
     <div class='image-wrapper'>
      <img src='${imgUrl}' alt='notfound' />
     </div>
   </div>
  `;
 }
  output +=`</div></div>`;
  html=output.replace(/\n/g,"");
}
function getHtmlData() {
 createElements();
 console.log('\n'+html);
 
 // document.body.innerHTML = output;
}