 import ElemHTL  from "../servise/elem-html.js";

 class ProductsBlock extends ElemHTL{
    elem = document.createElement('section')

    constructor(classes){
        super()
        this.classes = classes
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`
        <div class="wrapper-2-left">
        <img class="main-title-3" src="../src/svg/a.svg" alt="Apple wireless Airpod.svg">
        <div class="Airpod-section">
            <img class="Airpod-1" src="../src/img/Rectangle 17.png" alt="rectangle.png">
            <img class="Airpod-2" src="../src/img/Rectangle 16.png" alt="rectangle.png">
            <img class="Airpod-3" src="../src/img/Rectangle 15.png" alt="rectangle.png">
        </div>
        <div class="price-section-1">
            <p class="text-price">Price: $45.99</p>
        </div>
    </div>

    <div class="wrapper-2-right">
        <div class="Products-section">
            <p class="text-1">Our Featured Products</p>
            <p class="text-2">Lorem ipsum is a placeholder text commonly <br class="br-info-text"> to demonstrate the visual form of a <br class="br-info-text" > product</p>
        </div>
        <div class="wrapper-2-btns">
            <button class="order-btn">Add to cart</button>
            <button class="view-btn-2">View more</button>
        </div> 
    </div>
        `)
    }
    
    createProductsBlock(){
        this.render()
    }
 }

 export default ProductsBlock