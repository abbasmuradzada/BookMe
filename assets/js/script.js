const navlist = document.querySelectorAll('.header-right nav ul li');
const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const about = document.getElementById('about');
const navServices = document.querySelector('.nav-services');
const services = document.getElementById('services');
const navWhy = document.querySelector('.nav-whyme');
const whyme = document.getElementById('facts');
const navFeatures = document.querySelector('.nav-features');
const features = document.getElementById('about-me');
const navContact = document.querySelector('.nav-contact');
const footer = document.querySelector('footer');
const header = document.querySelector('header');
const goToTopBtn = document.querySelector('.go-to-top');
const tags = document.querySelectorAll('.tag');

navlist.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector("li.active").classList.remove('active');
        element.classList.add('active');
    })
});

const goToSection = (nav, section) => {
    nav.addEventListener('click', () => {
        window.scroll({
            top: section.offsetTop, 
            behavior: 'smooth'
        });
    })
}

goToSection(navHome, header);
goToSection(navAbout, about);
goToSection(navServices, services);
goToSection(navWhy, whyme);
goToSection(navFeatures, features);
goToSection(navContact, footer);

const goToTop = () => {
    window.scroll({
        top: 0, 
        behavior: 'smooth'
    });
}

goToTopBtn.addEventListener('click', goToTop)


window.addEventListener('scroll', (event) => {    
    goToTopBtn.style.visibility = "visible";
    if (window.scrollY == 0) {
        console.log('scroll at the top');
    }    
});

tags.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList[1] == 'active') {
            element.classList.remove('active')
        }else{
            element.classList.add('active')
        }
    })
});