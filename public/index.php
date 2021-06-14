<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- Noto Sans JP、HiraKakuProの代わりのフォント -->
    <link href=”https://fonts.googleapis.com/css?family=Noto+Sans+JP&amp;subset=japanese” rel=”stylesheet”>
    <!-- jQuery読み込み -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Fontawsome読み込み -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <!-- スライダー実装 -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>


</head>

<body>


    <header class="l-header">

        <img class="c-image__headerLogo" src="assets/img/logologo2.svg" alt="左上ロゴ">

        <button class="js-modal-open c-button__hamburger c-button p-hamburger" type="button" id="js-buttonHamburger" aria-controls="global-nav" aria-expanded="false">
            <span class="p-hamburger__line ">
                <span class="u-visuallyHidden ">
                    メニューを開閉する
                </span>
            </span>
        </button>

        <!-- modal -->

        <div class="modal js-modal">
            <div class="modal__bg js-modal-close"></div>
            <div class="modal__content">
                <div class="p-modal__text js-modal-close">
                    <ul>
                        <li><a href="#1 " class="js-modal-close">Concept</a></li>
                        <li><a href="#2" class="js-modal-close">Works</a></li>
                        <li><a href="#3" class="js-modal-close">Florist</a></li>
                        <li><a href="#4" class="js-modal-close">Shop information</a></li>
                        <li>
                            <a a href="#5" class="js-modal-close ">Contact us</a>
                        </li>
                    </ul>
                </div>

            </div>
            <!--modal__inner-->
        </div>
        <!--modal-->

    </header>



    <!-- modal -->

    <div class="modal js-modal">
        <div class="modal__bg js-modal-close"></div>
        <div class="modal__content">
            <div class="p-modal__text js-modal-close">
                <ul>
                    <li><a href="#1 " class="js-modal-close">Concept</a></li>
                    <li><a href="#2" class="js-modal-close">Works</a></li>
                    <li><a href="#3" class="js-modal-close">Florist</a></li>
                    <li><a href="#4" class="js-modal-close">Shop information</a></li>
                    <li>
                        <a a href="#" class="js-modal-close ">Contact us</a>
                    </li>
                </ul>
            </div>

        </div>
        <!--modal__inner-->
    </div>
    <!--modal-->

    </header>



    <div class="l-hero">

        <img class=" c-image__heroLogo " src="assets/img/logologo3.svg " alt="メインロゴ ">

        <p class="c-p__heroText ">- White flower shop -</p>

    </div>


    <main class="l-main ">


        <div class="c-background__color "></div>

        <div class="p-main__container">

            <section class="p-section__concept">
                <h1 class="c-h1__concept" id="1">Concept</h1>
                <p class="c-p__conceptText">私たちShiroは、白いお花だけを取り扱うフラワーショップです。色とりどりの花束も素敵だけれど、洗練された「白」の美しさを感じてほしい。「白」に対する愛から生まれた静寂な時間が流れる店へ、ぜひお越しください。</p>
                <img class="c-image__concept " src="assets/img/concept.jpg " alt="花瓶に入った白い花束 ">

            </section>


            <section class="p-section__Works">

                <h1 class="c-h1__Works" id="2">Works</h1>
                <p class="c-p__worksText">オーダーメイドでのブーケ・アレンジメントのデザインのほか、ウェディングやイベントの装花なども行なっています。一人一人にあったご提案をさせていただきます。</p>


                <div class="p-articleWrapper__works">
                    <article class="p-article__works">
                        <img class="c-image__works c-image__works749" src="assets/img/yourself.jpg " alt="横たわった白い花束 ">
                        <h2>Gift</h2>
                        <p class="c-p__worksText2">花束をお送りしたいお相手、伝えたいお気持ちに合わせたプレゼント用花束のアレンジメントをさせていただきます。花言葉などの豆知識もお伝えします。</p>
                    </article>
                    <article class="p-article__decoration">
                        <img class="c-image__decoration c-image__works2 c-image__works749" src="assets/img/decoration.jpg " alt="マカロンと花 ">
                        <h2 class="c-h2__decoration">Decoration</h2>
                        <p class="c-p__worksText2">お写真を彩るお花を一輪から販売。一定期間のご契約で定期的にご自宅へ配送させていただくことも可能です。</p>
                    </article>
                    <article class="p-article__wedding">
                        <img class="c-image__wedding c-image__works2 c-image__works749" src="assets/img/wedding.jpg " alt="手に持った白い花束 ">
                        <h2>Wedding</h2>
                        <p class="c-p__worksText2">ウエディングドレスに合わせたブーケや式場の雰囲気に合う装花をご提案。お打ち合わせの流れや回数、費用などにつきましてはお問い合わせください。</p>
                    </article>
                    <article class="p-article__foryourself">
                        <!-- 750px時画像 -->
                        <img class="c-image__foryourself c-image__works c-image__works749" src="assets/img/yourself.jpg " alt="横たわった白い花束 ">
                        <!-- 1280px時画像 -->
                        <img class="c-image__PCforyourself c-image__works " src="assets/img/pc-yourself.jpg " alt="横たわった白い花束 ">
                        <h2 class="c-h2__foryourself">For yourself</h2>
                        <p class="c-p__worksText2">お部屋の雰囲気やライフスタイルをお聞きしてご自宅用の花束をご提案し、少しでも長く咲かせるコツもお教えします。花束に合った花瓶をご提案することも可能です。</p>
                    </article>
                </div>


            </section>


            <section class="p-section__florist ">

                <h1 class="c-h1__florist" id="3">Florist</h1>
                <p class="c-p__floristTitletext">Shiro専属のフローリストたちをご紹介。<br> 得意の分野であなたのオーダーを最大限に叶えます。</p>


                <div class="p-articleWrapper__florist slider">
                    <article class="p-article__florist">
                        <!-- 750px時画像 -->
                        <img class="c-image__florist" src="assets/img/shiyu.jpg " alt="スカーフの女性と白い花束 ">
                        <!-- 1280px時画像 -->
                        <img class="c-image__pcflorist" src="assets/img/pc-shiyu.jpg " alt="スカーフの女性と白い花束 ">
                        <h2 class="c-h2__florist">Shiyu</h2>
                        <p class="c-p__floristText">お花茶屋大学フラワーアレンジメント科を卒業後、さまざまな白い花を探すために世界を一周し、Shiroの創業者となる。</p>
                    </article>
                    <article class="p-article__florist">
                        <!-- 750px時画像 -->
                        <img class="c-image__florist" src="assets/img/mao.jpg " alt="鏡に移った男性 ">
                        <!-- 1280px時画像 -->
                        <img class="c-image__pcflorist" src="assets/img/pc-mao.jpg " alt="鏡に移った男性 ">
                        <h2 class="c-h2__florist">Mao</h2>
                        <p class="c-p__floristText">花の魅力に惹かれ、空間デザインの世界からフローリストの道を歩む。主に結婚式やイベントで使用するお花のディレクション担当。</p>
                    </article>
                    <article class="p-article__florist">
                        <!-- 750px時画像 -->
                        <img class=" c-image__florist " src="assets/img/omichan.jpg " alt="ぼやけた女性と白い花 ">
                        <!-- 1280px時画像 -->
                        <img class=" c-image__pcflorist " src="assets/img/pc-omichan.jpg " alt="ぼやけた女性と白い花 ">
                        <h2 class="c-h2__florist">Omichan</h2>
                        <p class="c-p__floristText">フローリスト兼ガーデナーという特殊な経歴をもつ。豊富な知識と技術でお客様のオーダーを叶える。</p>
                    </article>
                </div>

            </section>


            <div class=" c-background__colorTwo "></div>


            <section class="p-section__shopInformation ">

                <h1 class="c-title__information" id="4">Shop information</h1>
                <p class="c-p__informationTitletext">Shiroの店舗情報をご紹介します。</p>


                <div class="p-container__shopInformation">
                    <!-- 750px時画像 -->
                    <img class="c-image__information" src="assets/img/info.jpg " alt="アップの白い花 ">
                    <!-- 1280px時画像 -->
                    <img class="c-image__pcinformation" src="assets/img/pc-info.jpg " alt="アップの白い花 ">

                    <ul class="p-ul__access">
                        <li class="p-li__access">
                            <h3>住所</h3>
                            <p class="c-p__accessText">〒810-0001<br> 福岡県福岡市中央区天神0-0-0</p>
                        </li>
                        <li class="p-li__access">
                            <h3>電話番号</h3>
                            <p class="c-p__accessText">0120-000-000</p>
                        </li>
                        <li class="p-li__access">
                            <h3>営業時間</h3>
                            <p class="c-p__accessText">11:00-20:30 （定休日：水曜日）</p>
                        </li>
                        <li class="p-li__access">
                            <h3>アクセス</h3>
                            <p class="c-p__accessText c-p__access4">天神駅12a出口から徒歩6分、東京駅8b出口から徒歩12分</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>


        <section class="p-section__contact">

            <div class="test-contact" id="5"></div>
            <h1 class="c-title__contact">Contact us</h1>

            <p class="c-p__contactText">イベントや結婚式でご利用する装花のご相談や、<br> フラワーアレンジメントのご予約などはこちらからお問い合わせください。
            </p>






            <button class="c-button__contact js-contactModal-open" type="submit "><i class="far fa-envelope "></i>お問い合わせ</button>

        </section>

    </main>


    <!-- contactModal -->
    <div class="contactModal js-contactModal">
        <div class="contactModal__bg js-contactModal-close"></div>
        <div class="contactModal__content">

            <!-- PHP実装テスト -->
            <style>
                .form-text {
                    font-size: 4rem;
                }
                
                input {
                    width: 50rem;
                    height: 7rem;
                    font-size: 4rem;
                    display: block;
                    margin: 0 auto;
                }
                
                textarea {
                    width: 50rem;
                    height: 15rem;
                    font-size: 4rem;
                }
                
                select {
                    width: 50rem;
                    height: 7rem;
                    font-size: 4rem;
                }
            </style>

            <form action="http://localhost/sent.php" method="post">

                <div class="form-text">E-mailを入力してください</div>
                <input type="text" name="email">

                <div class="form-text">内容</div>
                <textarea name="body"></textarea>

                <div class="form-text">年齢</div>
                <select name="age">
                <option value="未選択">選択してください</option>

                <?php 
                  for($i=6; $i <=100; $i++) {
                  echo "<option value='{$i}'>{$i}</option>";
                }
                ?>
                  
                 
            </select>

                <input type="submit" value="送信">

            </form>
            <!-- ここまで -->

            <a class="js-contactModal-close" href="">閉じる</a>
        </div>
        <!--modal__inner-->
    </div>
    <!--modal-->



    <!-- トップページ戻るボタン -->
    <p class="pagetop " style="display: block; "><a href="# "><i class="fas fa-chevron-up "></i></a></p>


    <!-- テスト -->
    <div class="test">
        おはよう
    </div>
    <style>
        .test {
            font-size: 5rem;
        }
    </style>
    <!-- テストここまで -->



    <footer class="l-footer "><small class="c-small__footer ">Copyright © Shiro All Rights Reserved</small></footer>
    <script src="assets/js/script.js "></script>
</body>

</html>