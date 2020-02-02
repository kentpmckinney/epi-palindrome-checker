$(document).ready(function(){

  $("#palindrome-form").submit(function(e){
    let word = $("#inputWord").val();
    let reversedWord = word.split("").reverse().join("");
    let text = $("#inputText").val();
    let re = new RegExp(reversedWord,'g');
    let foundPalindrome = re.test(text);
    
    $("#result").empty();
    $("#result").append(
        (foundPalindrome) ? "Palindrome found" : "No palindrome found"
    )
    e.preventDefault();
  });

});