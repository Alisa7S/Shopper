import ElemHTML from "../elem-html.js";
import search from '../../img/search.svg'



class MobileMenu extends ElemHTML{
    constructor(classes = ''){
        super('section')
        this.classes = classes
    }

    setTemplate(){
        this.elem.classList.add(this.classes)
        this.elem.insertAdjacentHTML("afterbegin",`
        <section class="mobile-menu hidden">
            <button class="mobile-menu__close">
                x
            </button>
            <div class="search-section">
                <input type="text" class="search-input" value="Search Items">
                <button class="search-btn">
                    <img src="../src/svg/glass-icon.svg" alt="glass-icon.svg">
                </button>
            </div>
    
            <ul class="mobile-menu__links">
                <li class="mobile-menu__links—link"><a class="menu-link" href="#Products">Features</a></li>
                <li class="mobile-menu__links—link"><a class="menu-link" href="#Sellers">Products</a></li>
                <li class="mobile-menu__links—link"><a class="menu-link" href="#Launches">Blog</a></li>
                <li class="mobile-menu__links—link"><a class="menu-link" href="#Earphones">About</a></li>
            </ul>
        </section>`)
    }
    
    createMobileMenu(){
        this.render()
        const mobileMenu =document.querySelector('.mobile-menu').addEventListener('click', (event) => {
        mobileMenu.classList.remove('hidden')
        mobileMenu.classList.add('visible')
        })
    
        mobileMenu.querySelector('.mobile-menu__close')
        .addEventListener('click', (event) => {
            mobileMenu.classList.remove('visible')
            mobileMenu.classList.add('hidden')
        })
    }
}




export default MobileMenu