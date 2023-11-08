console.log('scripts/quick_selectors.js ......');
var words_array = [];
var images_array = [];
var phrases_array = [];

function getSectionVariables() {
    //  select all words (one line container of (target,mother} =>
    words_array = document.querySelectorAll('.list > .is-content-card-wrapper:first-child > .words > .word');

    //select all image urls for words, images_container[x].style.background-image=url("xxx")
    var images_container = document.querySelectorAll('.word-inner .phrase-image');

    //  extract urls from images elements
    var attrValue;
    var start;
    var end;
    var urlValue;

    for (var i = 0; i < images_container.length; i++) {
        attrValue = images_container[i].style.backgroundImage;
        start = attrValue.indexOf('(') + 2;
        end = attrValue.indexOf(')');
        urlValue = attrValue.substring(start, end);
        images_array[i] = urlValue;
    }

    //------------------------
    // select all phrases (one line container of (text elements {target,mother} ) =>
    phrases_array = document.querySelectorAll('.phrase .text');
}

// template
function extractMinifierData() {
    var top_container = `
<div id="top-container">
   <section id="words-container" class="section">`;
    //    append words
    for (var i = 0; i < words.length, i++) {
        top_container += `
        <article class="word-wrapper">
          <div class="word-target">${target} </div>
          <div class="word-mother">${mother}</div>
          <div><img src="${word-image}" alt="word image" height="auto" width="30px"></div>
    </article>
    `;
    }
    top_container += `</section>
    <section id="phrases-cotainer" class="section">`;
    for (var i = 0; i < phrases.length; i++) {
        top_container += `
          <article class="phrase">
           <div class="phrase-target">${phrase_target}</div>
           <div class="phrase-mother">${phrase_mother}</div>
        </article>`;
    }
    top_container += `</section></div>`;
}
