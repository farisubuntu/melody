onload=function(){
 appendTenseTitles();
}
console.log('starting script');
function appendTenseTitles() {
 var verb_tenses = document.querySelectorAll('.verb-tenses');

 for (var i = 0; i < verb_tenses.length; i++) {
  for (var k = 0; k < 3; k++) {
   // var past=verb_tenses[i].children[0];
   // var present=verb_tenses[i].children[1];
   // var futue=verb_tenses[i].children[2];
   var tense=verb_tenses[i].children[k];
   
   var elem = document.createElement('p');
   elem.setAttribute('class','title');
   
   var node = '';
   if (k == 0) { node = document.createTextNode('الماضي'); }
   if (k == 1) { node = document.createTextNode('الحاضر'); }
   if (k == 2) { node = document.createTextNode('المستقبل'); }
   elem.appendChild(node);
   tense.append(elem);
  }

 }
}


