"use strict";
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
			$('#cloud-01').css({backgroundPosition: 'right -5%'});
			$('#pineTree').css({backgroundPosition: 'right -5%'});
			$('.head').css({backgroundPosition: 'left bottom'});
			$('.for_pg1').click(function(){	
				startHim();
				startPineTree();
				startCloud1();
			});
			$('#cloud-02').css({backgroundPosition: 'right 5%'});
			$('#cactus').css({backgroundPosition: 'right 5%'});
 			$('.first').click(function(){	
				startCactus();
				startCloud2();
			});		
		});
		var numBody = 40;
		function startHim(){
			numBody++;
			$(".head").animate({top:"-="+numBody+"px"},500).animate({top:"+="+numBody+"px"},500);
			if(numBody<4){
				setTimeout("startHim()",500);
			} else {
				setTimeout("bounceHim()",500);
			}
		}	
		function bounceHim(){
			$(".head").animate({top:"-=40px"},500).animate({top:"+=40px"},500);
			setTimeout("bounceHim()",500);
			} 
		var numPineTree = 1;
		function startPineTree(){
			numPineTree++;
			$("#pineTree").animate({right:"+=20px"},500);
				if(numPineTree<10){
					setTimeout("startPineTree()",500);
			} else {
				$('#pineTree').css({backgroundPosition: 'right -5%'},500);
				setTimeout("startPineTree()",500);	
		}	
	/*	,function resetPineTree(){$("#pineTree").css({"right":"0px"});}
		function resetPineTree() {
			setTimeout(resetPineTree(),10000);		
			$('#pineTree').css({backgroundPosition: 'right -5%'},500);
		} */
		function bouncePineTree(){
			$("#pineTree").animate({top:"-=4px"},500).animate({top:"+=4px"},500);
			setTimeout("bounceHim()",500);
			}
		} 
		var numCloud1 = 1;
		function startCloud1(){
			numCloud1++;
			$("#cloud-01").animate({right:"+=20px"},300);
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
			setTimeout("bounceHim()",500);
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
		function bounceCloud2(){
			$("#cloud-02").animate({top:"-=2px"},300).animate({top:"+=2px"},300);
			setTimeout("bounceCloud2()",300);
		} 
/*		 retrieve the element
		element = document.getElementById("pineTree");

		// reset the transition by...
	    function resetAnimation(){
		  
		  	// -> removing the class
		  	element.classList.remove("tree");
		  
		  	// -> triggering reflow  The actual magic 
		  	// without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
		  	element.offsetWidth = element.offsetWidth;
		  
		  	// -> and re-adding the class
		  	element.classList.add("tree");
		  	startPineTree();
		}	*/