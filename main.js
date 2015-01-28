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




  	$('.mainContainer').click(function(){
  		  	$('img.marker').click(function(){
  		$(this).css('display', 'none');
  	});
  		currentMarkerLeft = (event.pageX - pinPointX) / windowWidth * 100;
  		currentMarkerTop = (event.pageY - pinPointY) / windowHeight * 100;
		$(this).append('<img class="marker" src="img/marker.png" style="left: ' + currentMarkerLeft +  '%; top: ' + currentMarkerTop + '%;">');
  	});



});