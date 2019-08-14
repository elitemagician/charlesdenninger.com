$(document).ready(function() {
 $(".pdf").click(function() {
  $.fancybox({
   'width': '70%', // or whatever
   'height': '90%',
   'autoDimensions': false,
   'content': '<embed src="'+this.href+'#nameddest=self&page=1&view=FitH,0&zoom=80,0,0" type="application/pdf" height="99%" width="100%" />',
   'onClosed': function() {
     $("#fancybox-inner").empty();
   }
  });
  return false;
 }); // pdf 
}); // ready

$(document).ready(function() {
/* Apply fancybox to multiple items */

$("a.iframe").fancybox({
'width': 640, // or whatever you want
'height': 480, // or whatever you want
'type': 'iframe'
});

});