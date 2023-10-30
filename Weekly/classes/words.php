<?php

// build html page inside 


class Word
{
 public $target; // urdu
 public $mother; //arabic
 public $phonetic;
 
 
 public function __construct()
 {
    $target=null;
    $mother=null;
    $phonetic=null;
 }

public function SetTarget($target) {
    $this->target=$target;
}
public function SetMother($mother){
    $this->mother=$mother;
}
public function SetPhonetic($phonetic){
    $this->phonetic=$phonetic;
}

public function getTarget($target) {
    return $this->target;
}
public function getMother($mother){
    return $this->mother;
}
public function getPhonetic($phonetic){
    return $this->phonetic;
}
 public function getAsHtml(): string
 {
  $html =  <<<EOF
        <div class="word">
            <span class="target">$this->target</span>
            <span class="mother">$this->mother</span>
            <span class="mother">$this->phonetic</span>
        </div>
        EOF;
  return $html;
 }
}
