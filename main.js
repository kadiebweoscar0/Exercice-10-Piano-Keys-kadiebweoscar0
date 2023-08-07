//hello word

// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

//branch dev
// Write named functions that change the color of the keys below
const ckey = document.getElementById("c-key");
const dkey = document.getElementById("d-key");
const ekey = document.getElementById("e-key");
const fkey = document.getElementById("f-key");
const gkey = document.getElementById("g-key");
const akey = document.getElementById("a-key");
const bkey = document.getElementById("b-key");
const highCKey = document.getElementById("high-c-key");

// Write a named function with event handler properties
//create a function KeyPlay
function keyPlay(){
  ckey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  dkey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  ekey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  fkey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  gkey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  akey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  bkey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
  highCKey.addEventListener('mousedown', function (event){
    event.target.style.backgroundColor = 'crimson';
  });
  
};

//Create a function KeyReturn
function KeyReturn(){
  ckey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  dkey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  ekey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  fkey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  gkey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  akey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  bkey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
  
  highCKey.addEventListener('mouseup', function (event){
    event.target.style.backgroundColor = '';
  });
};

//create a function addEventTouch
function addEventTouch(note) {
  note.addEventListener('mousedown', keyPlay())
  note.addEventListener('mouseup', KeyReturn())
}
// Write a loop that runs the array elements through the function


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button


// Write anonymous event handler property and function for the second progress button


// Write anonymous event handler property and function for the third progress button


// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}