<footer>  
    <div class="footer__container">
    <nav>
      <div class="footer_nav_wrap">
        <div class="footer_nav_col">
          <span>БЕЗПЕЧНІ ПОКУПКИ</span>
          <ul>
            <li><a href="/">ДОСТАВКА</a></li>
            <li><a href="/">ОПЛАТА</a></li>
            <li><a href="/">МИТНИЙ ЗБІР</a></li>
            <li><a href="/">ПОВЕРНЕННЯ ТОВАРУ</a></li>
            <li><a href="/">РЕКЛАМАЦІЯ</a></li>
            <li><a href="/">ЯК ПІДІБРАТИ РОЗМІР</a></li>
            <li><a href="/">ТАБЛИЦІ РОЗМІРІВ</a></li>
          </ul>
        </div>
        <div class="footer_nav_col">
          <span>ІНФОРМАЦІЯ</span>
          <ul>
            <li><a href="/">КОНТАКТ</a></li>
            <li><a href="/">ПРО НАС</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">ПУБЛІЧНА ОФЕРТА</a></li>
            <li><a href="/">ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</a></li>
            <li><a href="/">МАПА САЙТУ</a></li>
            <li><a href="/">БЛОГ</a></li>
          </ul>
        </div>
        <div class="footer_nav_col">
          <span>ОБЛІКОВИЙ ЗАПИС</span>
          <ul>
            <li><a href="/">ВХІД</a></li>
            <li><a href="/">РЕЄСТРАЦІЯ</a></li>
            <li><a href="/">КОШИК</a></li>
            <li><a href="/">УЛЮБЛЕНІ</a></li>
          </ul>
        </div>
        <div class="footer_nav_col">
          <span>ЗВ'ЯЖІТЬСЯ З НАМИ</span>
          <ul>
            <li class="footer_email">example@gmail.com</li>
            <li class="footer_phone">+38 (099) 999-99-99</li>
          </ul>
        </div>
      </div>
      <div class="footer_social">
        <div class="footer_icons">
          <a href="/"><img src="../img/footer/facebook.jpg" alt="Facebook"></a>
          <a href="/"><img src="../img/footer/instagram.jpg" alt="Instagram"></a>
          <a href="/"><img src="../img/footer/youtube.jpg" alt="Youtube"></a>
        </div>
        <span class="footer_copyright">Copyright © 2015 - 2023 Sneakers. All Rights Reserved</span>
      </div>
    </nav>
  </div>
</footer>
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
<script>
  $(document).ready(function() {
  var slideCount = $('.slides img').length;
  var currentIndex = 0;
  var slideWidth = $('.slider').width();
  var autoSlide = setInterval(function() {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSlide();
  }, 5000);

  function moveSlide() {
    var slideIndex = currentIndex * -slideWidth;
    $('.slides').css({'transform': 'translateX(' + slideIndex + 'px)'});
  }

  $('.prev').click(function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slideCount - 1;
    }
    moveSlide();
  });

  $('.next').click(function() {
    if (currentIndex < slideCount - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    moveSlide();
  });

  var priceFrom = 0;
  var priceTo = 0;

  $('#price_range_input_from').on('keyup', function() {
    let value = $(this).val().replace(/[^0-9]/g, "");
    $(this).val(value);
  });

  $('#price_range_input_to').on('keyup', function() {
    let value = $(this).val().replace(/[^0-9]/g, "");
    $(this).val(value);
  });

  $('#get_values').click(function() {
    priceFrom = $('#price_range_input_from').val();
    priceTo = $('#price_range_input_to').val();
    console.log(priceFrom);
    console.log(priceTo);
  })

  



});

</script>
</body>
</html>