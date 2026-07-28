/*=========================================
GLOBAL
=========================================*/

const opening = document.getElementById("opening");
const envelope = document.querySelector(".envelope");
const seal = document.querySelector(".seal");
const website = document.getElementById("website");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

/*=========================================
INITIAL STATE
=========================================*/

website.style.display = "none";

/*=========================================
OPEN INVITATION
=========================================*/

seal.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "1.2s";

    }, 1200);

    setTimeout(() => {

        opening.style.display = "none";

        website.style.display = "block";

        document.body.style.overflowY = "auto";

        music.play().catch(()=>{});

        window.scrollTo(0,0);

    },2200);

});

/*=========================================
MUSIC BUTTON
=========================================*/

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🎵";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🔇";

    }

});

/*=========================================
COUNTDOWN
=========================================*/

const weddingDate = new Date("August 30, 2026 09:00:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const gap = weddingDate - now;

    if(gap<=0){

        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";

        return;

    }

    const days=Math.floor(gap/(1000*60*60*24));

    const hours=Math.floor((gap%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((gap%(1000*60*60))/(1000*60));

    const seconds=Math.floor((gap%(1000*60))/1000);

    document.getElementById("days").innerHTML=String(days).padStart(2,"0");

    document.getElementById("hours").innerHTML=String(hours).padStart(2,"0");

    document.getElementById("minutes").innerHTML=String(minutes).padStart(2,"0");

    document.getElementById("seconds").innerHTML=String(seconds).padStart(2,"0");

}

countdown();

setInterval(countdown,1000);

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/*=========================================
NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.12)";

}

else{

header.style.boxShadow="none";

}

});
/*=========================================
GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

/*=========================================
SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
"section,.person-card,.parent-box,.timeline-item,.gallery-grid img,.venue-card,.thank-card"
);

const revealObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

},{
threshold:.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition=".9s ease";

revealObserver.observe(el);

});

/*=========================================
FLOATING FLOWERS
=========================================*/

const flowerContainer=document.querySelector(".flower-container");

for(let i=0;i<25;i++){

const flower=document.createElement("div");

flower.innerHTML="🌸";

flower.style.position="absolute";

flower.style.left=Math.random()*100+"vw";

flower.style.top="-50px";

flower.style.fontSize=(18+Math.random()*20)+"px";

flower.style.animation=`flowerFall ${8+Math.random()*10}s linear infinite`;

flower.style.animationDelay=Math.random()*8+"s";

flowerContainer.appendChild(flower);

}

/*=========================================
FLYING BUTTERFLIES
=========================================*/

const butterflyContainer=document.querySelector(".butterfly-container");

for(let i=0;i<12;i++){

const butterfly=document.createElement("div");

butterfly.innerHTML="🦋";

butterfly.style.position="absolute";

butterfly.style.left="-100px";

butterfly.style.top=Math.random()*80+"vh";

butterfly.style.fontSize=(20+Math.random()*18)+"px";

butterfly.style.animation=`butterflyFly ${12+Math.random()*8}s linear infinite`;

butterfly.style.animationDelay=Math.random()*10+"s";

butterflyContainer.appendChild(butterfly);

}

/*=========================================
GOLD PARTICLES
=========================================*/

const particleContainer=document.querySelector(".gold-particles");

for(let i=0;i<120;i++){

const particle=document.createElement("span");

particle.style.position="absolute";

particle.style.width="4px";

particle.style.height="4px";

particle.style.borderRadius="50%";

particle.style.background="#d8b76a";

particle.style.left=Math.random()*100+"%";

particle.style.top=Math.random()*100+"%";

particle.style.opacity=Math.random();

particle.style.animation=`particleGlow ${2+Math.random()*5}s ease-in-out infinite`;

particle.style.animationDelay=Math.random()*5+"s";

particleContainer.appendChild(particle);

}

/*=========================================
FLOATING HEARTS
=========================================*/

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.color="rgba(255,80,120,.8)";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="transform 6s linear, opacity 6s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-110vh)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},6500);

},900);
/* ACTIVE NAVIGATION */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
window.addEventListener("scroll",()=>{

const hero=document.querySelector("#hero");

const y=window.scrollY;

hero.style.backgroundPosition=`center ${y*0.4}px`;

});
document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});
let last=0;

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

const current=window.pageYOffset;

if(current>last){

header.style.top="-120px";

}else{

header.style.top="0";

}

last=current;

});
const text="Together With Their Families";

const target=document.querySelector(".hero-content p");

let i=0;

target.innerHTML="";

function type(){

if(i<text.length){

target.innerHTML+=text.charAt(i);

i++;

setTimeout(type,90);

}

}

type();
function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=`hsl(${Math.random()*360},80%,60%)`;

c.style.animationDuration=(3+Math.random()*2)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}

seal.addEventListener("click",()=>{

setTimeout(confetti,1200);

});
let current=0;

const images=document.querySelectorAll(".gallery-grid img");

setInterval(()=>{

images.forEach(img=>img.style.opacity=".5");

images[current].style.opacity="1";

current++;

if(current>=images.length){

current=0;

}

},2500);
window.onload=()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

};
