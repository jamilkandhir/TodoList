
    // Toggleside bar
		$(document).on('click','#menu-toggle', function(e) {  
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
		$(document).on('click','#menu-toggle-2', function(e) {     
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");		
        $('#menu ul').hide();
		$(".navbar-header").toggleClass('tgl');
		$(".navbar-header a").text(function(i, text){
          return text === "BD" ? "Badael" : "BD";
      })
    });
	
	//header right nav
	$(document).on('click','.dropdown-toggle', function(e) {	
		$('.navbar-right').find('ul.dropdown-menu').hide();
		$(this).parent('li').find('ul.dropdown-menu').show();
	});
	$(document).on('click','html', function(event) {
		var $target = $(event.target);
		if ($target.parents('.navbar-right').length == 0) {
		  $('.navbar-right').find(".dropdown-menu").hide();
		}		
	});
	// page close	
	$(document).on('click','.page-close', function(e) {
		$(this).parent('.inner-wrapper').hide()
	});
		
	
	// Sidebar - list submenu 	
	function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $(document).on('click','#menu li a', function() {
          var checkElement = $(this).next();
              checkElement.slideToggle(100);
          }
        );

        
      }

	// for bring modal popup forward
	$(document).on('click','.model-btn', function(){	
		var modelId= '#' + $(this).data("target").substring(1);
		var modals = $('#wrapper '+ modelId);
		for(var i=1; i< modals.length; i++){
				modals[i].remove();		//Remove existing modals before appending
		}
		$(modelId).appendTo('#wrapper');
        
    });

	$(document).on('click','.sidebar-nav li a', function() { 
		$('.sidebar-nav li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	  
    $(document).ready(function() {
		initMenu(); // list submenu
 /*$( window ).resize(function() {       
        slider.reloadSlider();;
    });*/
	});

	
	
	
	
	

	