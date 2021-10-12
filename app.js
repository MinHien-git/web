const navslide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-link')
    const navLinks = document.querySelectorAll('.nav-link li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, i) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLink 0.5s ease forwards ${i /7  + 0.2}s`
            }
        })

        burger.classList.toggle('toggle')
    })


}

navslide()