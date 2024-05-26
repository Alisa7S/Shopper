export default function createWelcomePopup() {
    const popup = document.createElement('section')
    const WELCOME_POPUP_KEY = 'WELCOME_POPUP_KEY'
    
    const isShowWelomePopup = JSON.parse(localStorage.getItem(WELCOME_POPUP_KEY))
    popup.className = 'welcome-popup'
    
    function showWelcomePopup(){
        popup.className = 'welcome-popup'
        const content = `<div class="welcome-popup__wrapper">
                            <p class="welcome-popup__text">Привет, добро пожаловать на маркетплейс</p>
                            <button class="welcome-popup__btn">Закрыть и больше не показывать</button>
                        </div>`
    
        popup.insertAdjacentHTML('afterbegin',content)
        document.body.prepend(popup)
        document.body.style.overflow = 'hidden'
    
        const closebutton = document.querySelector('.welcome-popup__btn')
    
        closebutton.addEventListener('click',(event)=>{
            localStorage.setItem(WELCOME_POPUP_KEY,JSON.stringify(true))
            popup.replaceWith('')
            document.body.overflow = 'auto'
        })
    }
    
    
    if(!isShowWelomePopup){
        setTimeout(showWelcomePopup, 1000)
    }
}