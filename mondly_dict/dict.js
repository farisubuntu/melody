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

window.onload = function () {
 appendClasses();
 createTopNav();
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
 } else {
  selectedFont = 0;
  document.querySelectorAll('.word-target').forEach(function (i) {
   i.style.fontFamily = "Noto Naskh Arabic, serif";
  });

 }
}


function appendClasses() {
 // colorize word-wrappers which have an image child.
 var words = document.querySelectorAll('.word-wrapper');
 words.forEach(function (i) {
  if (i.querySelector('img') !== null) {
   i.style.color = 'blue';
   i.setAttribute('class', 'word-wrapper has-image');
  }
  else {
   i.setAttribute('class', 'word-wrapper no-image');
  }
 });
}


// create sticky buttons:

/* <header class="page-header">
<h1>قاموس ماندلي</h1>
</header> */


function createTopNav() {
 console.log('createStickyButtons()...');
 // count words,phrases:
 var total_words = document.querySelectorAll('.word-target').length;
 var total_phrases = document.querySelectorAll('.phrase-target').length;
 var str = `
 <a href="#" class="active">قاموس موندلي</a>
 <a href="../index.html">الصفحة الرئيسية</a>
 <a href="../others/personal_pronouns_chart.html">ملخص الضمائر الشخصية</a>
 <a href="../others/verbs.html">الأفعال - الأزمنة البسيطة</a>
 <a href="../others/important_vocabularies.html">كلمات مهمة</a>
 <hr>
 <button href="#" onclick="changeFont();">تغيير الخط</button>
 <button href="#" onclick="toggleCol(this);">إخفاء</button>
 <a href="javascript:void(0);" class="icon" onclick="toggleTopNav()">
   <i class="fa fa-bars"></i>
 </a>

 `;

 var divBox = document.createElement('div');
 divBox.setAttribute('id', 'myTopnav');
 divBox.setAttribute('class','topnav');
 divBox.innerHTML = str;
 var location = document.querySelector('body');
 // location.insertAdjacentElement("afterend", divBox);
 location.prepend(divBox);
}


function createFooter(){
 var str=`

 `

}





function toggleTopNav(){
 var x = document.getElementById("myTopnav");
 if (x.className === "topnav") {
   x.className += " responsive";
 } else {
   x.className = "topnav";
 }
}










/*
 <nav class="sticky">
  <ul class="list-inline">
   <li class="menu-item" onclick="changeFont();">تبديل الخط</li>
   <li class="menu-item" id="toggle" onclick="toggleCol(this);">إخفاء</li>
   <li class="menu-item" id="home"><a href="../index.html">الصفحة الرئيسية </a></li>
   <details class="sub-list"> 
   <summary>روابط</summary>
     <li class="menu-item"><a href="../others/personal_pronouns_chart.html" target="_blank">ملخص الضمائر الشخصية</a></li>
     <li class="menu-item"><a href="../others/verbs.html">الأفعال - الأزمنة البسيطة</a></li> 
     <li class="menu-item"><a href="../others/important_vocabularies.html">كلمات مهمة</a></li>
   </details>
    <li class="counter">الكلمات :<span class="total-words"> ${total_words}</span>العبارات :<span class="total_phrases"> ${total_phrases}</span></li>
  </ul>
 </nav>
*/