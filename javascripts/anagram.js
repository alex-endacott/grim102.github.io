function error() {
  $('#result').text("Text field empty");
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "#result { color: black }";
  document.body.appendChild(css);
}

function success() {
  $('#result').text("Anagrams");
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "#result { color: green }";
  document.body.appendChild(css);
}

function failure() {
  $('#result').text("Not Anagrams");
  
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "#result { color: red }";
  document.body.appendChild(css);
}

function runTest(word1, word2) {
  
  var count = 0;
  
  first:
  for (var i = 0; i < word1.length; i++) {
    for (var j = 0; j < word1.length; j++) {
      if (word1[i] == word2[j]) {
        count++;
        delete word2[j];
        continue first;
      }
    }
  }
  if (count == word1.length) {
    success();
  }
  else {
    failure();
  }
} 

function getWords() {
   var word1 = document.getElementById('word-one').value;
   var word2 = document.getElementById('word-two').value;
  
   word1 = word1.replace(/[^a-zA-Z]/g, '');
   word2 = word2.replace(/[^a-zA-Z]/g, '');
  
   word1 = word1.replace(/\s/g, '');
   word2 = word2.replace(/\s/g, '');
  
   word1 = word1.toLowerCase();
   word2 = word2.toLowerCase();
  
   var word1arr = Array.from(word1);
   var word2arr = Array.from(word2);
  
   word1arr.sort();
   word2arr.sort();
  
   console.log(word1arr, word2arr);
   
   if (word1arr.length == 0 || word2arr.length == 0) {
     error();
   }
  
   else if (word1arr.length != word2arr.length) {
    failure();
   }
   else {
    runTest(word1arr, word2arr);
   }
   
   return false;
 }
  
 function clearForm() {
   $('#result').text("");
 }
