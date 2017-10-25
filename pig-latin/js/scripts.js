var alphaChar = /[A-Za-z]/;
var vowels = /[aeiouAEIOU]/;
var pigLatinWords = [];
var pigLatinSentence = [];
var output;

var words = function(sentence) {
  return sentence.split(" ");
};

var letters = function(word) {
  return word.split("");
};

var iglatinPay = function(userSentence) {
  var userWords = words(userSentence);
  userWords.forEach(function(word) {
    var userLetters = letters(word);
    if (vowels.test(userLetters[0])) {
      userLetters.push("w", "a", "y");
      pigLatinWords = userLetters.join("");
    } else {
      pigLatinWords = userLetters.join("");
    };
    pigLatinSentence.push(pigLatinWords);
  });
  return pigLatinSentence.join(" ");
};

$(function(){
  $("#pig-latin").submit(function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    var pigLatin = iglatinPay(userInput);
    $("#result").text(pigLatin);
  });
});
