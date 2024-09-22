import ElemHTL from "../servise/elem-html.js";
//import search from '../../svg/glass-icon.svg'
//import basket from '../../svg/shopping-bag-icon.svg'
//import profile from '../../svg/profile-icon.svg'

class Header extends ElemHTL {
    elem = document.createElement('div')

    constructor(classes = '') {
        super()
        this.classes = classes
    }

    setTemplate() {
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`

        <!-- < Header  -->
        <section class="wrapper-1">
            <header>
                <p class="main-title-1">Shop<span class="main-title-2">per</span></p>
                <button class="burger-menu"><img src="../src/img/menu.png" alt=""></button>
                <div class="search-section">
                    <input type="text" class="search-input" value="Search Items">
                    <button class="search-btn">
                        <img src="" alt="glass-icon.svg">
                    </button>
                </div>

                <button class="cart-btn">
                    <img src="" alt="shopping-bag-icon.svg">
                    <p class="cart-btn-text">0 Items Added</p>
                </button>

                <button class="login-btn">
                    <img src="" alt="profile-icon.svg">
                    <p class="login-btn-text">Login or Sign Up</p>
                </button>
            </header>

            <nav class="navbar">
                <ul class="navbar__list">
                    <li class="navbar__elem"><button class="navbar__elem__btn">Features</button></li>
                    <li class="navbar__elem"><button class="navbar__elem__btn">Products</button></li>
                    <li class="navbar__elem"><button class="navbar__elem__btn">Blog</button></li>
                    <li class="navbar__elem"><button class="navbar__elem__btn">About</button></li>
                </ul>
            </nav>

            <div class="main">
                <div class="main-left">
                    <p class="main-info">Discover Our <br> Latest &nbsp;Products</p>
                    <p class="info-text">Lorem ipsum is a placeholder text commonly used <br class="br-info-text"> to demonstrate the visual form of a product</p>
                    <button class="order-btn">Buy Now</button>
                    <div class="face-section">
                        <div class="face-1">
                            <img class="face" src="../src/img/Ellipse 7.png" alt="fece.png">
                        </div>
                        <div class="face-2">
                            <img class="face" src="../src/img/Ellipse 9.png" alt="face.png">
                        </div>
                        <div class="face-3">
                            <img class="face" src="../src/img/Ellipse 11.png" alt="face.png">
                        </div>
                        <div class="face-4">
                            <img class="face" src="../src/img/Ellipse 13.png" alt="face.png">
                        </div>

                        <p class="reviews-text">15k Well <br> Reviews</p>
                    </div>
                </div>

                <div class="main-right">
                    <div class="star-1-section">
                        <img class="star" src="../src/svg/Star 1.svg" alt="Star.png">
                    </div>
                    <div class="title-beats">
                        <p class="title_word_R letter">R</p>
                        <p class="title_word_e1 letter">e</p>
                        <p class="title_word_d letter">d</p>
                        <p class="title_word_B letter">B</p>
                        <p class="title_word_e2 letter">e</p>
                        <p class="title_word_a1 letter">a</p>
                        <p class="title_word_t letter">t</p>
                        <p class="title_word_s letter">s</p>
                        <p class="title_word_M letter">M</p>
                        <p class="title_word_I letter">I</p>
                        <p class="title_word_9 letter">9</p>
                        <p class="title_word_c letter">c</p>
                        <p class="title_word_2 letter">2</p>
                        <p class="title_word_z letter">z</p>
                        <p class="title_word_m letter">m</p>
                        <p class="title_word_slash letter">/</p>
                        <p class="title_word_a2 letter">a</p>
                    </div>

                    <div class="beats-background">
                        <img class="beats" src="../src/img/beats.png" alt="beats.png"> 
                    </div>
                    <div class="star-2-section">
                        <img class="star" src="../src/svg/Star 1.svg" alt="Star.png">
                    </div>
                    <div class="play-video-section">
                        <button class="play-video-btn">
                            <img class="play-video-img" src="../src/img/Mask group.png" alt="">
                        </button>
                        <p class="play-video-text">Play Video</p>
                    </div>
                </div>
            </div>
        </section>`)
    }

    createHeader(){
        this.render()
    }
}

export default Header