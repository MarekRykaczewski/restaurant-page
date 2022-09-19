const content = document.querySelector("#home-content")

import generateHome from "./home.js"

function clearAll() {
    while(content.firstChild) {
        content.removeChild(content.lastChild)
    }
}

clearAll()
generateHome()