console.log('starting verbs_bank.js ....');

/**
 * state=2
 * 0=> all visible
 * 1=> ur,latin,example  invisible
 * 2=> ur is visible and ar,example are not.
 * 3=> 
 */
var state;

/**
 * 0: default, noto naskh arabic
 * 1: noto nastaliq urdu
 */
var selectedFont = 0;

onload = function () {
 createStickyButtons();
 state = 0;
 toggleCol(state);
}



function allVisible(){

}
// Toggle button:

function toggle(col) {
 // * 1=> ur,latin,example  invisible
 if (col == 1) {
  document.querySelectorAll('.row > .ur').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.row > .latin').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.row > .example').forEach(function (i) {
   i.style.visibility = "hidden";
  });
 }

 // * 2=> ur,latin is visible and ar,example are not.

 if (col == 2) {
  document.querySelectorAll('.row > .ur').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.row > .latin').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.row > .example').forEach(function (i) {
   i.style.visibility = "hidden";
  });
  document.querySelectorAll('.row > .ar').forEach(function (i) {
   i.style.visibility = "hidden";
  });

 }

 if (col == 0) {
  // all visible
  document.querySelectorAll('.row > .ur').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.row > .latin').forEach(function (i) {
   i.style.visibility = "visible";
  }); 
   document.querySelectorAll('.row >.ar').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.row > .example').forEach(function (i) {
   i.style.visibility = "visible";
  });
  document.querySelectorAll('.row > .more-example').forEach(function (i) {
   i.style.visibility = "visible";
  });
 }
}
function toggleCol(btn) {

 if (state >2) { state = 0; }
 console.log('state was= ',state);
 toggle(state);
 state++;
 console.log('state now = ',state);
}



// create sticky buttons:
function createStickyButtons() {
 console.log('createStickyButtons()...');
 var str = `
   <button class="sticky-btn" onclick="changeFont();">تبديل الخط</button>
   <button id="toggle" class="sticky-btn" onclick="toggleCol(this);">إخفاء</button>
   <button id="home" class="sticky-btn"><a href="../../index.html">الصفحة الرئيسية </a></button>
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
 var location = document.querySelector('#page-header');
 location.insertAdjacentElement("afterend", divBox);

}

function changeFont() {
 console.log('changeFont() ');
 if (selectedFont == 0) {
  selectedFont = 1;
  document.querySelectorAll('.ur').forEach(function (i) {
   i.style.fontFamily = "Noto Nastaliq Urdu, serif";
  });

 }
 else {
  selectedFont = 0;
  document.querySelectorAll('.ur').forEach(function (i) {
   i.style.fontFamily = "Noto Naskh Arabic, serif";
  });


 }
}
