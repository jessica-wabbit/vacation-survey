// Business (or back-end) logic:
var add = function(answer1, answer2, answer3, answer4, answer5, answer6) {
  return answer1 + answer2 + answer3 + answer4 + answer5 + answer6;
};

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault();

   var language = parseInt($("input:radio[name=language]:checked").val());
   var family = parseInt($("input:radio[name=family]:checked").val());
   var hiking = parseInt($("#hiking").val());
   var liketo = parseInt($("#liketo").val());
   var zipline = parseInt($("#zipline").val());
   var activity = parseInt($("input:radio[name=activity]:checked").val());



   var result = add(language, family, hiking, liketo, zipline, activity);

   if (result >= 6 && result <=9) {
     $("#hardcore").hide();
     $("#lightadventure").hide();
     $("#eurotour").hide();
     $("#caribbeancruise").show();
   } else if (result >=10 && result <=14) {
     $("#hardcore").hide();
     $("#lightadventure").hide();
     $("#caribbeancruise").hide();
     $("#eurotour").show();
   } else if (result >=15 && result <=19) {
     $("#hardcore").hide();
     $("#caribbeancruise").hide();
     $("#eurotour").hide();
     $("#lightadventure").show();
   } else if (result >=20 && result <=23) {
     $("#caribbeancruise").hide();
     $("#eurotour").hide();
     $("#lightadventure").hide();
     $("#hardcore").show();
   }

 });

});
