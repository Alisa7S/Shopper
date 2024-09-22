import ElemHTML from "../elem-html.js";
import headphones__1 from '../../img/headphones__1.png'
import headphones__2 from '../../img/headphones__2.png'
import addToCart from '../service/add-to-cart.js'


class LaunchesBlock extends ElemHTML{




// class LaunchesBlock extends ElemHTL{
//    elem = document.createElement('section')

    constructor(classes){
        super()
        this.classes = classes
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`
<section class="wrapper-5" id="Launches">
    <p class="wrapper-5__title">New Launches</p>
    <div class="wrapper-5__section__airdrop">
        <div class="arrow-slider-1">
            <img class="arrow-slider-img_1" src="../src/svg/Group 36.svg" alt="Group 36.svg">
        </div>
        <div class="wrapper-5__section__airdrop__left">
            <div class="beats__section">
                <img class="beats__section__img-1" src="../src/img/1111.png" alt="">
                <img class="beats__section__img-2" src="../src/img/2222.png" alt="">
            </div>  
        </div>

        <div class="wrapper-5__section__airdrop__right">
            <p class="wrapper-5__section__airdrop__title">Airdrop 500 Anc</p>
            <p class="wrapper-5__text">Lorem ipsum is a placeholder text commonly used to <br> demonstrate the visual form of a product ... Read More</p>
            <p class="wrapper-5__price">Price : <span class="wrapper-5__dolars">$45 .99</span></p>
            
            <div class="wrapper-5__section__airdrop__circle">
                <img src="../src/svg/Ellipse 28.png" alt="Ellipse 28.png">
                <img src="../src/svg/Ellipse 29.png" alt="Ellipse 29.png">
                <img src="../src/svg/Ellipse 30.png" alt="Ellipse 30.png">
            </div>
            <div class="wrapper-5__right__btns">
                <button class="order-btn">Add to cart</button>
                <button class="wrapper-5__right__btn-2">Explore More</button>
            </div>
        </div>
        <div class="arrow-slider-2">
            <img class="arrow-slider-img_2" src="../src/svg/Group 35.png">
        </div>
    </div>
</section>
`)
}
    
    createLaunchesBlock(){
        this.render()
        const buyBtn = document.querySelector('.    launches__wrapper').querySelector('.button-card')
        buyBtn.addEventListener('click',()=>{
            console.log('Add to cart')
            addToCart()
        })
    }
}

export default LaunchesBlock