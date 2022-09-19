import generateHome from "./home.js"
import generateMenu from "./menu.js"

const content = document.querySelector("#home-content")

function clearAll() {
    while(content.firstChild) {
        content.removeChild(content.lastChild)
    }
}

clearAll()
generateMenu()