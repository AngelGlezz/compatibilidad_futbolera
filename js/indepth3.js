var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;

function countMaxValue(array_elements) {

	var maxValue = 0;
	var maxNum = -1;

    array_elements.sort();

    var current = null;
    var cnt = 0;
    for (var i = 0; i < array_elements.length; i++) {
        if (array_elements[i] != current) {
            if (cnt > 0) {
                
                if(cnt > maxValue ){
                	maxValue = cnt;
                	maxNum = current;
                }
            }
            current = array_elements[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        if(cnt > maxValue ){
           maxNum = current;
        }
    }

    return maxNum;

}

$("#indepth_contador_circle input").css("margin-top",0);


	$("#indepth_boton_empezar").on("click",function(){
		var tu = $(".tu").val().toUpperCase();
		var pareja = $(".pareja").val().toUpperCase();

		if (tu != "" && pareja != "") {
		$("#indepth_boton_empezar").click(false);
	 	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 	var data = {
				  "preguntas": [
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/1.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r1.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r2.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r3.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r4.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r5.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r6.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r7.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r8.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r9.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r10.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r11.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r12.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r13.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r14.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r15.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r16.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r17.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r18.png'>",
				          "tipo": "team"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/2.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r1.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r2.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r3.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r4.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r5.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r6.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r7.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r8.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r9.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r10.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r11.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r12.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r13.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r14.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r15.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r16.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r17.png'>",
				          "tipo": "team"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p3_r18.png'>",
				          "tipo": "team"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/3.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/4.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p5_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/5.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/6.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p7_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/7.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/8.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p9_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/9.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/10.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r1.png'>",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r2.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r3.png'>",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p11_r4.png'>",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/11.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r1.png'>",
				          "tipo": "stadium"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r2.png'>",
				          "tipo": "stadium"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r3.png'>",
				          "tipo": "stadium"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r4.png'>",
				          "tipo": "stadium"
				        }
				      ]
				    },
				    {
				      "pregunta": "<img class='question' src='"+urlIndepth+"images/preguntas/12.png'>",
				      "respuestas": [
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r1.png'>",
				          "tipo": "stadium"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r2.png'>",
				          "tipo": "stadium"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r3.png'>",
				          "tipo": "stadium"
				        },
				        {
				          "respuesta": "<img class='option' src='"+urlIndepth+"images/opciones/p13_r4.png'>",
				          "tipo": "stadium"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.png" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item '+items.tipo+' active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
	
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000); 
		var respuesta = new Array();
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			$(this).addClass("select");
			respuesta.push(respuesta_num);
			console.log(respuesta);
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
				
				if(respuesta.length == preguntas.length){

					var i;
					var suma = 0;
					for (i = 0; i < respuesta.length; i+=2) {
					  if(respuesta[i] == respuesta[i+1]){
					  	suma+=1;
					  }
					}

					console.log(suma);

					var total = countMaxValue(respuesta);
					console.log(total);
					window.setTimeout(function(){
						console.log("time");
						console.log(total);
						// finish_test(total);
						finish_test(suma);
					});
				}
			return respuesta;
		});
		//return tu, pareja;
	} else {
		alert("Debes llenar los campos");
}
	});


var totalfb = "";
function finish_test(total){	
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	var img = total;

	var tu = $(".tu").val().toUpperCase();
	var pareja = $(".pareja").val().toUpperCase();

	$(".inner").show();
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho,
	});

  	var msg="";
  	var resulta = "";

  	if (total <= 1){
	  	msg="<span>TÚ y " + pareja + " son NADA COMPATIBLES</span><br><br>Amig@, date cuenta. Parece que su relación no durará mucho, así como los DTs en el Veracruz. Pero calma, que aún pueden cambiar para que todo mejore.";
	  	$("#indepth_resultados").css({"background-image": "url("+urlIndepth+"images/respuestas/4.png)"});
	  	totalfb = "mal";
  	} else if (total >= 2 && total < 5){
	  	msg="<span>TÚ y " + pareja + " son ALGO COMPATIBLES</span><br><br>Vaya que su relación no ha sido fácil pero cuál lo es, ni la de Messi y Argentina, pero al final el amor puede con cualquier cosa.";
	  	$("#indepth_resultados").css({"background-image": "url("+urlIndepth+"images/respuestas/3.png)"});
	  	totalfb = "algo";
  	} else if (total > 4 && total < 6){
	  	msg="<span>TÚ y " + pareja + " son MEDIO COMPATIBLES</span><br><br>Aunque no coordinan en todo, a ti y a tu pareja los une la pasión por el futbol. Ya sabes que no hay romance perfecto, ni el de Cristiano con el Madrid lo fue… así que venga ¡Vayan por todo!";
	  	$("#indepth_resultados").css({"background-image": "url("+urlIndepth+"images/respuestas/2.png)"});
	  	totalfb = "maso";
  	} else if (total == 6){
	  	msg="<span>TÚ y " + pareja + " son MUY COMPATIBLES</span><br><br> Son la pareja perfecta, como los tacos y el balón, como el Cruz Azul y los subcampeonatos, como el jersey al jugador. Messi y Antonella no son nada a lado de ustedes";
	  	$("#indepth_resultados").css({"background-image": "url("+urlIndepth+"images/respuestas/1.png)"});
	  	totalfb = "bien";
  	}
  	
  	$(".indepth_result_container").html(msg);

	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$("#indepth_twittear").click(function(){
  		var text = "";
		if (total <= 1) {
			text = encodeURIComponent("¡Eres como el Superman que todos esperábamos! Si puedes pásame tus datos, te necesito (junto con tus conocimientos) para ganarme una lana");
		} else if (total >= 2 && total < 5) {
			text = encodeURIComponent("Aunque no coordinan en todo, a ti y a tu pareja los une la pasión por el futbol. Ya sabes que no hay romance perfecto, ni el de Cristiano con el Madrid lo fue… así que venga ¡Vayan por todo!");
		} else if (total >= 4 && total < 6) {
			text = encodeURIComponent("Vaya que su relación no ha sido fácil pero cuál lo es, ni la de Messi y Argentina lo es, pero al final el amor puede con cualquier cosa.");
		} else if (total == 6) {
			text = encodeURIComponent("Son la pareja perfecta, como los tacos y el balón, como el Cruz Azul y los subcampeonatos, como el jersey al jugador. Messi y Antonella no son nada a lado de ustedes");
		}
		
		var url = encodeURIComponent("http://juanfutbol.com/indepth/compatibilidad-futbolera");
		window.open("https://twitter.com/share?text="+text+"&hashtags=JFQuiz&url="+url,"","width=500, height=300");
	});

	$("#indepth_facebook").click(function(){
		var url = encodeURIComponent("http://juanfutbol.com/indepth/compatibilidad-futbolera?m="+totalfb);
		console.log(url);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+url,"","width=500, height=300");
	});
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    /*$("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});*/
});


