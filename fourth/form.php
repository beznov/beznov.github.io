<?php
$error = [];
$regexp = "/^\+380\d{3}\d{2}\d{2}\d{2}$/";
if(isset($_POST['submit'])) {
  if (empty($_POST['lastname'])) {
   $error['lastname'] = 'Fill Last name';
  }

  if (empty($_POST['firstname'])) {
   $error['firstname'] = 'Fill First name';
  }

  if (!preg_match($regexp, $_POST['phone'])) {
    $error['phone'] = 'Wrong phone';
  }

  if (empty($_POST['city'])) {
   $error['city'] = 'Fill City';
  }

  if (empty($_POST['post_num'])) {
   $error['post_num'] = 'Fill Post number';
  }

  $sql = 'INSERT INTO `orderinfo` (`lastname`, `firstname`, `phone`, `city`, `post`, `post_num`) VALUES('.
    "'".$_POST['lastname']."',".
    "'".$_POST['firstname']."',".
    "'".$_POST['phone']."',".
    "'".$_POST['city']."',".
    "'".$_POST['post']."',".
    $_POST['post_num'].
    ')';
if(!$error){
 $c = mysqli_connect(hostname: 'localhost', username: 'root');
 $d = mysqli_select_db($c, database: 'order');
 $t = mysqli_query($c, $sql);}
}
?>
<html>
 <head>
   <title>AppleShop</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="shortcut icon" href="img/logo.png" type="image/png">
    <link rel="stylesheet" href="css/form.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;500&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
 </head>
    <body>
        <?php include('common/header.php'); ?>
        <main class="main">
            <div class="main__container">
              <div class="wrapper">
                <div class="item" data-aos="fade-right">
                  <div class="item-text">You are ordering now</div>
                  <img class="item-img" src="img/iph14black.jpg">
                  <div class="item-text">iPhone 14</div>
                </div>
                  <form method="post" data-aos="fade-left">
                    <div class="form_input">
                      <div><?php if(isset($error['lastname'])) {?>
                          <div class="error"><?=$error['lastname']; ?></div>
                        <?php } ?>
                        <input type="text" class="input-text" placeholder="Last name" name="lastname"></div>
                      <div><?php if(isset($error['firstname'])) {?>
                          <div class="error"><?=$error['firstname']; ?></div>
                        <?php } ?>
                        <input type="text" class="input-text" placeholder="First name" name="firstname"></div>
                      <div><?php if(isset($error['phone'])) {?>
                          <div class="error"><?=$error['phone']; ?></div>
                        <?php } ?>
                        <input type="tel" class="input-text" placeholder="+380981234567"
                       name="phone"></div>
                      <div>
                        <?php if(isset($error['city'])) {?>
                          <div class="error"><?=$error['city']; ?></div>
                        <?php } ?>
                        <input type="text" class="input-text" placeholder="City" name="city"></div>
                      <div><select class="input-text" name="post">
                        <option value="post1">post1</option>
                        <option value="post2">post2</option>
                        <option value="post3">post3</option>
                      </select>
                      </div>
                      <div>
                        <?php if(isset($error['post_num'])) {?>
                          <div class="error"><?=$error['post_num']; ?></div>
                        <?php } ?>
                        <input type="text" class="input-text" placeholder="Post number" name="post_num"></div>
                      <div><input type="submit" class="submit-button" value="ORDER" name="submit"></div>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <?php include('common/footer.php'); ?>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="js/form.js"></script>
        </body>
      </html>
