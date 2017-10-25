$(function(){
  $("#pig-latin").submit(function(event){
    event.preventDefault();
    var input = $("#user-input").val();
    var pigLatin = translate(input);
    $("#result").text(pigLatin);
  });
});
