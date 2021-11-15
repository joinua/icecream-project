function slowScroll(id) { 
         var offset = 0;
         $('html, body').animate({ 
              scrollTop: $(id).offset().top - offset 
         }, 100000);
         return false; 
     } 