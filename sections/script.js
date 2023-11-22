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
  // createStickyButtons();
  appendTenseTitles();
  embedCollapseSide();
  embedVerbsShow();

  // appendClasses();
  state = 2;
};
console.log("starting script");

function appendTenseTitles() {
  console.log("appendTenseTitles() .....");
  var verb_tenses = document.querySelectorAll(".verb-tenses");

  for (var i = 0; i < verb_tenses.length; i++) {
    for (var k = 0; k < 3; k++) {
      var tense = verb_tenses[i].children[k];

      var elem = document.createElement("div");

      var node = "";
      if (k == 0) {
        node = `<img src="https://farisubuntu.github.io/mondly/sections/icons/past.png" />`;
      }
      if (k == 1) {
        node = `<img src="https://farisubuntu.github.io/mondly/sections/icons/present.png" />`;
      }
      if (k == 2) {
        node = `<img src="https://farisubuntu.github.io/mondly/sections/icons/future.png" />`;
      }
      elem.setAttribute("class", `conj tense-${k}`);
      elem.innerHTML = node;
      tense.prepend(elem);
    }
  }
}

// Toggle button:

function toggle(col) {
  if (col == 1) {
    document.querySelectorAll(".text .target").forEach(function (i) {
      i.style.visibility = "hidden";
    });
    document.querySelectorAll(".text .mother").forEach(function (i) {
      i.style.visibility = "visible";
    });
  }
  if (col == 2) {
    document.querySelectorAll(".text .target").forEach(function (i) {
      i.style.visibility = "visible";
    });
    document.querySelectorAll(".text .mother").forEach(function (i) {
      i.style.visibility = "hidden";
    });
  }
  if (col == 0) {
    // all visible
    document.querySelectorAll(".text .target").forEach(function (i) {
      i.style.visibility = "visible";
    });
    document.querySelectorAll(".text .mother").forEach(function (i) {
      i.style.visibility = "visible";
    });
  }
}
function toggleCol() {
  if (state < 0) {
    state = 2;
  }
  toggle(state);
  state--;
}

// // create sticky buttons:
// function createStickyButtons() {
//   console.log("createStickyButtons()...");

//   var divBox = document.createElement("div");
//   divBox.setAttribute("class", "btns-wrapper");
//   divBox.innerHTML = floatButtons;
//   document.body.prepend(divBox);
// }

function changeFont() {
  console.log("changeFont() ");
  if (selectedFont == 0) {
    selectedFont = 1;
    document.querySelectorAll(".text .target").forEach(function (i) {
      i.style.fontFamily = "Noto Nastaliq Urdu, serif";
    });
    document.querySelectorAll(".text .target").forEach(function (i) {
      i.style.lineHeight = 3;
    });
  } else {
    selectedFont = 0;
    document.querySelectorAll(".text .target")
      .forEach(function (i) {
        i.style.fontFamily = "Noto Naskh Arabic, serif";
      });
    document.querySelectorAll(".text .target").forEach(function (i) {
      i.style.lineHeight = 1;
    });
  }
}

// ---------------------------------------
var words_array = [];
var images_array = [];
var phrases_array = [];

function getSectionVariables() {
  //  select all words (one line container of (target,mother} =>
  words_array = document.querySelectorAll(
    ".list > .is-content-card-wrapper:first-child > .words > .word"
  );

  //select all image urls for words, images_container[x].style.background-image=url("xxx")
  var images_container = document.querySelectorAll(".phrase-image");
  //  extract urls from images elements

  var urlValue;

  images_container.forEach(function (i) {
    urlValue = i.style.backgroundImage;
    urlValue = urlValue.replace('url("', "");
    urlValue = urlValue.replace(")", "");
    urlValue = urlValue.replace('"', "");
    images_array.push(urlValue);
  });
  //------------------------
  // select all phrases (one line container of (text elements {target,mother} ) =>
  phrases_array = document.querySelectorAll(".phrase .text");
}
// template

function getDictionaryData() {
  getSectionVariables(); // this will fill global variable images_array,....
  words_len = words_array.length;
  images_len = images_array.length;
  phrases_len = phrases_array.length;
  var top_container = `<div class="lesson-wrapper"><!-- ${window.location.pathname} -->
 <header><p class="lesson-title">${window.location.pathname}</p></header>
 <section class="words-container">`;

  //    append words
  var target;
  var mother;
  var image_url;
  for (var i = 0; i < words_array.length; i++) {
    target = words_array[i].querySelector(".target").innerText;
    image_url = images_array[i];
    mother = words_array[i].querySelector(".mother").innerText;
    top_container += `
        <article class="word-wrapper">
          <div class="word-target">${target}</div>
          <div class="word-mother">${mother}</div>`;
    if (i < images_len) {
      top_container += `<div class="image-wrapper"><img src='${image_url}' /"></div>
                 </article>`;
    } else {
      top_container += `</article>`;
    }
  }
  top_container += `</section><section class="phrases-container">`;
  var phrase_target;
  var phrase_mother;
  for (var i = 0; i < phrases_array.length; i++) {
    phrase_target = phrases_array[i].querySelector(".target").innerText;
    phrase_mother = phrases_array[i].querySelector(".mother").innerText;
    top_container += `
          <article class="phrase-wrapper">
           <div class="phrase-target">${phrase_target}</div>
           <div class="phrase-mother">${phrase_mother}</div>
          </article>`;
  }
  top_container += `</section> </div><!-- end of lesson-wrapper --> `;

  document.body.innerHTML = "";

  document.body.style.padding = "1.5rem";
  document.body.style.color = "green";
  document.body.style.backgroundColor = "whitesmoke";
  document.body.style.border = "2px solid skyblue";
  document.body.style.direction = "ltr";

  document.body.textContent = top_container;
}

