<main class="main">
           <div class="main__container">
               <div class="title" data-aos="fade-up">
                   All items
               </div>
               <div class="line" data-aos="fade-up"></div>
               <div class="items-box" data-aos="fade-up">
                <?php
                $page = 1;
                if(isset($_REQUEST['page'])){
                    $page = $_REQUEST['page'];
                }
                $limit = 6;
                $first = ($page - 1) * $limit;
                $pages = 3;
                $c = mysqli_connect( hostname: 'localhost', username: 'root');
                $d = mysqli_select_db($c, database: 'items');
                $t = mysqli_query($c, query: 'SELECT * FROM `itemlist` LIMIT '.$first.",".$limit);
                $img_array = array(
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

                $link_array = array(
                    '<a class="item-button-link" href="iph_page.php">ORDER</a>',
                    '<a class="item-button-link" href="iph_page.php">ORDER</a>',
                    '<a class="item-button-link" href="iph_page.php">ORDER</a>',
                    '<a class="item-button-link" href="iph_page.php">ORDER</a>',
                    '<a class="item-button-link" href="iph_page.php">ORDER</a>',
                    '<a class="item-button-link" href="iph_page.php">ORDER</a>',
                    '<a class="item-button-link" href="ipad_page.php">ORDER</a>',
                    '<a class="item-button-link" href="ipad_page.php">ORDER</a>',
                    '<a class="item-button-link" href="ipad_page.php">ORDER</a>',
                    '<a class="item-button-link" href="ipad_page.php">ORDER</a>',
                    '<a class="item-button-link" href="ipad_page.php">ORDER</a>',
                    '<a class="item-button-link" href="ipad_page.php">ORDER</a>',
                    '<a class="item-button-link" href="mb_page.php">ORDER</a>',
                    '<a class="item-button-link" href="mb_page.php">ORDER</a>',
                    '<a class="item-button-link" href="mb_page.php">ORDER</a>',
                    '<a class="item-button-link" href="mb_page.php">ORDER</a>',
                    '<a class="item-button-link" href="mb_page.php">ORDER</a>',
                    '<a class="item-button-link" href="mb_page.php">ORDER</a>',

                ); 
                
                while($row = mysqli_fetch_assoc($t)) {
                   echo '<div class="item">';
                       print_r($img_array[$row['id']]);
                       echo '<div class="item-title">'
                           .$row['name'].
                       '</div>';
                       echo '<div class="item-price">'
                           .$row['price'].
                       '</div>';
                       echo '<div class="item-button">';
                           print_r($link_array[$row['id']]);
                       echo '</div>';
                   echo '</div>';
                } ?>
               </div>
               <?php echo '<div class="pagination" data-aos="fade-up">';
                   for ($i = 1; $i <= $pages; $i++) {
                    if($i == $page) {
                        echo '<div>';
                        echo '<a class="pagination_link active_link" href="?page='.$i.'">'.$i.'</a>';
                        echo '</div>';
                    } else {
                        echo '<div>';
                        echo '<a class="pagination_link" href="?page='.$i.'">'.$i.'</a>';
                        echo '</div>';
                    }
                   } 
               ?>
           </div>
        </main>