function generateMenu() {
    const content = document.querySelector("#home-content")

    const menu = document.createElement("div")

    for (let i = 0; i < 5; i++) {
        let menuItem = document.createElement("div")
        let menuImg = document.createElement("img")
        let menuDisc = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum diam libero, et ultrices felis.")
        menuImg.src=("ramen.jpg")
        menuItem.setAttribute("class", "menu-item")
        menuItem.append(menuDisc)
        menuItem.append(menuImg)
        menu.append(menuItem)
    }

    
    content.append(menu)

    menu.setAttribute("id", "menu")
    
}

export default generateMenu