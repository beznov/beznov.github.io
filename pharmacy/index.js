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

$('#name_input').keyup(function() {
    $('#user_name').text('Hi, my name is ' + $(this).val() + '.');
    if($(this).val().length >= 2) {
        $('#name_button').removeAttr('disabled');
    } else {
        $('#name_button').attr('disabled', 'true');
    }
})

var process = false;
var m_id = 0;
var m = [
    '',
    'VitalBoost is a comprehensive multi-vitamin supplement designed to support overall health and wellness. Each serving of VitalBoost contains a balanced blend of essential vitamins and minerals, including Vitamin A, C, D, and E, as well as B-Complex vitamins, calcium, and iron.',
    'With its convenient daily serving size and easy-to-swallow tablets, VitalBoost is the perfect addition to your daily routine for maintaining optimal health and vitality. With regular use, VitalBoost can help to boost your energy levels, support a healthy immune system, and promote overall well-being.',
]

setInterval(function() {
    $('#name_button').click(() => {
        process = true;
    })
    if(process && m_id < m.length) {
        var alex_msg = '<div class="msg"><div class="alex_msg">' + m[m_id] + '</div></div>';
        if(m_id == 0) {
            $('.chat').append('<div class="msg"><div class="alex_msg">Hi, ' + $('#name_input').val() + '!</div></div>');
            m_id++;
        } else {
        $('.chat').append(alex_msg);
        m_id++;
    }
    }
}, 2000)