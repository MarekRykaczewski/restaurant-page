import generateHome from "./home.js"
import generateMenu from "./menu.js"
import generateContact from "./contact.js"


const content = document.querySelector("#home-content")

function clearAll() {
    while(content.firstChild) {
        content.removeChild(content.lastChild)
    }
}

clearAll()
generateMenu()

const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

homeBtn.onclick = function() {
    clearAll()
    generateHome()
}

menuBtn.onclick = function() {
    clearAll()
    generateMenu()
}

contactBtn.onclick = function() {
    clearAll()
    generateContact()
}