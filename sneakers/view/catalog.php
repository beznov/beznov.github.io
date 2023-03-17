<?php 
include('common/header.php');
?>






<div class="catalog_main__container">
    <aside>
        <span>Бренд</span>
        <ul>
            <li><input type="checkbox" name="brand[]" value="Adidas"><label>Adidas</label></li>
            <li><input type="checkbox" name="brand[]" value="Alpha Industries"><label>Alpha Industries</label></li>
            <li><input type="checkbox" name="brand[]" value="Asics"><label>Asics</label></li>
            <li><input type="checkbox" name="brand[]" value="Carhartt WIP"><label>Carhartt WIP</label></li>
            <li><input type="checkbox" name="brand[]" value="Caterpillar"><label>Caterpillar</label></li>
            <li><input type="checkbox" name="brand[]" value="Champion"><label>Champion</label></li>
            <li><input type="checkbox" name="brand[]" value="Columbia"><label>Columbia</label></li>
            <li><input type="checkbox" name="brand[]" value="Dickies"><label>Dickies</label></li>
            <li><input type="checkbox" name="brand[]" value="Ellesse"><label>Ellesse</label></li>
            <li><input type="checkbox" name="brand[]" value="Fila"><label>Fila</label></li>
            <li><input type="checkbox" name="brand[]" value="Nike"><label>Nike</label></li>
            <li><input type="checkbox" name="brand[]" value="Puma"><label>Puma</label></li>
            <li><input type="checkbox" name="brand[]" value="Reebok"><label>Reebok</label></li>
            <li><input type="checkbox" name="brand[]" value="Saucony"><label>Saucony</label></li>
            <li><input type="checkbox" name="brand[]" value="Vans"><label>Vans</label></li>
        </ul>
        <span>Стать</span>
        <ul>
            <li><input type="checkbox" name="gender[]" value="m"><label>Чоловіча</label></li>
            <li><input type="checkbox" name="gender[]" value="f"><label>Жіноча</label></li>
            <li><input type="checkbox" name="gender[]" value="c"><label>Дитина</label></li>
        </ul>
        <span>Категорія</span>
        <ul>
            <li><input type="checkbox" name="category[]" value="cross"><label>Кросівки</label></li>
            <li><input type="checkbox" name="category[]" value="forrun"><label>Кросівки для бігу</label></li>
            <li><input type="checkbox" name="category[]" value="kedi"><label>Кеди</label></li>
            <li><input type="checkbox" name="category[]" value="winter"><label>Зимове взуття</label></li>
            <li><input type="checkbox" name="category[]" value="high"><label>Високе взуття</label></li>
            <li><input type="checkbox" name="category[]" value="shlop"><label>Шльопанці</label></li>
            <li><input type="checkbox" name="category[]" value="sandali"><label>Сандалі</label></li>
            <li><input type="checkbox" name="category[]" value="sliponi"><label>Сліпони</label></li>
            <li><input type="checkbox" name="category[]" value="leather"><label>Шкіряні кросівки</label></li>
            <li><input type="checkbox" name="category[]" value="spring"><label>Весняні кросівки</label></li>
            <li><input type="checkbox" name="category[]" value="summer"><label>Літні кросівки</label></li>
            <li><input type="checkbox" name="category[]" value="autumn"><label>Осінні кросівки</label></li>
            <li><input type="checkbox" name="category[]" value="forboy"><label>Кросівки для хлопчика</label></li>
            <li><input type="checkbox" name="category[]" value="forgirl"><label>Кросівки для дівчинки</label></li>
        </ul>
        <span>Ціна</span>
        <div class="price_range">
            <input id="price_range_input_from" type="text" placeholder="Від">
            <input id="price_range_input_to" type="text" placeholder="До">
            <button id="get_values">Застосувати</button>
        </div>
    </aside>
    <div class="items">
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        <div class="item">
            <a href="/"><img class="item_image" src="../img/header/autumn.jpg"></a>
            <a href="/">Nike airasdasda</a>
            <div class="item_buttons">
                <button id="item_to_fav">&#9825;</button>
                <button id="item_to_cart"><span>У кошик</span><img src="../img/header/cart.png"></button>
            </div>
        </div>
        










    </div>
</div>










<?php
include('common/footer.php');
?>
