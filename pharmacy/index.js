setTimeout(function(){
    $('.logo').css('transform', 'rotate(360deg)');
}, 3000);

$('.scroll_button').click(function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})

var text = "HealthCure: Your Partner in Better Health";
var title_text = $(".about_title");
var index = 0;

setInterval(function() {
    if (index < text.length) {
        title_text.append(text[index]);
        index++;
    }
}, 50);

var btn_move = true;

setInterval(function(){
    if(btn_move) {
        $('.scroll_button').css('bottom', '50px');
        btn_move = false;
    } else {
        $('.scroll_button').css('bottom', '20px');
        btn_move = true;
    }
}, 1000)

var arrow_move = true;

setInterval(function(){
    if(arrow_move) {
        $('.arrow_down').css('top', '0px');
        arrow_move = false;
    } else {
        $('.arrow_down').css('top', '50px');
        arrow_move = true;
    }
}, 1000)