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

// class to hold the section data
class Section {

    constructor(id, title, body1, body2) {
        this.id = id
        this.title = title
        this.body1 = body1
        this.body2 = body2
    }
}

function main() {

    //building the landing page content with the section class
    const section1 = new Section("section 1", "section1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.", "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.")
    const section2 = new Section("section 2", "section2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.", "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.")
    const section3 = new Section("section 3", "section3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.", "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.")
    const section4 = new Section("section 4", "section4", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.", "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.")

    // add section to sections array
    sections.push(section1, section2, section3, section4)

    //find the one and only main tag that will contain sections tags
    const mainElement = document.getElementsByTagName("main")[0]
    //find navigation container
    const navigationElementContainer = document.getElementById("navbar__list")

    //looping over section items to build sections and navigation
    sections.forEach(value => {
        //building sections

        //creating html element for each section to be added in the dom
        const title = document.createElement("h2")
        const body1 = document.createElement("p")
        const body2 = document.createElement("p")
        const section = document.createElement("section")
        const landingContainer = document.createElement("div")

        //setting data for the elements
        title.textContent = value.title
        body1.textContent = value.body1
        body2.textContent = value.body2
        section.id = value.id
        landingContainer.className = "landing__container"

        //appending elements to the dom with the right order
        landingContainer.appendChild(title)
        landingContainer.appendChild(body1)
        landingContainer.appendChild(body2)
        section.appendChild(landingContainer)
        mainElement.appendChild(section)

        // building the nav
        const anchor = document.createElement("a")
        anchor.href = value.id
        anchor.textContent = value.title
        anchor.className = "menu__link"
        const listElement = document.createElement("li")
        listElement.appendChild(anchor)

        //navigate to selected section
        anchor.onclick = ev => {
            ev.preventDefault()
            section.scrollIntoView({behavior: "smooth"})
            setActiveSection(section.id)
        }

        navigationElementContainer.appendChild(listElement)
    })

    const sectionElements = document.getElementsByTagName("section")
    //listen for scrolling events
    document.body.onscroll = ev => {
        for (let sectionElement of sectionElements) {
            if (isInViewport(sectionElement)) {
                setActiveSection(sectionElement.id)
            }
        }
    }


}


function setActiveSection(sectionId) {
    //remove other active section if exists
    document.getElementsByClassName("your-active-class")[0]?.classList.remove("your-active-class")
    //set the active section css class by section id
    document.getElementById(sectionId).className = "your-active-class"

}

// check if element is currently visible on screen
function isInViewport (element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


