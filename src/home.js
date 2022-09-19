function generateHome() {
    const content = document.querySelector("#home-content")

    // content-left
    const contentLeft = document.createElement("div")
    
    const contentLeftImage = document.createElement("img")
    contentLeftImage.src=("profile.jpg")

    contentLeft.setAttribute("id", "home-content-left")

    const contentPar = document.createElement("p")
    const contentParText = document.createTextNode("The best ramen in Poland")

    content.append(contentLeft)
    contentLeft.append(contentLeftImage)
    contentLeft.append(contentPar)
    contentPar.append(contentParText)
    
    // content-right
    const contentRight = document.createElement("div")
    contentRight.setAttribute("id", "home-content-right")
    const contentRightText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus nobis, nemo sapiente qui reiciendis corporis nulla iste et. Voluptate rem alias consectetur quia incidunt.")

    content.append(contentRight)
    contentRight.append(contentRightText)
}

export default generateHome