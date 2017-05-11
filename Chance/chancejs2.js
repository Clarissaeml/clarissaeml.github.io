function moveDiv() {
    var $span = $("#random");

    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDiv();
setInterval(moveDiv, 1000); 

var counter = 3;
setInterval(function(){ 
    counter --;
    $(".counter").html(counter);
    if (counter == 0) {
        window.location = ("chancehome.html");
        
    }
}, 1000);


function moveDivb() {
    var $span = $("#randomB");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivb();
setInterval(moveDivb, 1000);

function moveDivc() {
    var $span = $("#randomC");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivc();
setInterval(moveDivc, 1000);

function moveDivd() {
    var $span = $("#randomD");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivd();
setInterval(moveDivd, 1000);

function moveDive() {
    var $span = $("#randomE");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDive();
setInterval(moveDive, 1000);

function moveDivf() {
    var $span = $("#randomF");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivf();
setInterval(moveDivf, 1000);

function moveDivg() {
    var $span = $("#randomG");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivg();
setInterval(moveDivg, 1000);

function moveDivh() {
    var $span = $("#randomH");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivh();
setInterval(moveDivh, 1000);


function moveDivi() {
    var $span = $("#randomI");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivi();
setInterval(moveDivi, 1000);


function moveDivj() {
    var $span = $("#randomJ");
    
    $span.fadeOut(1000, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).height() - $span.height();
        var leftPos = Math.floor(Math.random() * (maxLeft + 1))
        var topPos = Math.floor(Math.random() * (maxTop + 1))
     
        $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
    });
};

moveDivj();
setInterval(moveDivj, 1000);


$(".word").click(function() {
    console.log($(this).html());
   
    var phrase1 = localStorage.getItem("storageName");
    var phrase2 = $(this).html();
    localStorage.setItem("storageName",phrase1+"."+phrase2);
});