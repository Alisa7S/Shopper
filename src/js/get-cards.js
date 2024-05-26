export default function getCards(cardInfolist, elem) {

    elem.innerHTML=''
    const arr = cardInfolist.map(cardInfo => {
        const tab =  `<div class="card">
                            <div class="card__section bg-card-section-color-2">
                                <div class="card__section__save bg-save-color-1">Save <br>60%</div>
                                <img class="card__section__product-img" src="../src/img/Boat Rockerz 333-1.png" alt="Boat Rockerz 333.png">
                                <div class="card__section__info">
                                    <p class="card__section__info__name">${cardInfo.cardTitle}</p>
                                    <div class="card__section__info__rating">
                                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                                        <img src="../src/svg/small-star.svg" alt="small-star.svg">
                                        <p class="card__section__info__rating__reviews">${cardInfo.reviews} Reviews</p>
                                    </div>
                                    <p class="card__section__info__price">$${cardInfo.price}</p>
                                </div>
                            </div>
                            <button class="card__btn">Add to cart</button>
                      </div>`
        return tab
    }) 
    elem.insertAdjacentHTML('beforeend',arr.join(''))
}
