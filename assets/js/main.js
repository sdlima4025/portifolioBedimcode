/* =====MENU SHOW===== */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

        if(toggle && nav){
            toggle.addEventListener('click', ()=> {
                nav.classList.toggle('show')
            })
        }
}
showMenu('nav-toggle','nav-menu')

/* =====ACTIVE AND REMOVE MENU===== */
const navLink =document.querySelectorAll('.nav__link')

    function linkAction() {
        // Active Link
        navLink.forEach(n => n.classList.remove('active'))
            this.classList.add('active')

        // Remove menu mobile
        const navMenu = document.getElementById('nav-menu')  
        navMenu.classList.remove('show')  
    }

    navLink.forEach(n => n.addEventListener('click', linkAction))


/* =====SCROLL REVEAL ANIMATION===== */



/* =====MENU SHOW===== */



/* =====SCROLL HOME===== */




/* =====SCROLL ABOUT===== */




/* =====SCROLL SKILLS===== */




/* =====SCROLL WORK===== */




/* =====SCROLL CONTACT===== */




/* =====MENU SHOW===== */




/* =====MENU SHOW===== */




/* =====MENU SHOW===== */