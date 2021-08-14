drawLines();
bindEvents();
setInterval(function (){
    animateLines();
    moveCar();
    check();
},700);

function drawLines(){
    for(let i = 0; i < 12; i++){
        let sect = $('<section></section>');
        sect.css("top",80 * i + "px");
        sect.appendTo("#road");
    }
}

function animateLines(){
    $('section').each(function (){
        let t = parseInt($(this).css('top'));
        t += 35;
        $(this).css("top", t + "px");
    })
    prependNewLine();
}

function prependNewLine(){
    let sect = $('<section></section>');
    let t = $('section').first().css('top');
    let first = parseInt(t) - 80;
    sect.css('top',first + "px");
    sect.prependTo('#road');
    removeLastLine();
}

function removeLastLine(){
    let t = parseInt($('section').last().css('top'));
    if(t > $("#road").height()){
        $('section').last().remove();
    }
    let t2 = parseInt($('section').first().css('top'))
    if(t2 < -80){
        $('section').first().remove();
    }
}

let carTop = 0;
function moveCar(){
    carTop += 10;
    $('#car_2').css("top", carTop + "%");
    if(carTop > 90){
        carTop =-20;
        let carLeft = parseInt(Math.random() * 80);
        $('#car_2').css("left", carLeft + "%");
    }
}

function bindEvents(){
    $('body').keydown(function (e){
        if(e.key == "ArrowRight"){
            goRight();
        }else if(e.key == "ArrowLeft"){
            goLeft();
        }
    })
}

let rightCoord = 0;
function  goRight(){
    rightCoord -=10;
    if(rightCoord < 5){
        rightCoord = 5;
    }
    $('#my_car').css('right', rightCoord + "%");
}
function  goLeft(){
    rightCoord +=10;
    if(rightCoord > 80){
        rightCoord = 80;
    }
    $('#my_car').css('right', rightCoord + "%");
}

function check(){
    let c1 = $('#my_car').offset();
    let c2 = $('#car_2').offset();
    let w1 = $('#my_car').width();
    let h1 = $('#my_car').height();
    let d1 = Math.abs(c2.left - c1.left);
    let d2 = Math.abs(c2.top - c1.top)

    if (d1 < w1 && d2 < h1){
        alert('harvac');
    }
}









