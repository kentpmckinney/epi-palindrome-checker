/*

Palindromes

A palindrome is any word, phrase, number, or other sequence of characters which reads the same backward or forward. Create a web page to identify whether or not a word is a palindrome.

Bonus points: Make your code check a string of words. For example: "Hello olleH" is a palindrome by our definition.

You may want to browse some of the built-in Javascript functionality available for strings and arrays.

var input = document.getElementById("textBoxId");
input.value = "Cup of tea";
input.setSelectionRange(0, 3); // Highlights "Cup"
input.focus();

*/

function createSelection(field, start, end) {
  if( field.createTextRange ) {
      var selRange = field.createTextRange();
      selRange.collapse(true);
      selRange.moveStart('character', start);
      selRange.moveEnd('character', end);
      selRange.select();
  } else if( field.setSelectionRange ) {
      field.setSelectionRange(start, end);
  } else if( field.selectionStart ) {
      field.selectionStart = start;
      field.selectionEnd = end;
  }
  field.focus();
}  

$(document).ready(function(){

  $("#palindrome-form").submit(function(e){
    let word = $("#inputWord").val();
    let reversedWord = word.split("").reverse().join("");
    let text = $("#inputText").val();
    let re = new RegExp(reversedWord,'g');
    let foundPalindrome = re.test(text);
    createSelection($("#inputText"), 1,3);
    $("#result").empty();
    $("#result").append(
        (foundPalindrome) ? "Palindrome found" : "No palindrome found"
    )
    e.preventDefault();
  });

});