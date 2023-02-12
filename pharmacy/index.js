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
var isEnd = false;
var m_id = 0;
var m = [
    '',
    'VitalBoost is a comprehensive multi-vitamin supplement designed to support overall health and wellness. Each serving of VitalBoost contains a balanced blend of essential vitamins and minerals, including Vitamin A, C, D, and E, as well as B-Complex vitamins, calcium, and iron.',
    'With its convenient daily serving size and easy-to-swallow tablets, VitalBoost is the perfect addition to your daily routine for maintaining optimal health and vitality. With regular use, VitalBoost can help to boost your energy levels, support a healthy immune system, and promote overall well-being.',
    'This vitamin looks like this: <img src="img/pill1.jpg" class="chat_img" alt="pill">',
    'Have you taken these vitamins before?',
    'I am very glad that you are already familiar with VitalBoost.',
    'You`re in luck, with Vitalboost your life will be better!',
    'The last thing we need is your number to contact you. Please write it down below.'
]

$('.chat_button').click(() => {
    $('.chat_window').css('bottom', '0px');
    $('.open_chat').removeClass('open_chat_after');
})

$('.chat_exit').click(() => {
    $('.chat_window').css('bottom', '-600px');
})

setInterval(function() {
    $('#name_button').click(() => {
        $('#name_input').hide();
        $('#name_button').hide();
        process = true;
    })
    if(process && m_id < m.length) {
        var alex_msg = '<div class="msg"><div class="alex_msg">' + m[m_id] + '</div></div>';
        if(m_id == 0) {
            $('.chat').append('<div class="msg"><div class="alex_msg">Hi, ' + $('#name_input').val() + '!</div></div>');
            m_id++;
        } else {
        $('.chat').append(alex_msg);
        $('.msg').last()[0].scrollIntoView({ behavior: 'smooth' });
        m_id++;
        } if (m_id == 5) {
            process = false;
            $('.chat').append('<div class="msg"><div class="my_msg"><div id="answer"><div class="chat_buttons"><input type="button" id="yes_button" value="Yes"><input type="button" id="no_button" value="No"></div></div></div></div>');
            $('#yes_button').click(function() {
                $('.chat_buttons').hide();
                $('#answer').append($(this).val());
                process = true;
                m.splice(6, 1);
            })
            $('#no_button').click(function() {
                $('.chat_buttons').hide();
                $('#answer').append($(this).val());
                process = true;
                m.splice(5, 1);
            })
        }
        if(m_id == 7) {
            $('.chat').append('<input type="text" id="input_phone" name="phone" placeholder="+38012345678" required><input id="submit_button" type="submit" value="Get VitalBoost!" disabled="true">');
            process = false;
            $("#input_phone").keyup(function(e) {
                this.value = this.value.replace(/[^0-9\+]/g, '');
                var inputValue = $(this).val();
                var regexp = /^\+380\d{9}$/;
                if (!regexp.test(inputValue)) {
                  $('#submit_button').attr('disabled', 'true');
                } else {
                    $('#submit_button').removeAttr('disabled');
                }
              });
        }
    }
}, 3000)

const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);

  const name = data.get('name');
  const phone = data.get('phone');
  
  console.log("name: " + name);
  console.log("phone: " + phone);
});

function onSubmit(e) {
    $('#submit_button').val('Wait for the call.');
    $('#submit_button').attr('disabled', 'true');
    $('#input_phone').hide();
    e.preventDefault();
}