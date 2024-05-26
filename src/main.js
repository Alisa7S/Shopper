import css from '../src/css/styles.css'
import createMobileMenu from './js/mobile-menu.js'
import createWelcomePopup from './js/welcome-popup.js'
import tabs from './js/tabs.js'
import {cardInfoTopPicksList, cardInfoWatchesList} from './js/tabs-card.js'

createMobileMenu()
createWelcomePopup()

const tabSellersNames = ['Top Picks','Watches']
const tabEarphonesNames = ['Earbuds','Wireless','Wired']

tabs(tabSellersNames, [cardInfoTopPicksList, cardInfoWatchesList], '.wrapper-3')
tabs(tabEarphonesNames, [cardInfoTopPicksList, cardInfoTopPicksList, cardInfoTopPicksList], 'wrapper-4')