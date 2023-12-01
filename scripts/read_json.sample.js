// script.js
onload=function(){
 caller(url_raw); 
}


var url_raw = 'https://raw.githubusercontent.com/farisubuntu/mondly/master/sections/1201.json';
var data_obj;
var lesson;
var quizzes;

// async function get_json(url) {
//   const res = await fetch(url);
//   data_obj = await res.json();
//   console.log('data_obj: ',data_obj);
// }


async function getJSON(url) {
    return fetch(url)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson});
}
async function caller(url) {
    const json = await this.getJSON(url);  // command waits until completion
            // hello is now available
    lesson=json.lesson;
    quizzes=json.quizzes;
}