console.log('scripts/quick_selectors.js ......');
var words_array;
var images_array;
var phrases_array;

function getSectionVariables() {
 //  select all words (one line container of (target,mother} =>
 words_array = document.querySelectorAll('.list > .is-content-card-wrapper:first-child > .words > .word');

//select all image urls for words, images_container[x].style.background-image=url("xxx")
var images_container = document.querySelectorAll('.word-inner .phrase-image');
images_array=images_container;
// TODO: images_urls= ...
 //------------------------
 // select all phrases (one line container of (text elements {target,mother} ) =>
 phrases_array = document.querySelectorAll('.phrase .text');
}
