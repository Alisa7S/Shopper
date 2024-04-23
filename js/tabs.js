
const SellersCards = document.querySelector('.wrapper-3').querySelector('.cards')
const EarphonesCards = document.querySelector('.wrapper-4').querySelector('.cards')

const SellersTabBtns = document.querySelector('.wrapper-3').querySelector('.tab-section')


SellersTabBtns.addEventListener('click',(event)=> {
    const target = event.target
    const tabBtnActive = SellersTabBtns.querySelectorAll('button')
    tabBtnActive.forEach(btn => {
        btn.classList.remove('active')
    })
    target.classList.add('active')
        
    if(target.innerText == "Top Picks"){
        getCards(cardInfoTopPicksList, SellersCards)
    }else{
        getCards(cardInfoWatchesList, SellersCards)
    }

})

const EarphonesTabBtns = document.querySelector('.wrapper-4').querySelector('.tab-section')


EarphonesTabBtns.addEventListener('click',(event)=> {
    const target = event.target
    const tabBtnActive = EarphonesTabBtns.querySelectorAll('button')
    tabBtnActive.forEach(btn => {
        btn.classList.remove('active')
    })
    
    if(target.innerText == "Wireless"){
        getCards(cardInfoWatchesList, EarphonesCards)
    }else{
        getCards(cardInfoWatchesList, EarphonesCards)
    }
    
})
 


const cardInfoTopPicksList = [{
    cardTitle: "Беспроводные наушники №1",
    reviews:100,
    price:32,
},{
    cardTitle: "Беспроводные наушники №2",
    reviews:100,
    price:95,
},{
    cardTitle: "Беспроводные наушники №3",
    reviews:100,
    price:132,
}]

const cardInfoWatchesList = [{
    cardTitle: "Беспроводные наушники №156",
    reviews:100,
    price:32,
},{
    cardTitle: "Беспроводные наушники №256",
    reviews:100,
    price:95,
},{
    cardTitle: "Беспроводные наушники №356",
    reviews:100,
    price:132,
}]

function getCards(cardInfoList, elem){
    const arr = cardInfoList.map(cardInfo => {
        const tab =  `<div class="card">
                    <div class="card__section bg-card-section-color-2">
                    <div class="card__section__save bg-save-color-1">Save <br>60%</div>
                    <img class="card__section__product-img" src="./img/Boat Rockerz 333-1.png" alt="Boat Rockerz 333.png">
                        <div class="card__section__info">
                            <p class="card__section__info__name">${cardInfo.cardTitle}</p>
                            <div class="card__section__info__rating">
                                <img src="./svg/small-star.svg" alt="small-star.svg">
                                <img src="./svg/small-star.svg" alt="small-star.svg">
                                <img src="./svg/small-star.svg" alt="small-star.svg">
                                <img src="./svg/small-star.svg" alt="small-star.svg">
                                <img src="./svg/small-star.svg" alt="small-star.svg">
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





