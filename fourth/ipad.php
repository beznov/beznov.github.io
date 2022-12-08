<html>
 <head>
   <title>AppleShop</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <link rel="shortcut icon" href="img/logo.png" type="image/png">
    <link rel="stylesheet" href="../css/ipad_.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;500&family=Roboto+Mono:wght@400;600&display=swap" rel="stylesheet">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
 </head>
    <body>
        <?php include('common/header.php'); ?>
        <main class="main">
           <div class="main__container">
               <div class="title">
                   All items
               </div>
               <div class="line"></div>
               <div class="items-box">
                <?php

                $c = mysqli_connect( hostname: 'localhost', username: 'root');
                $d = mysqli_select_db($c, database: 'items');
                $t = mysqli_query($c, query: 'SELECT * FROM `itemlist` LIMIT 6, 6');
                $array = array(
                    '<img class="item-img" src="img/iph14blue.jpg" alt="Image">',
                    '<img class="item-img" src="img/iph14black.jpg" alt="Image">',
                    '<img class="item-img" src="img/iph14purple.jpg" alt="Image">',
                    '<img class="item-img" src="img/iph14red.jpg" alt="Image">',
                    '<img class="item-img" src="img/iph14problack.jpg" alt="Image">',
                    '<img class="item-img" src="img/iph14prowhite.jpg" alt="Image">',
                    '<img class="item-img" src="img/ipadair109blue.jpg" alt="Image">',
                    '<img class="item-img" src="img/ipadair109gray.jpg" alt="Image">',
                    '<img class="item-img" src="img/ipadair109pink.jpg" alt="Image">',
                    '<img class="item-img" src="img/ipadminigray.jpg" alt="Image">',
                    '<img class="item-img" src="img/ipadminipink.jpg" alt="Image">',
                    '<img class="item-img" src="img/ipadminigold.jpg" alt="Image">',
                    '<img class="item-img" src="img/mbairgold.jpg" alt="Image">',
                    '<img class="item-img" src="img/mbairgray.jpg" alt="Image">',
                    '<img class="item-img" src="img/mbairsilver.jpg" alt="Image">',
                    '<img class="item-img" src="img/mbprogray.jpg" alt="Image">',
                    '<img class="item-img" src="img/mbprosilver.jpg" alt="Image">',
                    '<img class="item-img" src="img/mbpromidnight.jpg" alt="Image">',
                );
                 
                $i = 6;       
                while($row = mysqli_fetch_assoc($t)) {
                   echo '<div class="item">';
                       print_r($array[$i]);
                       $i++;
                       echo '<div class="item-title">'
                           .$row['name'].
                       '</div>';
                       echo '<div class="item-price">'
                           .$row['price'].
                       '</div>';
                       echo '<div class="item-button">';
                           echo '<a class="item-button-link" href="ipad.html">ORDER</a>';
                       echo '</div>';
                   echo '</div>';
                } ?>
               </div>
           </div>
        </main>
        <?php include('common/footer.php'); ?>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="js/ipad_.js"></script>
    </body> 
</html>