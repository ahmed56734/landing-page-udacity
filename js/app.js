/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = []

class Section {

    constructor(id, title, body) {
        this.title = title
        this.body = body
        this.id = id
    }
}

function main() {

    const section1 = new Section("section 1", "section1", "aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.n")
    const section2 = new Section("section 2", "section2", "aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.n")
    const section3 = new Section("section 3", "section3", "aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.n")
    const section4 = new Section("section 4", "section4", "aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis.n")

    sections.push(section1, section2, section3, section4)

    const mainELement = document.getElementsByTagName("main")[0]
    const navigationElementContainer = document.getElementById("navbar__list")

    sections.forEach(value => {
        //building sections

        const title = document.createElement("h2")
        const body = document.createElement("p")
        const section = document.createElement("section")
        const landingContainer = document.createElement("div")

        title.textContent = value.title
        body.textContent = value.body
        section.id = value.id
        landingContainer.className = "landing__container"

        landingContainer.appendChild(title)
        landingContainer.appendChild(body)
        section.appendChild(landingContainer)
        mainELement.appendChild(section)

        // build the nav
        const anchor = document.createElement("a")
        anchor.href = value.id
        anchor.textContent = value.title
        anchor.className = "menu__link"
        const listElement = document.createElement("li")
        listElement.appendChild(anchor)

        //navigate to selected section
        anchor.onclick = ev => {
            ev.preventDefault()
            section.scrollIntoView()
            mainELement.getElementsByClassName("your-active-class")[0]?.classList.remove("your-active-class")
            section.className = "your-active-class"
        }

        navigationElementContainer.appendChild(listElement)
    })


}


