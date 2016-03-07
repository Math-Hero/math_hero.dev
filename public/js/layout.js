"use strict";
$(document).ready(function() {
			showIntro(); 
			$('input[type="button"]').click(function() {
				
	        	//alert box feedback before generating random numbers
	      		var num1=parseInt($("#number1").text());
	        	var num2=parseInt($("#number2").text());
	      		var total = num1 + num2;
	        	var answer = parseInt($("input[type='text']").val());
	        
	      		if ($("input[type='text']").val() === '') {
	            	alert("You have not keyed any answer");
	        	} else if (answer === total) {
	          		alert("Great job, your highness! That is correct.");
	          		setTimeout("movePage()",3000);
	        	} else {
	          		alert("Nope! Try again your majesty.");
	        	}	    
			      //generate a random number range 1 to 9 for number 1 after clicking alert box using callback function
			      $("#number1").innerHTML =
			    Math.floor(Math.random() * 10);
			      
			      //generate a random number range 1 to 9 for number 2 after clicking alert box using callback function
			      $("#number2").innerHTML =
			    Math.floor(Math.random() * 10); 
			});
		});
		function showIntro() {
			$(".for_intro").animate({left: "45%"}, 2000);
		}
		$(".for_intro").click(function() {
			$('html,body').animate( {
		        scrollLeft: $("#instructions").offset().left
		    }, 'slow');
		}); 
		$('.for_pg1').click(function() {						
			$(".for_prob1").css("visibility", "visible");
			$("#prob-pg1").css("z-index", "-1");
		   	$('html,body').animate( {
		       	scrollLeft: $("#pg1").offset().left
		   	}, 'slow');
		    startPlayer();
		   	landscape($("#animation-01-pg1"), 300000);
			landscape($("#animation-02-pg1"), 200000);
			landscape($("#animation-03-pg1"), 150000);
			landscape($("#animation-04-pg1"), 180000);		
		});
		var pageNum=1;
		function movePage() {	
			$("#pg" + pageNum + "-animation div").stop();
			$("#pg" + pageNum +"-animation div").css("z-index", "-5");
			$("#prob_page_pg" + pageNum).css("z-index", "-1");
			pageNum++;
			console.log(pageNum);$('html,body').animate( {
		        scrollLeft: $("#pg" + pageNum).offset().left
		    }, 'slow');
		    landscape($("#animation-01-pg"+pageNum), 300000);
			landscape($("#animation-02-pg"+pageNum), 200000);
			landscape($("#animation-03-pg"+pageNum), 150000);
			landscape($("#animation-04-pg"+pageNum), 180000); 
		} 		
		$(".for_prob").click(function() {
			$("#pg" + pageNum + "-animation div").stop();
			$("#prob_page_pg" + pageNum).css("visibility", "visible");
			$(".prob_page").css("z-index", "6");
		});		
		$(".fifth").click(function() {
			$(".for_prob").css("visibility", "visible");
 			$('html,body').animate( {
		        scrollLeft: $("#pg6").offset().left
		    }, 'slow');
		});
		var numBody = 2;
		function startPlayer(){
			numBody++;
			$(".player").animate({top:"-="+numBody+ "%"},500).animate({top:"+="+numBody+"%"},500);
			if(numBody<2){
				setTimeout("startPlayer()",500);
			} else {
				setTimeout("bouncePlayer()",500);
			}
		}	
		function bouncePlayer(){
			$(".player").animate({top:"-=2%"},500).animate({top:"+=2%"},500);
			setTimeout("bouncePlayer()",500);
		} 
		var landscape = function(scenery, speed) {
			setTimeout(this, 3000);
			$(scenery).animate( {
				'right':$(document).width() + 1280
			}, 
			{
				duration: speed,
					complete: function() {
						landscape(this,speed);
					}
				}
			);
		};	