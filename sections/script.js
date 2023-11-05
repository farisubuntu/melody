
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
var selectedFont=0;

onload = function () {
 createStickyButtons();
 appendTenseTitles();
 state = 2;
}
console.log('starting script');
function appendTenseTitles() {
 var verb_tenses = document.querySelectorAll('.verb-tenses');

 for (var i = 0; i < verb_tenses.length; i++) {
  for (var k = 0; k < 3; k++) {
   // var past=verb_tenses[i].children[0];
   // var present=verb_tenses[i].children[1];
   // var futue=verb_tenses[i].children[2];
   var tense = verb_tenses[i].children[k];

   var elem = document.createElement('p');
   elem.setAttribute('class', 'title');

   var node = '';
   if (k == 0) { node = document.createTextNode('الماضي'); }
   if (k == 1) { node = document.createTextNode('الحاضر'); }
   if (k == 2) { node = document.createTextNode('المستقبل'); }
   elem.appendChild(node);
   tense.append(elem);
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
 
 if(state<0){state=2;}
 toggle(state);
 state--;
}

// create sticky buttons:
function createStickyButtons(){
 console.log('createStickyButtons()...');
 var str=`
   <button class="sticky-btn" onclick="changeFont();">تبديل الخط</button>
   <button id="toggle" class="sticky-btn" onclick="toggleCol(this);">إخفاء</button>
   <button id="home" class="sticky-btn"><a href="../index.html">الصفحة الرئيسية </a></button>
   <details class="sticky-btn">
 <summary>جداول</summary>
 <li><a href="../others/personal_pronouns_chart.html" target="_blank">ملخص الضمائر الشخصية</a></li>
 <li><a href="../others/verbs.html">الأفعال - الأزمنة البسيطة</a></li> 

</details>
 `;
 
 var divBox=document.createElement('div');
 divBox.setAttribute('class','btns-wrapper');
 divBox.innerHTML=str;
 var location=document.querySelector('#media-bar');
 location.insertAdjacentElement("afterend",divBox);

}

function changeFont(){
 console.log('changeFont() ');
 if(selectedFont==0){
  selectedFont=1;
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.fontFamily="Noto Nastaliq Urdu, serif";
  });
 }
 else{
  
  document.querySelectorAll('.text .target').forEach(function (i) {
   i.style.fontFamily="Noto Naskh Arabic, serif";
  });
  
  
 }
}