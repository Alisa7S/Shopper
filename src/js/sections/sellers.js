// import card__headphons from '../../img/card__headphons.png'
// import card__headphons__2 from '../../img/card__headphons__2.png'
// import card__headphons__3 from '../../img/card__headphons__3.png'

 class SellersBlock extends ElemHTL{
    

    constructor(classes){
        super()
        this.classes = classes
        
    }
    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentElement("afterbegin",`
        <section class="wrapper-3" id="Sellers">
    <p class="wrapper-3__title">Top Sellers</p>
    <div class="tab-section">
        <button class="tab-btn active">Top Picks</button>
        <button class="tab-btn">Watches</button>
    </div>
    <div class="cards">
        <div class="card">
            <div class="card__section bg-card-section-color-1">
                <div class="card__section__save bg-save-color-1">Save <br>60%</div>
                <img class="card__section__product-img" src="../src/img/Boat Rockerz 333-1.png" alt="Boat Rockerz 333.png">
                <div class="card__section__info">
                    <p class="card__section__info__name">Boat Rockerz 333</p>
                    <div class="card__section__info__rating">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <p class="card__section__info__rating__reviews">75 Reviews</p>
                    </div>
                    <p class="card__section__info__price">$20</p>
                </div>
            </div>
            <button class="card__btn">Add to cart</button>
        </div>

        <div class="card">
            <div class="card__section bg-card-section-color-2">
                <img class="card__section__product-img" src="../src/img/Boat kerz 234-1.png" alt="Boat Rockerz 234.png">
                <div class="card__section__info">
                    <p class="card__section__info__name">Boat kerz 234</p>
                    <div class="card__section__info__rating">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <p class="card__section__info__rating__reviews">75 Reviews</p>
                    </div>
                    <p class="card__section__info__price">$40</p>
                </div>
            </div>
            <button class="card__btn">Add to cart</button>
        </div>

        <div class="card">
            <div class="card__section bg-card-section-color-3">
                <div class="card__section__save bg-save-color-2">Save <br> 40%</div>

                <img class="card__section__product-img" src="../src/img/Boat Rockerz 323-1.png" alt="Boat Rockerz 333.png">
                <div class="card__section__info">
                    <p class="card__section__info__name">Boat Rockerz 323</p>
                    <div class="card__section__info__rating">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                        <p class="card__section__info__rating__reviews">75 Reviews</p>
                    </div>
                    <p class="card__section__info__price">$30</p>
                </div>
            </div>
            <button class="card__btn">Add to cart</button>
        </div> 
    </div>
    <div class="arrow-slider">
        <img class="arrow-slider-img" src="../src/svg/Vector.svg" alt="Vector.svg">
    </div>
    </section>
`)
    }

    createSellersBlock(){
        this.render()
    }
}

export default SellersBlock