var lesson;
var quizzes;
onload = function() {
  console.log("onload...start()");
  getJsonAsText(file_path);
};

// temporary only variable:
var file_path = "./301.json";

// global variable to save json data:
var data;

async function getJsonAsText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  data = await JSON.parse(myText);
  quizzes = data.quizzes;
  lesson = data.lesson;
}

// sample template:
function getLessonTemplate(lesson) {
  var html = `

 `;

  return html;
}

var basePath = "https://d13tz37rv54ob.cloudfront.net/ur/";
var container = document.querySelector(".container");
function start() {
  var i;
  var k;
  // for (i = 0; i < quizzes.length; i++) {
    var alts =quizzes[0].alts;
    var sols =quizzes[0].sols;
    for (k = 0; k < alts.length; k++) {
      getSolsBlock(sols[k]);
      getAltsBlock(alts[k]);
    }
  // }
}

function getSolsBlock(sols) {
  var sol = `${basePath}${sols.key}?t=${sols.audio_updated_at}`;
  var text = sols.text;
  container.innerHTML += `
  <div class="mother"> 
   Audio link => '${sol}' , Mother :${text}<br>
   </div>
  `;
  // console.log("[", sol, "], [", text, "]");
}

function getAltsBlock(alt) {
  var audio = `${basePath}${alt.key}?t=${alt.audio_updated_at}`;
  var image_url = `${basePath}${alt.image}?t=${alt.image_updated_at}`;
  var text = alt.text;
  container.innerHTML += `
   <div class='target'>
   phrase: ${audio}<br>
   Word: ${text}<br>
    <div class='img-wrapper'><img src='${image_url}' /></div>
   </div>
   <hr>
  `;
}
