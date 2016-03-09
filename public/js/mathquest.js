$(".prob-1").click(function() {
			$(".for_prob1").css("visibility", "hidden");
			$(".for_prob2").css("visibility", "visible");
			$(".prob").css("z-index", "-1");
		});
		$(".prob-2").click(function() {
			$(".for_prob2").css("visibility", "hidden");
			$(".for_prob3").css("visibility", "visible");
			$(".prob").css("z-index", "-1");
		});
		$(".prob-3").click(function() {
			$(".for_prob3").css("visibility", "hidden");
			$(".for_prob4").css("visibility", "visible");
			$(".prob").css("z-index", "-1");
		});
		$(".close_prob").click(function() {
			$(".prob").css("z-index", "-1");
		});
		$(".for_prob1").click(function() {
		    $(".prob1").css("z-index", "6");
		});
		$(".first").click(function() {
			$(".for_prob1").css("visibility", "visible");
			$(".for_prob4").css("visibility", "hidden");
			$(".prob").css("z-index", "-1");
		    $('html,body').animate( {
		        scrollLeft: $("#pg2").offset().left
		    }, 'slow');
		});
		$(".for_prob2").click(function() {
		    $(".prob2").css("z-index", "7");
		});
		$(".second").click(function() {
			$(".for_prob1").css("visibility", "visible");
			$(".for_prob4").css("visibility", "hidden");
			$(".prob").css("z-index", "-1");
		    $('html,body').animate( {
		        scrollLeft: $("#pg3").offset().left
		    }, 'slow');
		});		
		$(".for_prob3").click(function() {
		    $(".prob3").css("z-index", "9");
		});
		$(".third").click(function() {
			$(".for_prob1").css("visibility", "visible");
			$(".for_prob4").css("visibility", "hidden");
			$(".prob").css("z-index", "-1");
		    $('html,body').animate( {
		        scrollLeft: $("#pg4").offset().left
		    }, 'slow');
		});
		$(".for_prob4").click(function() {
		    $(".prob4").css("z-index", "8");
		});
		$(".fourth").click(function() {
			$(".for_prob1").css("visibility", "visible");
			$(".for_prob4").css("visibility", "hidden");
			$(".prob").css("z-index", "-1");
		    $('html,body').animate( {
		        scrollLeft: $("#pg5").offset().left
		    }, 'slow');
		});
		$(".for_prob5").click(function() {
		    $(".prob5").css("z-index", "6");
		});
		$(".fifth").click(function() {
			$(".for_prob1").css("visibility", "visible");
			$(".for_prob4").css("visibility", "hidden");
 			$('html,body').animate( {
		        scrollLeft: $("#pg6").offset().left
		    }, 'slow');
		});
		$(".for_pg1").click(function() {
			$(".for_prob1").css("visibility", "visible");
			$(".prob").css("z-index", "-1");
		    $('html,body').animate( {
		        scrollLeft: $("#pg1").offset().left
		    }, 'slow');
		});
		$(".for_intro").click(function() {
			$('html,body').animate( {
		        scrollLeft: $("#instructions").offset().left
		    }, 'slow');
		});
		$(".for_pg1").click(function() {
			$('html,body').animate( {
		        scrollLeft: $("#pg1").offset().left
		    }, 'slow');
		}); 

		(function($) {
			$.extend($.fx.step,{
			    backgroundPosition: function(fx) {
		            if (fx.state === 0 && typeof fx.end == 'string') {
		                var start = $.curCSS(fx.elem,'backgroundPosition');
		                start = toArray(start);
		                fx.start = [start[0],start[2]];
		                var end = toArray(fx.end);
		                fx.end = [end[0],end[2]];
		                fx.unit = [end[1],end[3]];
					}
		            var nowPosX = [];
		            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		            nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
		            
		           function toArray(strg){
		               strg = strg.replace(/left|top/g,'0px');
		               strg = strg.replace(/right|bottom/g,'100%');
		               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
		           }
		        }
			});
		})(jQuery); 
		$(document).ready(function(){ 
			$('#cloud-01').css({backgroundPosition: 'right top'});
			$('#pineTree').css({backgroundPosition: 'right -25%'});
			$('.player').css({backgroundPosition: 'left bottom'});	
			$('.player').click(function(){	
				setTimeout("startPlayer()", 1000);
				setTimeout("startPineTree()", 100);		
				setTimeout("startCloud1()", 1000);
			});
			$('#cloud-02').css({backgroundPosition: 'right 5%'});
			$('#cactus').css({backgroundPosition: 'right 5%'});
 			$('.first').click(function(){	
				startCactus();
				startCloud2();
			},1000);		
		});
		var numBody = 5;
		function startPlayer(){
			numBody++;
			$(".player").animate({top:"-="+numBody+"px"},500).animate({top:"+="+numBody+"px"},500);
			if(numBody<400){
				setTimeout("startPlayer()",500);
			} else {
				setTimeout("bouncePlayer()",500);
			}
		}	
		function bouncePlayer(){
			$(".player").animate({top:"-=10px"},500).animate({top:"+=10px"},500);
			setTimeout("bouncePLayer()",500);
			} 
		var numPineTree = 1;
		function startPineTree(){
			numPineTree++;
			$("#pineTree").animate({right:"+=15px"},500);
				if(numPineTree<80){
					setTimeout("startPineTree()",500);
			} else {
				$('#pineTree').css({backgroundPosition: 'right -25%'},500);
				setTimeout("bouncePineTree()",500);	
			}	
		}
		function bouncePineTree(){
			$("#pineTree").animate({top:"-=4px"},500).animate({top:"+=4px"},500);
			setTimeout("bouncePineTree()",500);
			
		}  
		var numCloud1 = 1;
		function startCloud1(){
			numCloud1++;
			$("#cloud-01").animate({right:"+=10px"},300);
				if(numCloud2<80){
				setTimeout("startCloud1()",300);
			} else {
				setTimeout("bounceCloud1()",300);
			}
		}
		function bounceCloud1(){
			$("#cloud-01").animate({top:"-=2px"},300).animate({top:"+=2px"},300);
			setTimeout("bounceCloud1()",300);
		} 
		var numCactus = 1;
		function startCactus(){
			numCactus++;
			$("#cactus").animate({right:"+=15px"},500);
				if(numCactus<80){
				setTimeout("startCactus()",500);
			} else {
				setTimeout("bounceCactus()",500);
			}
		}
		function bounceCactus(){
			$("#cactus").animate({top:"-=4px"},500).animate({top:"+=4px"},500);
			setTimeout("bounceCactus()",500);
		} 
		var numCloud2 = 1;
		function startCloud2(){
			numCloud2++;
			$("#cloud-02").animate({right:"+=20px"},300);
				if(numCloud2<80){
				setTimeout("startCloud2()",300);
			} else {
				setTimeout("bounceCloud2()",300);
			}
		}
		function bounceCloud2() {
			$("#cloud-02").animate({top:"-=2px"},300).animate({top:"+=2px"},300);
			setTimeout("bounceCloud2()",300);
		}