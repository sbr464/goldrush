$(document).on('ready', function() {

var windowHeight = $('.mainContainer').height();
var windowWidth = $('.mainContainer').width();

var pinPointY = $('img.marker').height();
var pinPointX = .5 * $('img.marker').width();

var currentMarkerLeft;
var currentMarkerTop;

  	$(window).resize(function(){
  		windowHeight = $('.mainContainer').height();
  		windowWidth = $('.mainContainer').width();
  	});


    $('.mainContainer').on("click", "img.marker", function(e){
      e.stopPropagation();
      $(this).css('display', 'none');
    });


  	$('.mainContainer').click(function(){    

  		currentMarkerLeft = (event.pageX - pinPointX) / windowWidth * 100;
  		currentMarkerTop = (event.pageY - pinPointY) / windowHeight * 100;
		$(this).append('<img class="marker" src="img/marker.png" style="left: '
       + currentMarkerLeft +  '%; top: ' + currentMarkerTop + '%;">');
  	});

});