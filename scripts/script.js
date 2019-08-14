// alert("Hello World");

// $(document).ready(function() {
//  $(".pdf").click(function() {
//   $.fancybox({
//    'width': '70%', // or whatever
//    'height': '90%',
//    'autoDimensions': false,
//    'content': '<embed src="'+this.href+'#nameddest=self&page=1&view=FitH,0&zoom=80,0,0" type="application/pdf" height="99%" width="100%" />',
//    'onClosed': function() {
//      $("#fancybox-inner").empty();
//    }
//   });
//   return false;
//  }); // pdf 
// }); // ready

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });