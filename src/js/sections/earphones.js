 import ElemHTL  from "../elem-html.js";
 import redStar from '../../img/red__star.svg'
import card__headphons__4 from '../../img/card__headphons__4.png'
import card__headphons__2 from  '../../img/card__headphons__2.png'
import card__headphons__5 from '../../img/card__headphons__5.png'
import getHeadphones from "../servise/get-headphons.js"



  class EarphonesBlock extends ElemHTL{
  
     constructor(classes = ''){
         super('section')
         this.classes = classes
     }
     setTemplate(){
         this.elem.classList.add(this.classes)
         this.elem.insertAdjacentHTML("afterbegin",`
 <section class="wrapper-4" id="Earphones">
     <p class="wrapper-4__title">Trending Earphones</p>
     <div class="tab-section">
         <button class="tab-btn active">Earbuds</button>
         <button class="tab-btn">Wireless</button>
         <button class="tab-btn">Wired</button>
     </div>
     <div class="cards">
         <div class="card">
             <div class="card__section bg-card-section-color-1">
                 <div class="card__section__save -save-color-1">Save <br> 60%</div>
                 <img class="card__section__product-img1" src="../c/img/Boat Rockerz 333-2.png" alt="Boat Rockerz 333.png">
                 <div class="card__section__info">
                     <p class="card__section__info__name">Boat ckerz 333</p>
                     <div class="card__section__info__rating">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <p ass="card__section__info__rating__reviews">75 Reviews</p>
                     </div>
                     <p class="card__section__info__price">$20</p>
                 </div>
             </div>
             <button class="card__btn">Add to cart</button>
         </div>
      
         <div class="card">
             <div class="card__section bg-card-section-color-2">
                 <img class="card__section__product-img2" src="../c/img/Boat kerz 234-2.png" alt="Boat Rockerz 333.png">
                 <div class="card__section__info">
                     <p class="card__section__info__name">Boat kerz 4</p>
                     <div class="card__section__info__rating">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <p ass="card__section__info__rating__reviews">75 Reviews</p>
                     </div>
                     <p class="card__section__info__price">$40</p>
                 </div>
             </div>
             <button class="card__btn">Add to cart</button>
         </div>
         <div class="card">
             <div class="card__section bg-card-section-color-3">
                 <div class="card__section__save -save-color-2">Save <br> 40%</div>
                 <img class="card__section__product-img3" src="../c/img/Boat Rockers 323-2.png" alt="Boat Rockerz 333.png">
                 <div class="card__section__info">
                     <p class="card__section__info__name">Boat ckers 323</p>
                     <div class="card__section__info__rating">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <img src="../src/svg/small-star.svg" t="small-star.svg">
                         <p ass="card__section__info__rating__reviews">75 Reviews</p>
                     </div>
                     <p class="card__section__info__price">$30</p>
                 </div>
             </div>
             <button class="card__btn">Add to cart</button>
         </div>
     </div>
     <div class="arrow-slider">
         <img class="arrow-slider-img" src="../src/svg/Vector.svg" t="Vector.svg">
     </div>
     </section>

     
    `)
 }
    async createEarphonesBlock(){
     const res = await getHeadphones()
     console.log(res)
     this.render()
    }
 }
 export default EarphonesBlock