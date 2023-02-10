setTimeout(function(){
    $('.logo').css('transform', 'rotate(360deg)');
}, 3000);

$('.scroll_button').click(function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
})

var text_about = "HealthCure: Your Partner in Better Health";
var title_about = $(".about_title");
var index_about = 0;

setInterval(function() {
    if (index_about < text_about.length) {
        title_about.append(text_about[index_about]);
        index_about++;
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

var reached_pill_title = false;

var text_pill = "VitalBoost";
var title_pill = $(".pill_title");
var index_pill = 0;

$(window).scroll(function() {
    if ($(window).scrollTop() >= 100 && !reached_pill_title) {
        setInterval(function() {
            if (index_pill < text_pill.length) {
                title_pill.append(text_pill[index_pill]);
                index_pill++;
            }
        }, 75);
      reached_pill_title = true;
    }
  });
  

  var reached_pill_img = false;

  var images = [
    "img/pill1.jpg",
    "img/pill2.webp",
    "img/pill3.webp",
    "img/pill4.jpg",
    "img/pill5.jpg"
  ];

  var i = 0;

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 200 && !reached_pill_img) {
        setInterval(function() {
            $(".pill_img").fadeOut(300, function() {
                $(this).attr("src", images[i]).fadeIn(300);
              });
            i = (i + 1) % images.length;
        }, 5000);
      reached_pill_img = true;
    }
  });

var counter = 0;

$('.comments_button').click(function() {
    var comments = document.getElementsByClassName("comment");
    counter += 3;
    var isShowing = true;
    if(isShowing) {
        if (counter <= comments.length) {
            $(this).text('Show more');
            for (let i=0; i<counter; i++) {
            comments[i].style.display = "block";
            }
        } if (counter == comments.length) {
            $(this).text('Hide comments');
        }
    } if(counter > comments.length) {
        for (let i=0; i<comments.length; i++) {
            comments[i].style.display = "none";
        }
        isShowing = false;
        counter = 0;
        $(this).text('Show comments');
        }
})
