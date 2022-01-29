/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show_menu')
        })
    }
}
showMenu('nav_toggle','nav_menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }
    })
}

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 200) nav.classList.add('scroll_header'); else nav.classList.remove('scroll_header')
}

window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll_top');

    if(this.scrollY >= 560) scrollTop.classList.add('scroll_top'); else scrollTop.classList.remove('scroll_top')
}

window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme_button');
const darktheme = 'dark_theme';
const iconTheme = 'fa-sun';

const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon':'fa-sun'


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)

}

themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darktheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())

})
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})
sr.reveal(`.home_data, .home_img,
            .about_data, .about_img,
            .services_content, .menu_content,
            .app_data, .app_img,
            .contact_data, .contact_button,
            .footer_content`, {
    interval: 200
})