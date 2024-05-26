export default function createMobileMenu(){    
    const mobileMenu = document.querySelector('.mobile-menu')

    document.querySelector('.burger-menu').addEventListener('click', (event) => {
        mobileMenu.classList.remove('hidden')
        mobileMenu.classList.add('visible')
    })
    
    mobileMenu.querySelector('.mobile-menu__close')
        .addEventListener('click', (event) => {
            mobileMenu.classList.remove('visible')
            mobileMenu.classList.add('hidden')
    })
}

