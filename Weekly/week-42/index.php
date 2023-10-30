<?php

include("./classes/words.php");


// create sqlite3 obj and conn
$db = new SQLite3('./data/test.db', SQLITE3_OPEN_CREATE | SQLITE3_OPEN_READWRITE);


// read json into array
$data=file('./data/data.json');
// var_dump($data);

$removed_chars=array(',','"',':','text_m','text_t','phonetic');

$targets_array=array();
$mothers_array=array();
$phonetics_array=array();

foreach($data as $d) {
 
 // echo $d;
 if(str_contains($d,"\"text_m\":")){
  $d=str_replace($removed_chars,'',$d);
  array_push($mothers_array,$d);
 }
 if(str_contains($d,"\"text_t\":")){
  $d=str_replace($removed_chars,'',$d);
  array_push($targets_array,$d);
 }
 if(str_contains($d,"\"phonetics\":")){
  $d=str_replace($removed_chars,'',$d);
  array_push($phonetics_array,$d);
 }
}

// save length of each array 'any one'
$len=count($mothers_array);

// copy selected items from arrays into Word Objects

// Word Objects

$dict=array();

for($i=0;$i<$len;$i++){
 $w=new Word();
 $w->SetTarget($targets_array[$i]);
 $w->SetMother($mothers_array[$i]);
 $w->SetPhonetic($phonetics_array[$i]);
 array_push($dict,$w);
}



function create_table(&$dict,$name){
 global $db;
// record data into new table
$db->query('CREATE TABLE IF NOT EXISTS "$name" (
 "id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
 "TARGET" TEXT,
 "MOTHER" TEXT,
 "PHONETIC" TEXT
 )');

 // $db->exec('BEGIN');
 // foreach($dict as $word){
  
 // $db->query('INSERT INTO "$name" ("TARGET","MOTHER","PHONETIC")
 // VALUES("$word->getTarget()","$word->getMother()","$word->getPhonetic()"');
 // }

}

BuildPage();

function BuildPage(){
 include('./template_w3.php');
 
 global $dict;
 
 echo $page;
 echo "<div class='container'>";
 foreach($dict as $w){
  echo $w->getAsHtml();
 }
 echo "</div>";
 echo "</body></html>";
}