const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('.header');


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            
        });


        burger.classList.toggle('toggle');
        header.classList.toggle('show');
    });
    
    
    
}

navSlide();

