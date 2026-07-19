/* ==========================
   SMOOTH SCROLL
========================== */

const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const id = this.getAttribute('href');

        const target = document.querySelector(id);

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: 'smooth'

        });

    });

});


/* ==========================
   ACTIVE MENU
========================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================
   FADE IN ANIMATION
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});


const hiddenElements = document.querySelectorAll(

".hero,.about,.skills,.projects,.testimonial,.contact"

);

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".card h3");

let started = false;

window.addEventListener("scroll", ()=>{

    const about = document.querySelector(".about");

    if(window.scrollY > about.offsetTop - 350 && !started){

        counters.forEach(counter=>{

            const target = counter.innerText;

            const number = parseInt(target);

            let count = 0;

            const speed = number / 40;

            const update = ()=>{

                count += speed;

                if(count < number){

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                }else{

                    if(target.includes("%")){

                        counter.innerText = "100%";

                    }

                    else{

                        counter.innerText = number + "+";

                    }

                }

            }

            update();

        });

        started = true;

    }

});


/* ==========================
   PROGRESS BAR
========================== */

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.animation = "fill 2s forwards";

        }

    });

},{
    threshold:0.5
});

progressBars.forEach(bar=>{

    progressObserver.observe(bar);

});


/* ==========================
   NAVBAR SHADOW
========================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.boxShadow =

        "0 5px 25px rgba(0,0,0,.35)";

    }

    else{

        header.style.boxShadow="none";

    }

});


/* ==========================
   PROJECT HOVER
========================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/* ==========================
   CONTACT FORM
========================== */

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});


/* ==========================
   TYPEWRITER EFFECT
========================== */

const text = "I build modern and responsive websites.";

const typing = document.querySelector(".hero-left p");

let i = 0;

typing.innerHTML = "";

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

window.onload = typeWriter;