function appendClasses() {
  // append 'snow' class to .is-content-card-wraper
  var elements = document.querySelectorAll(
    ".is-content-card-wrapper:first-child"
  );
  console.log("elements.lenght= ", elements.length);

  elements[0].className = "snow";
  elements[3].className = "snow";
  elements[5].className = "snow";
}

var buttonBar = `
<div id="button-bar">
<button class="feedback" onclick="topFunction(this)" id="myBtn" title="Go to top">Top</button>
<button id="btn-verbs-toggle" class="feedback" onclick="toggleVerbs(this);">الأفعال</button>
<button class="feedback" onclick="toggleTheme(this);">تغيير الثيم</button>
</div>
`;


function collapsedSidePanel() {
  var element = `
<div id="mySidepanel" class="sidepanel">
<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
<a href="javascript:void(0)" onclick="toggleCol(this)">أخفاء </a>
<a href="javascript:void(0)" onclick="changeFont()">تغيير الخط</a>
<a href="../index.html" target="_blank">الصفحة الرئيسية</a>
<a href="../others/personal_pronouns_chart.html" target="_blank">ملخص الضمائر الشخصية</a>
<a href="../others/verbs.html">الأفعال - الأزمنة البسيطة</a>
<a href="../others/important_vocabularies.html">كلمات مهمة</a>
</div>
<button class="openbtn" onclick="openNav()">&#9776; Toggle</button>
`;
  return element;
}




function embedCollapseSide() {
  var side_panel_wrapper = document.createElement("div");
  side_panel_wrapper.innerHTML = collapsedSidePanel();
  side_panel_wrapper.setAttribute("class", "sidePanelWrapper");
  console.log(side_panel_wrapper);
  document.body.prepend(side_panel_wrapper);
}

function embedVerbsShow() {
  var buttonsContainer = document.createElement("div");
  buttonsContainer.innerHTML = buttonBar;
  buttonsContainer.setAttribute("id", "button-bar");
  document.body.prepend(buttonsContainer);
}

//  hide all verbs by default:
document.querySelectorAll(".verbs").forEach(function name(e) {
  e.style.display = "none";
});

var verbs = 0; // default, hidden.
function toggleVerbs(sender) {
  console.log("toggleVerbs() invoked", sender);
  if (verbs == 1) {
    document.querySelectorAll(".verbs").forEach(function name(e) {
      e.style.display = "none";
    });
    sender.innerText = "الأفعال";
    verbs = 0;
  } else {
    document.querySelectorAll(".verbs").forEach(function name(e) {
      e.style.display = "initial";
    });
    verbs = 1;
    sender.innerText = "بدون الأفعال";
  }
}

/* ---------------------------------------------- */
var theme1 = document.createElement("link");
theme1.setAttribute("rel", "stylesheet");
theme1.setAttribute("href", "theme_1.css");
// theme1;
var currentTheme = 1; // black-initial
function toggleTheme() {
  if (currentTheme == 1) {
    document.head.appendChild(theme1);
    currentTheme = 0;
  } else {
    document.head.removeChild(theme1);
    currentTheme = 1;
  }
}
// ------------------collapsedSidePanel-------------------------------------

// topFunction button:
function topFunction() {
  // Get the button
  let mybutton = document.getElementById("myBtn");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// **************** collapsedPanel   *************************
/* Set the width of the sidebar to 250px (show it) */
var menu_showed = 0;
function showMenu() {
  if (menu_showed == 0) {
    menu_showed = 1;
    document.getElementById("mySidepanel").style.width = "250px";
    var myTimeout = setTimeout(closeNav, 4000);
  } else {
    menu_showed = 0;
    closeNav();
  }
}
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  showMenu();
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


// keyboard shortcuts

document.onkeydown = function () {
  let key = event.key;
  // if (key == "p") {
  //   document.body.style.backgroundColor = "blue";
  // }

  switch (key) {
    case "t":
      toggleTheme();
      break;
    case "h":
      toggleCol();
      break;
    case "v":
      toggleVerbs();
      break;
    case "f":
    changeFont();
    default:
      console.log(key," ...pressed");
      break;
  }
};