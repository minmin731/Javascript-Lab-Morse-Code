
var userPrompt = prompt("Enter text:");
var morseString = "";

var morseTable = { a : ".-",
                  b : "-...",
                  c : "-.-.",
                  d : "-..",
                  e : ".",
                  f : "..-.",
                  g : "--.",
                  h : "....",
                  i : "..",
                  j : ".---",
                  k : "-.-",
                  l : ".-..",
                  m : "--",
                  n : "-.",
                  o : "---",
                  p : ".--.",
                  q : "--.-",
                  r : ".-.",
                  s : "...",
                  t : "-",
                  u : "..-",
                  v : "...-",
                  w : ".--",
                  x : "-..-",
                  y : "-.--",
                  z : "--..",
                  1 : ".----",
                  2 : "..---",
                  3 : "...--",
                  4 : "....-",
                  5 : ".....",
                  6 : "-....",
                  7 : "--...",
                  8 : "---..",
                  9 : "----.",
                  0 : "-----",
                  '.' : ".-.-.-",
                  ',' : "--..--",
                  '?' : "..--..",
                  "!" : "..__."};
this.assembleMorseString();
function assembleMorseString() {
  for(i = 0; i < userPrompt.length; i++){
      morseString += morseTable[userPrompt.charAt(i).toLowerCase()];
      morseString += "/";
  }
};
console.log(morseString);
var display = document.getElementById("result");
display.innerHTML = morseString;
