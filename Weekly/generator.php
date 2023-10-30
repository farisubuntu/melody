<?php
// ./generator.php

include_once "./classes/words.php";
$target_array = array();
$mother_array = array();

// clean 

function cleaner()
{
 $text_ms = file('data/text_m.txt');
 $text_ts = file('data/text_t.txt');
 global $target_array;
 global $mother_array;

 foreach ($text_ms as $item) {
  $m = str_replace(
   array(
    '"', ',', 'text_m', ':', '1'
   ),
   "",
   $item
  );
  // echo $m;
  array_push($mother_array, $m);
 }
 // var_dump($mother_array);

 foreach ($text_ts as $item) {
  // $text_m=str_replace("\"text_m\":","",$item);
  $t = str_replace(
   array(
    '"', ',', 'text_t', ':', '1'
   ),
   "",
   $item
  );
  // echo $t;
  array_push($target_array, $t);
 }
  // var_dump($target_array);

}
?>