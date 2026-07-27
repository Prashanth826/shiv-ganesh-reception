/* ==========================================================
   ROYAL WEDDING INVITATION
   Shiv Ganesh ❤️ Keerthana
========================================================== */

const opening = document.getElementById("opening");
const website = document.getElementById("website");

const flap = document.querySelector(".flap");
const seal = document.querySelector(".seal");
const card = document.querySelector(".card");

const music = document.getElementById("bgMusic");

let opened = false;

/* ---------------------------------------
   OPEN INVITATION
--------------------------------------- */

seal.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    openEnvelope();

});


function openEnvelope(){

    /* Break Seal */

    seal.style.transition=".5s";

    seal.style.transform="translateX(-50%) scale(.2) rotate(360deg)";

    seal.style.opacity="0";


    /* Open Flap */

    setTimeout(()=>{

        flap.style.transform="rotateX(-180deg)";

    },400);


    /* Card Slides Out */

    setTimeout(()=>{

        card.style.transform=
        "translateX(-50%) translateY(-120px)";

    },1200);


    /* Zoom Card */

    setTimeout(()=>{

        card.style.transform=
        "translateX(-50%) translateY(-180px) scale(1.05)";

    },2200);


    /* Fade Opening */

    setTimeout(()=>{

        opening.style.transition="1.5s";

        opening.style.opacity="0";

    },3800);


    /* Show Website */

    setTimeout(()=>{

        opening.style.display="none";

        website.style.display="block";

        if(music){

            music.play().catch(()=>{});

        }

    },5200);

}


/* ---------------------------------------
   HERO ANIMATION
--------------------------------------- */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/* ---------------------------------------
   SCROLL REVEAL
--------------------------------------- */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});


document.querySelectorAll(".reveal").forEach(item=>{

    observer.observe(item);

});


/* ---------------------------------------
   SMOOTH NAVIGATION
--------------------------------------- */

document.querySelectorAll("a[href^='#']").forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(link.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ---------------------------------------
   COUNTDOWN
--------------------------------------- */

const weddingDate = new Date("August 30, 2026 09:00:00").getTime();

setInterval(()=>{

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const d = Math.floor(distance/(1000*60*60*24));

    const h = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const m = Math.floor((distance%(1000*60*60))/(1000*60));

    const s = Math.floor((distance%(1000*60))/1000);

    if(document.getElementById("days"))
        document.getElementById("days").innerHTML=d;

    if(document.getElementById("hours"))
        document.getElementById("hours").innerHTML=h;

    if(document.getElementById("minutes"))
        document.getElementById("minutes").innerHTML=m;

    if(document.getElementById("seconds"))
        document.getElementById("seconds").innerHTML=s;

},1000);


/* ---------------------------------------
   MUSIC BUTTON
--------------------------------------- */

const musicBtn=document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="🔊";

}

else{

music.pause();

musicBtn.innerHTML="🔈";

}

}

}


/* ---------------------------------------
   FLOWER PETALS
--------------------------------------- */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=8+Math.random()*6+"s";

petal.style.fontSize=16+Math.random()*18+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},15000);

}

setInterval(createPetal,800);
