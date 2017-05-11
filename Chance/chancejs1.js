$(document).ready(function(){
    animateDiv();
    animateDivb();
    animateDivc();
    animateDivd();
    animateDive();
    animateDivf();
    animateDivg();
    animateDivh();
    animateDivi();
    
});

var counter = 3;
setInterval(function(){ 
    counter --;
    $(".counter").html(counter);
    if (counter == 0) {
        window.location = ("chancehome.html");
        
    }
}, 1000);

$(".word").click(function() {
    console.log($(this).html());
  
    var phrase1 = $(this).html();
    localStorage.setItem("storageName",phrase1);
    
    poem = poem + $(this).html() + " ";
});

function makeNewPosition(){
    
    
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function animateDivb(){
    console.log("B");
    var newq = makeNewPosition();
    var oldq = $('.b').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.b').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivb();        
    });
    
};

function animateDivc(){
    console.log("C");
    var newq = makeNewPosition();
    var oldq = $('.c').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.c').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivc();        
    });
    
};

function animateDivd(){
    console.log("D");
    var newq = makeNewPosition();
    var oldq = $('.d').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.d').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivd();        
    });
    
};

function animateDive(){
    console.log("E");
    var newq = makeNewPosition();
    var oldq = $('.e').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.e').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDive();        
    });
    
};

function animateDivf(){
    console.log("F");
    var newq = makeNewPosition();
    var oldq = $('.f').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.f').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivf();        
    });
    
};

function animateDivg(){
    console.log("G");
    var newq = makeNewPosition();
    var oldq = $('.g').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.g').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivg();        
    });
    
};

function animateDivh(){
    console.log("H");
    var newq = makeNewPosition();
    var oldq = $('.h').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.h').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivh();        
    });
    
};

function animateDivi(){
    console.log("I");
    var newq = makeNewPosition();
    var oldq = $('.i').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.i').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDivi();        
    });
    
};



function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}