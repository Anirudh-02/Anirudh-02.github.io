let icons = document.querySelectorAll('.icon')
let iconsObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    })
})

icons.forEach(icon => {
    iconsObserver.observe(icon)
});

let tools = document.querySelectorAll('.tool')
let toolsObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    })
})

tools.forEach(tool => {
    toolsObserver.observe(tool)
});

let sections = Array.from(document.getElementsByTagName('section'))
let sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.getElementById(`${entry.target.className}NavItem`).classList.add('active')
        }
        else {
            document.getElementById(`${entry.target.className}NavItem`).classList.remove('active')
        }
    })
}, {
    threshold: 0.5
})

sections.forEach(section => {
    sectionObserver.observe(section)
})

let contactIcons = Array.from(document.getElementsByClassName('contactIcon'))
let contactIconObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
}, {
    threshold: 0.5
})

contactIcons.forEach(contactIcon => {
    contactIconObserver.observe(contactIcon)
})