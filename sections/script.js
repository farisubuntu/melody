/**
 * state=2
 * 0=> all visible
 * 1=> target visible
 * 2=> mother visible
 */
var state;

/**
 * 0: default, noto naskh arabic
 * 1: noto nastaliq urdu
 */
var selectedFont = 0;

onload = function () {
 createStickyButtons();
 appendTenseTitles();
 appendClasses();
 state = 2;
}
console.log('starting script');
function appendTenseTitles() {
 var verb_tenses = document.querySelectorAll('.verb-tenses');

 for (var i = 0; i < verb_tenses.length; i++) {
  for (var k = 0; k < 3; k++) {
   var tense = verb_tenses[i].children[k];

   var elem = document.createElement('div');
   
   
   
   var node = '';
   if (k == 0) {
    node=`<img src="https://farisubuntu.github.io/mondly/sections/icons/past.png" />`;
   }
   if (k == 1) {
    node=`<img src="https://farisubuntu.github.io/mondly/sections/icons/present.png" />`;
    
   }
   if (k == 2) {
    node=`<img src="https://farisubuntu.github.io/mondly/sections/icons/future.png" />`;
 
   }
   elem.setAttribute('class', `conj tense-${k}`);
   elem.innerHTML=node;
   tense.prepend(elem);
  }

 }
}

// Toggle button:

function toggle(col) {
 if (col == 1) {
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.text .mother').forEach(function (i) {
   i.style.visibility = "visible";
  });
 }
 if (col == 2) {
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.text .mother').forEach(function (i) {
   i.style.visibility = "hidden";
  });
 }
 if (col == 0) {
  // all visible
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.text .mother').forEach(function (i) {
   i.style.visibility = "visible";
  });
 }
}
function toggleCol(btn) {

 if (state < 0) {
  state = 2;
 }
 toggle(state);
 state--;
}

// create sticky buttons:
function createStickyButtons() {
 console.log('createStickyButtons()...');
 var str = `
   <button class="sticky-btn" onclick="changeFont();">تبديل الخط</button>
   <button id="toggle" class="sticky-btn" onclick="toggleCol(this);">إخفاء</button>
   <button id="home" class="sticky-btn"><a href="../index.html">الصفحة الرئيسية </a></button>
   <details class="sticky-btn">
 <summary>جداول</summary>
 <li><a href="../others/personal_pronouns_chart.html" target="_blank">ملخص الضمائر الشخصية</a></li>
 <li><a href="../others/verbs.html">الأفعال - الأزمنة البسيطة</a></li> 
 <li><a href="../others/important_vocabularies.html">كلمات مهمة</a></li>
 <li><a href="../mondly_dict/dict.html">قاموس ماندلي</a></li>
</details>
 `;

 var divBox = document.createElement('div');
 divBox.setAttribute('class', 'btns-wrapper');
 divBox.innerHTML = str;
 var location = document.querySelector('#media-bar');
 location.insertAdjacentElement("afterend", divBox);

}

function changeFont() {
 console.log('changeFont() ');
 if (selectedFont == 0) {
  selectedFont = 1;
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.fontFamily = "Noto Nastaliq Urdu, serif";
  });
 } else {
  selectedFont = 0;
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.fontFamily = "Noto Naskh Arabic, serif";
  });

 }
}


// ---------------------------------------
var words_array = [];
var images_array = [];
var phrases_array = [];

function getSectionVariables() {
 //  select all words (one line container of (target,mother} =>
 words_array = document.querySelectorAll('.list > .is-content-card-wrapper:first-child > .words > .word');

 //select all image urls for words, images_container[x].style.background-image=url("xxx")
 var images_container = document.querySelectorAll('.phrase-image');
 //  extract urls from images elements

 var urlValue;

 images_container.forEach(
  function (i) {
   urlValue = i.style.backgroundImage;
   urlValue = urlValue.replace('url("', '');
   urlValue = urlValue.replace(')', '');
   urlValue = urlValue.replace('"', '');
   images_array.push(urlValue);
  }
 );
 //------------------------
 // select all phrases (one line container of (text elements {target,mother} ) =>
 phrases_array = document.querySelectorAll('.phrase .text');
}


 // template

 function getDictionaryData() {
  getSectionVariables();  // this will fill global variable images_array,....
  words_len = words_array.length
  images_len = images_array.length
  phrases_len = phrases_array.length
  var top_container = `<div class="lesson-wrapper"><!-- ${window.location.pathname} -->
 <header><p class="lesson-title">${window.location.pathname}</p></header>
 <section class="words-container">`;

  //    append words
  var target;
  var mother;
  var image_url;
  for (var i = 0; i < words_array.length; i++) {
   target = words_array[i].querySelector('.target').innerText;
   image_url = images_array[i];
   mother = words_array[i].querySelector('.mother').innerText;
   top_container += `
        <article class="word-wrapper">
          <div class="word-target">${target}</div>
          <div class="word-mother">${mother}</div>`;
   if (i < images_len) {
    top_container += `<div class="image-wrapper"><img src='${image_url}' /"></div>
                 </article>`;

   }
   else {
    top_container += `</article>`;
   }
  }
  top_container += `</section><section class="phrases-container">`;
  var phrase_target;
  var phrase_mother;
  for (var i = 0; i < phrases_array.length; i++) {
   phrase_target = phrases_array[i].querySelector('.target').innerText;
   phrase_mother = phrases_array[i].querySelector('.mother').innerText;
   top_container += `
          <article class="phrase-wrapper">
           <div class="phrase-target">${phrase_target}</div>
           <div class="phrase-mother">${phrase_mother}</div>
          </article>`;
  }
  top_container += `</section> </div><!-- end of lesson-wrapper --> `;


  // add 'pre' tag to append top_container output string
  // var pre_tag=document.createElement('pre');
  // pre_tag.setAttribute('class','output');
  document.body.innerHTML = '';
  // document.body.append(pre_tag);
  // pre_tag.textContent= top_container;
  // pre_tag.style.backgroundColor='whitesmoke';
  // pre_tag.style.color='green';

  document.body.style.padding = '1.5rem';
  document.body.style.color = 'green';
  document.body.style.backgroundColor = 'whitesmoke';
  document.body.style.border = '2px solid skyblue';
  document.body.style.direction = 'ltr';

  document.body.textContent = top_container;


 }

function appendClasses(){
 // append 'snow' class to .is-content-card-wraper
 var elements=document.querySelectorAll('.is-content-card-wrapper:first-child');
 console.log('elements.lenght= ',elements.length);

 elements[0].className="snow";
 elements[3].className="snow";
 elements[5].className="snow";

 }
