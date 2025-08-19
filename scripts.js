<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>dapper deck</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="scripts.js" defer></script>
</head>
<body>
    <div class="iphone">
        <div class="index-ribbon">
            <h1>Dapper Deck</h1>
            <div class="menu-buttons">
                <button class="util-button donate">
                    <i class="fa-solid fa-heart"></i>
                </button>

                <a href="./help.html">
                    <button class="util-button help">
                        <i class="fa-solid fa-question"></i>
                    </button>
                </a>
                <button class="util-button setting">
                    <i class="fa-solid fa-cog"></i>
                </button>
                <button class="util-button add-deck">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
        <div class="button-grid">
            <a class="btn1-link" href="./editing.html">
                <button>
                    <div class="btn-img"><img src="images/image-5-2.png"></div>
                    <span>Btn 1</span>
                </button>
            </a>
            <button>
                <div class="btn-img"></div>
                <span>Btn 2</span>
            </button>
            <button>
                <div class="btn-img"></div>
                <span>Btn 3</span>
            </button>
            <button>
                <div class="btn-img"></div>
                <span>Btn 4</span>
            </button>
            <button>
                <div class="btn-img"></div>
                <span>Btn 5</span>
            </button>
            <button>
                <div class="btn-img"></div>
                <span>Btn 6</span>
            </button>
        </div>  
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const btn1Link = document.querySelector('.btn1-link');
            const iphone = document.querySelector('.iphone');
            if (btn1Link && iphone) {
                btn1Link.addEventListener('click', function(e) {
                    e.preventDefault();
                    iphone.classList.add('page-transition');
                    setTimeout(() => {
                        window.location.href = btn1Link.getAttribute('href');
                    }, 400); // duration matches CSS transition
                });
            }
        });
    </script>
</body>
</html>