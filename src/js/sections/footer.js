

import ElemHTL  from "../servise/elem-html.js";

 class Footer extends ElemHTL{
    //elem = document.createElement('section')

    constructor(classes = ''){
        super()
        this.classes = classes
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`

<section class="wrapper-6">
    <div class="wrapper-6__section__up">
        <p class="wrapper-6__question">Ready to get started?</p>
        <button class="wrapper-6__btn">Get started</button>
    </div>
        <img class="wrapper-6__Divider" src="../src/svg/Divider.png">
        <div class="wrapper-6__section__website">
            <p class="wrapper-6__section__site">Subscribe to our <br>Website</p>
            <p class="wrapper-6__section__email">Email address</p>
            <img class="wrapper-6__section__btn" src="../src/svg/Rectangle.png" alt="Rectangle.png">
            <img class="wrapper-6__section__path" src="../src/svg/Path.png" alt="path.png">
            <img class="wrapper-6__section__separate" src="../src/svg/separate.png" alt="separate.png">
            </div>
        </div>

        <div class="wrapper-6__section__services">
            <p class="section__services__title-green">Services</p>
            <p class="section__services__title-black">Email Marketing</p>
            <p class="section__services__title-black">Campaigns</p>
            <p class="section__services__title-black">Branding</p>
            <p class="section__services__title-black">Offline</p>
        </div>

        <div class="wrapper-6__section__about">
            <p class="section__services__title-green">About</p>
            <p class="section__services__title-black">Our Story</p>
            <p class="section__services__title-black">Benefits</p>
            <p class="section__services__title-black">Team</p>
            <p class="section__services__title-black">Careers</p>
        </div>

        <div class="wrapper-6__section__help">
            <p class="section__services__title-green">Help</p>
            <p class="section__services__title-black">FAQs</p>
            <p class="section__services__title-black">Contact Us</p>
        </div>

        <div class="wrapper-6__section__footer">
            <p class="wrapper-6__section__footer-info-1">Terms & Conditions</p>
            <p class="wrapper-6__section__footer-info-2">Privacy Policy</p>
            <div class="wrapper-6__section__footer-social">
            <img class="section__facebook" src="../src/svg/001-facebook.png" alt="001-facebook.png">
            <img class="section__ptichca" src="../src/svg/Ptichca.png" alt="Ptichca.png">
            <img class="section__shape" src="../src/svg/004-instagram.png" alt="instagram.png">
            </div>
        </div> 
</section>
`)

}

createFooter (){
    this.render()
}
}

export default Footer 