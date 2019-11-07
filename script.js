
$(document).ready(function(){

	$(".gallery1 img").click(function(){
		
		var img=$(this).attr("src");
		
		$("body").append('<div class="curtain"></div>');

		$("body").append('<img src="'+img+'" class= "mainimage"/> <h2 class="descr" style="color:#FFF">&nbsp;The Punjab &nbsp;International &trade;</h2> <h3 class="descr1"> &nbsp;Description </h3> ');

		$(".mainimage, .descr, .descr1").animate({"opacity":"1"}, 500);
		
		$(".mainimage, .curtain").mouseout(function(){
			
			$(".mainimage").remove();
			$(".curtain").remove();
			$(".descr").remove();
			$(".descr1").remove();
			
			
			});
	}); 

	
	
	$(".shetu").ready(function(){
		
		$(".shetu").animate({"left":"-100px"},{"right":"1000px"});
		
	});




	
	$(".play").click(function(){
		
		$(".B img:last-child").animate({"opacity":"0"},500, function(){
		
			var img=$(".B img:last-child").attr("src");		
			
			$(".B").prepend('<img src="'+img+'"/>')		

			$(".B img:last-child").remove();
			
			});
		});

	$(".prev").click(function(){
		
		$(".B img:first-child").animate({"opacity":"0"},500, function(){
		
			
			
			var img=$(".B img:first-child").attr("src");		
			
			$(".B").append('<img src="'+img+'"/>')
			
			$(".B img:first-child").remove();
			
					
			
			});
		});
	

	

});




    