const mobileMenu = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.navbar')

const links = {
    products:document.querySelector('#Products'),
    sellers:document.querySelector('#Sellers'),
    earphones:document.querySelector('#Earphones'),
    launches:document.querySelector('#Launches'),
}

document.querySelector('.burger-menu').addEventListener('click', (event) => {
        mobileMenu.classList.remove('hidden')
        mobileMenu.classList.add('visible')
    })


mobileMenu.querySelector('.mobile-menu__close')
    .addEventListener('click', (event) => {
        mobileMenu.classList.remove('visible')
        mobileMenu.classList.add('hidden')
    })

    function scrollToSection(event) {
        const classes = event.target.className;
        if (classes.includes('menu-link')) {
            const content = event.target.innerText;
            switch (content) {
                case 'Products':
                    links.products.scrollIntoView();
                    break;
                case 'Sellers':
                    links.sellers.scrollIntoView();
                    break;
                case 'Earphones':
                    links.earphones.scrollIntoView();
                    break;
                case 'Launches':
                    links.launches.scrollIntoView();
                    break;
            }
        }
    }
    
    mobileMenu.addEventListener('click', scrollToSection);
    navbar.addEventListener('click', scrollToSection);
    