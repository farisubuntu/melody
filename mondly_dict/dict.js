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
 createStickyButtons();
 state = 4;
}
console.log('starting script');

// Toggle button:

function toggle(col) {
 // if 0 => reload the page
 if(col == 0){
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
 if(col==3){
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
 if(col==4)
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

</details>
 `;

 var divBox = document.createElement('div');
 divBox.setAttribute('class', 'btns-wrapper');
 divBox.innerHTML = str;
 var location = document.querySelector('.page-header');
 location.insertAdjacentElement("afterend", divBox);

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

