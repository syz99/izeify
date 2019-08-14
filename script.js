var button = document.getElementById('trigger');
var copyBtn = document.getElementById('copyBtn');
var file = 'ize-words.txt';
var output = document.getElementById('output-phrase');
var words = [];
var word = '';
var root = '';
var phrase = '';

button.addEventListener('click', function() {
  generate();
})

function generate() {
  copyBtn.style.visibility = 'visible';
  copyBtn.innerHTML = 'copy to clipboard';
  button.innerHTML = 'generate another'
  
  var client = new XMLHttpRequest();
  client.open('GET', file);
  client.onreadystatechange = function() {

    words = client.responseText.split('\n'); // array of all word prefixes
    word = words[Math.floor(Math.random() * words.length)]; // random word from words
    
    if (word.includes('enize')) {
       root = word.slice(0, -5);
    } else if (word.includes('tize')) {
      root = word.slice(0, -4);
    } else if (word.includes('vize')) {
      root = word.slice(0, -3) + 'e';
    } else {
      root = word.slice(0, -3); // remove 'ize' from word
    } 
    
    if (root.charAt(root.length-1) === 'u') {
      root += 'e'
    }
    phrase = word + '... ' + root + ' eyes... ' + root + ' lies...';
    output.innerHTML = phrase;
  }
  client.send();
}

function copy() {
  copyBtn.innerHTML = 'copied!'
  var temp = document.createElement('textarea');
  temp.value = phrase;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}
