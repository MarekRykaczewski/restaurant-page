function generateContact() {
    const content = document.querySelector("#home-content")

    const contact = document.createElement("div")
    const contactText = document.createTextNode("123 456 789\n Freedom Square, Warsaw")
    contact.append(contactText)
    content.append(contact)
}

export default generateContact