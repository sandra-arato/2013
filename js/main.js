function mapSlide () {

}

function setHeight() {
	var docHeight = $(document).height();
	$("#images").height(docHeight);
}

function imageScroll() {
	$(function() {
      $('#images').scrollTop(101);
      var images = $("ul#images").clone().find("li");
      $('#images').endlessScroll({
        pagesToKeep: 5,
        inflowPixels: 100,
        fireDelay: 10,
        content: function(i, p, d) {
          console.log(i, p, d)
          return images.eq(Math.floor(Math.random()*8))[0].outerHTML;
        }
      });
    });
}


function initialize() {
	var mapState = "down";
	imageScroll();
	setHeight();

	$(window).resize(function() {
		var docHeight = $(document).height();
		$("#images").height(docHeight);
	}); // bug. don't know.

	// $("#map-state").click(function(){
	// 	if (mapState=="down") {
	// 		$("nav iframe").slideUp();
	// 		$("nav span").html("Show map");
	// 		$("#images").css("-webkit-padding-start","0");
	// 		$("nav h1, nav div").css({"width":"100%"});
	// 		$("nav h1").css({"padding-left":"12px", "font-size":"20px"})
 //    		mapState = "up";
	// 	} 
	// 	else {
	// 		$("nav iframe").slideDown();
	// 		$("nav span").html("Hide map");
	// 		$("#images").css("-webkit-padding-start","342px");
	// 		$("nav h1, nav div").css({"width":"358px"});
			
	// 		$("nav h1").css({"padding-left":"20px", "font-size":"2em"})
 //    		mapState = "down";
	// 	};
 //  	});

	
}
	

$(document).ready(initialize);
