(function($) {
  "use strict";
    
  jQuery(window).load(function($) {
   jQuery('#hometicker').vTicker();
    jQuery('.testimonialslider').flexslider({
    animation: "slide",       
    controlNav : false,
    prevText: '<div data-icon="&#xe098;" class="icon"></div>', 
    nextText: '<div data-icon="&#xe0cc;" class="icon"></div>'
    });
     jQuery('.fitvids').fitVids();
  });

$(window).resize(function() {
    clearTimeout($.data(this, 'resizeTimer'));
    $.data(this, 'resizeTimer', setTimeout(function() {
        jQuery('#hometicker').vTicker();
    }, 200));
});
			
jQuery(document).ready(function($) { 
 // Cache selectors
 var lastId;
 var topMenu = $("#mainmenu"); 
 var topMenuHeight = 0;//topMenu.outerHeight()+15
     // All list items
 var menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function(){
       var item = $($(this).attr("href"));
       
       if (item.length) { return item; }
     });
  

 // Bind click handler to menu items
 // so we can get a fancy scroll animation
menuItems.click(function(e){
  e.preventDefault();
   var href = $(this).attr("href"),
       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
       
  
   $('html, body').stop().animate({ 
       scrollTop: offsetTop
   }, 400);
  //return false;
 });


        $(window).scroll( function ()
        {
            var fromTop = $(this).scrollTop()+25;
            var cur = scrollItems.map(function(){
              if ($(this).offset().top < fromTop)
                return this;
            });
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                menuItems
                  .parent().removeClass("active");
                  menuItems.filter("[href=#"+id+"]").parent().addClass("active");               
                   }
                   
                 // Animation function  
                   $('.animate').not('.load').each(function(i){
                           var $this=$(this);
                           var ind = i * 100;
                           var docViewTop = $(window).scrollTop();
                           var docViewBottom = docViewTop + $(window).height();
                           var elemTop = $this.offset().top;      
                   
                               if (docViewBottom >= elemTop) { 
                                   setTimeout(function(){ 
                                        $this.addClass('load');
                                   	}, ind);
                                   }
                       });
                      //End function 
                   
        });
    });
    
    
    
    
    		jQuery(function(jQuery) {
    
    				Boxgrid.init();
    				
    
    			});
    			

// Contact Form
  $(document).ready(function() {

      function send(name,mail,phone,content) {
      	jQuery.ajax({
              type: "POST",
              url: "php/mail.php",
              data: {	name: name,
              			email:mail,	 
                       phone:phone,	 
              			content: content},
              cache: false,
              success: function (html) {
              
                  setTimeout(function(){
                  jQuery("#submit").removeClass("disabled");
                  jQuery("#submit").html(html);
                  setTimeout(function(){
                  		var val=jQuery("#submit").attr('data-value');
                  		jQuery("#submit").html(val);}, 2000);
                  }, 2000);
              }
          });
      }

          $("#submit").click(function (event) {
              event.preventDefault();
              var valid = "";
              var mail = $('#email').val();
              if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
                  valid += "Invalid&nbsp;email";
              }
              if (valid != "") {
                   $('#email').addClass('error_input');
              } else {
                  var content=$('#message').val();
                  var phone=$('#phone').val();
                  var name=$('#name').val();
                  
                  if($('#email').hasClass('error_input')){
                  		$('#email').removeClass('error_input');
                  };
                  
                  $("#submit").addClass('disabled');
                  $("#submit").html('Sending email...');
                  setTimeout(function(){send(name,mail,phone,content);}, 2000);
              }
              return false;
          });
          
          jQuery("#email").keypress(function(e) {
              if(e.keyCode == 13) {
                  jQuery("#submit").click();
                  return false;
              }

      });
      

      
});   


})(jQuery); 			