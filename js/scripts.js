// Business (or back-end) logic:
var add = function(number1, number2, number3, number4) {
  return number1 + number2 + number3 + number4;
};

// Everything below this line is user interface (or front-end) logic:
$(document).ready(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault();

   var hiking = parseInt($("#hiking").val());
   var liketo = parseInt($("#liketo").val());
   var zipline = parseInt($("#zipline").val());
   var activity = parseInt($("input:radio[name=activity]:checked").val());



   var result = add(hiking, liketo, zipline, activity);

   if (result >= 4 && result <=7) {
     $("#hardcore").hide();
     $("#lightadventure").hide();
     $("#eurotour").hide();
     $("#caribbeancruise").show();
   } else if (result >=8 && result <=11) {
     $("#hardcore").hide();
     $("#lightadventure").hide();
     $("#caribbeancruise").hide();
     $("#eurotour").show();
   } else if (result >=12 && result <=14) {
     $("#hardcore").hide();
     $("#caribbeancruise").hide();
     $("#eurotour").hide();
     $("#lightadventure").show();
   } else if (result === 15 || result === 16) {
     $("#caribbeancruise").hide();
     $("#eurotour").hide();
     $("#lightadventure").hide();
     $("#hardcore").show();
   }

 });

});
