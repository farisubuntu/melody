// remove 'undefind' images:



/* -------------- Append Sticky Buttons ---------------- */
/**
 * state=2
 * 0=> all visible
 * 1=> target visible
 * 2=> mother visible
 * 3=> words Only
 * 4=> phrases only
 */
var state;

/**
 * 0: default, noto naskh arabic
 * 1: noto nastaliq urdu
 */
var selectedFont = 0;

onload = function () {
 appendClasses();
 createTopNav();
 embedCollapseSide();

 state = 4;
}
console.log('starting script');

// Toggle button:

function toggle(col) {
 // if 0 => reload the page
 if (col == 0) {
  location.reload();
 }
 if (col == 1) {
  document.querySelectorAll('.word-target').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.phrase-target').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.phrase-mother').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.word-mother').forEach(function (i) {
   i.style.visibility = "visible";
  });
 }
 if (col == 2) {
  document.querySelectorAll('.word-target').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.phrase-target').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.phrase-mother').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.word-mother').forEach(function (i) {
   i.style.visibility = "hidden";
  });
 }

 // hide all except '.word-wrapper'
 if (col == 3) {
  document.querySelectorAll('.phrase-mother').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.word-mother').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.words-container').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.phases-container').forEach(function (i) {
   i.style.visibility = "hidden";
  });

 }
 // hide all except '.phrase container'
 if (col == 4)
  document.querySelectorAll('.words-container').forEach(function (i) {
   i.style.visibility = "hidden";
  });
 document.querySelectorAll('.phases-container').forEach(function (i) {
  i.style.visibility = "visible";
 });
}


function toggleCol(btn) {
 console.log(state);
 if (state < 0) {
  state = 4;
 }
 toggle(state);
 state--;
}


function changeFont() {
 console.log('changeFont() ');
 if (selectedFont == 0) {
  selectedFont = 1;
  document.querySelectorAll('.word-target').forEach(function (i) {
   i.style.fontFamily = "Noto Nastaliq Urdu, serif";
  });
  document.querySelectorAll('.phrase-target').forEach(function (i) {
   i.style.fontFamily = "Noto Nastaliq Urdu, serif";
  });
 } else {
  selectedFont = 0;
  document.querySelectorAll('.word-target').forEach(function (i) {
   i.style.fontFamily = "Noto Naskh Arabic, serif";
  });
  document.querySelectorAll('.phrase-target').forEach(function (i) {
   i.style.fontFamily = "Noto Naskh Arabic, serif";
  });
 }
}


function appendClasses() {
 // colorize word-wrappers which have an image child.
 var words = document.querySelectorAll('.word-wrapper');
 words.forEach(function (i) {
  if (i.querySelector('img') !== null) {
 
   i.setAttribute('class', 'word-wrapper has-image');
  }
  else {

   i.setAttribute('class', 'word-wrapper no-image');
  }
 });
}




function createTopNav() {
 console.log('createTopNav()...');
 console.log('count words/phrases');
 var words_total = document.querySelectorAll('.word-wrapper').length;
 var phrases_total = document.querySelectorAll('.phrase-wrapper').length;
 // count words,phrases:
 var total_words = document.querySelectorAll('.word-target').length;
 var total_phrases = document.querySelectorAll('.phrase-target').length;

 var str = `
 <button class="sticky-btn" onclick="changeFont();">تبديل الخط</button>
 <button id="toggle" class="sticky-btn" onclick="toggleCol(this);">إخفاء</button>
 <button id="home" class="sticky-btn"><a href="../index.html">الصفحة الرئيسية </a></button>
 <hr>
 <p class="counter"><span>كلمات: ${words_total}</span><span> عبارات: ${phrases_total}</span></p>
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



// topFunction button:
function topFunction() {
 // Get the button
 let mybutton = document.getElementById("myBtn");
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
}

// **************** collapsedPanel   *************************

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
 document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
 document.getElementById("mySidepanel").style.width = "0";
}






var collapsedSidePanel=`
<div id="mySidepanel" class="sidepanel">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">الدروس بالترتيب</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  <a href="#">Link 4</a>
</div>
<button class="openbtn" onclick="openNav()">&#9776; Toggle</button>
`;

function embedCollapseSide() {
 var collapsedSide = document.createElement("div");
 collapsedSide.innerHTML = collapsedSidePanel;
 collapsedSide.setAttribute("class", "sidePanelWrapper");
 collapsedSide.style.position = "fixed";
 collapsedSide.style.top = "10px";
 collapsedSide.style.right = "5px";
 document.body.prepend(collapsedSide);
 var livePanel=document.querySelector('mySidepanel');
}