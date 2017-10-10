$(document).ready(function()
{
    
  // Add smooth scrolling on all links inside the navbar
  $("#navbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 68
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
    
    //
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        //console.log(scroll);
        if(scroll>=430){
                scrollButton.show();
           }else{
               scrollButton.hide();
           }
    });
    
    scrollButton.click(function(){
        $("html,body").animate({scrollTop:0},600);
    });
    
});

//loading Screen
$(window).on("load",function()
{
    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow","auto");
    });
});
