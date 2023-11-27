function get_lessons_titles() {
  var items_boxes = document.querySelectorAll(".items-boxes .subtitle");
  var html = ``;
  for (const [index, element] of items_boxes.entries()) {
    if (index < 7) {
      html += `<header id='${index + 1}' class="lessson-header"><h1>${index +
        1} - ${element.innerText}</h1>
  </header>`;
    }
  }
  html = html.replaceAll("\n", "");
  return html;
}

function getTopHtml(){
  var topHtml=`
  <!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="../w3pro.css">
 <link rel="stylesheet" href="main.css">
 <title>?????</title>
</head>

<body>

 <div id="media-bar"></div>

 <header class="page-header">
  <h1 class="button-85" role="button">?????</h1>
  <div class="video-wrapper">
   <video class="op-player op-player__media" controls>
    <source src="#" type="audio/mpeg" />
   </video>
  </div>
 </header>


  `;
return topHtml;
}




function getPageTemplate(){
  var htmlTemplate=getTopHtml() + get_lessons_titles(); 
  return htmlTemplate;
}