$(document).ready(function(){


	//Popup Aqua//
    $("#popup1").hide();
    $("#p1").click(function(){
    $("#popup3").hide();
    $("#popup2").hide();
    $("#popup1").fadeToggle("slow");
    $("#popup2").hide();
    $("#popup3").hide(); 
    });
    $("#popup2").hide();
    $("#p2").click(function(){
    $("#popup1").hide();
    $("#popup3").hide();
    $("#popup2").fadeToggle("slow");
    });
    $("#popup3").hide(); 
    $("#p3").click(function(){
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").fadeToggle("slow");
    $("#popup1").hide();
    });

    // $("#aqua").click(function(){
    // $("#popup1").hide();
    // $("#popup2").hide();
    // $("#popup3").hide();
    // $("#popup4").hide();
    // $("#popup5").hide();
    // $("#popup6").hide();
    // $("#popup7").hide();
    // $("#popup8").hide();
    // $("#popup9").hide();
    // });
    // $("#storm").click(function(){
    // $("#popup1").hide();
    // $("#popup2").hide();
    // $("#popup3").hide();
    // $("#popup4").hide();
    // $("#popup5").hide();
    // $("#popup6").hide();
    // $("#popup7").hide();
    // $("#popup8").hide();
    // $("#popup9").hide();
    // });
    // $("#fire").click(function(){
    // $("#popup1").hide();
    // $("#popup2").hide();
    // $("#popup3").hide();
    // $("#popup4").hide();
    // $("#popup5").hide();
    // $("#popup6").hide();
    // $("#popup7").hide();
    // $("#popup8").hide();
    // $("#popup9").hide();
    // });

	//Popup Storm//
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
    $("#popup4").hide(); 
    $("#p4").click(function(){
    $("#popup6").hide();
    $("#popup5").hide();
    $("#popup4").fadeToggle("slow");
    $("#popup5").hide();
    $("#popup6").hide(); 
    });
    $("#popup5").hide();
    $("#p5").click(function(){
    $("#popup4").hide();
    $("#popup6").hide();
    $("#popup5").fadeToggle("slow");
    });
    $("#popup6").hide(); 
    $("#p6").click(function(){
    $("#popup4").hide();
    $("#popup5").hide();
    $("#popup6").fadeToggle("slow");
    $("#popup4").hide();
    });

    //Popup Fire//
    $("#popup1").hide();
    $("#popup2").hide();
    $("#popup3").hide();
    $("#popup7").hide(); 
    $("#p7").click(function(){
    $("#popup9").hide();
    $("#popup8").hide();
    $("#popup7").fadeToggle("slow");
    $("#popup8").hide();
    $("#popup9").hide(); 
    });
    $("#popup8").hide();
    $("#p8").click(function(){
    $("#popup7").hide();
    $("#popup9").hide();
    $("#popup8").fadeToggle("slow");
    });
    $("#popup9").hide(); 
    $("#p9").click(function(){
    $("#popup7").hide();
    $("#popup8").hide();
    $("#popup9").fadeToggle("slow");
    $("#popup7").hide();
    });

function addAFunction() {
   var element = document.getElementById("popa");
   element.classList.add("mystyle");
}
function addSFunction() {
   var element = document.getElementById("popa");
   element.classList.add("mystyle");
}
function addFFunction() {
   var element = document.getElementById("popa");
   element.classList.add("mystyle");
}

  });

