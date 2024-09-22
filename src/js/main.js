import createWelcomePopup from './servise/welcome-popup.js'
import tabs from './tabs.js'
import {cardInfoTopPicksList, cardInfoWatchesList} from './tabs-card.js'
import Header from './sections/header.js'
import ProductsBlock from'./sections/products.js'
import SellersBlock from './sections/sellers.js'
import EarphonesBlock from './sections/earphones.js'
import LaunchesBlock  from './sections/launches.js'
import Footer from './sections/footer.js'
import MobileMenu from './sections/mobile-menu.js'

const header = new Header ('header')
const productsBlock = new ProductsBlock ('products')
const sellersBlock  = new SellersBlock ('sellers')
const earphonesBlock = new EarphonesBlock ('earphones')
const launchesBlock = new LaunchesBlock('launches')
const footer = new  Footer('footer')
const mobileMenu = new MobileMenu ('mobile-menu hidden')

//new Promise((res) => {
//    header.setTemplate()
//    header.createHeader()
//    res()
//}).then(() => {
//    productsBlock.setTemplate()
//    productsBlock.createProductsBlock()
//}).then(async () => {
//    sellersBlock.setTemplate()
//    await sellersBlock.createSellersBlock()
//}).then(async () => {
//    earphonesBlock.setTemplate()
//
//    await earphonesBlock.createEarphonesBlock()
//}).then(() => {
//    launchesBlock.setTemplate()
//    launchesBlock.createLaunchesBlock()
//}).then(() => {
//    footer.setTemplate()
//    footer.createFooter()
//}).then(() => {
//    mobileMenu.setTemplate()
//    mobileMenu.createMobileMenu()
//}).then(() => {
//    createWelcomePopup()
//})
// 
//
//
header.setTemplate()//Установочный шаблон
header.createHeader()//создать заголовок
productsBlock.setTemplate()
productsBlock.createProductsBlock()
sellersBlock.setTemplate()
sellersBlock.createTemplate()
earphonesBlock.setTemplate()
earphonesBlock.createTemplate()
launchesBlock.setTemplate()
launchesBlock.createTemplate()
footer.setTemplate()
footer.createTemplate()
mobileMenu.setTemplate()
mobileMenu.createTemplate()
createWelcomePopup()



// const tabSellersNames = ['Top Picks','Watches']
// const tabEarphonesNames = ['Earbuds','Wireless','Wired']
// tabs(tabSellersNames, [cardInfoTopPicksList, cardInfoWatchesList], //'.//sellers')
////tabs(tabEarphonesNames, [cardInfoTopPicksList, //cardInfoTopPicksList, //cardInfoTopPicksList], 'earphones')







