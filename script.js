/* ==========================================
   SHIV GANESH ❤️ KEERTHANA
   Premium Wedding Invitation
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // ELEMENTS
    // ===============================

    const opening = document.getElementById("opening");
    const website = document.getElementById("website");

    const seal = document.querySelector(".seal");
    const flap = document.querySelector(".flap");
    const letter = document.querySelector(".letter");

    const music = document.getElementById("bgMusic");

    let opened = false;

    // Hide website initially
    website.style.display = "none";

    // ===============================
    // OPEN ENVELOPE
    // ===============================

    if (seal) {

        seal.addEventListener("click", openInvitation);

        // Mobile support
        seal.addEventListener("touchstart", function(e){

            e.preventDefault();

            openInvitation();

        }, {passive:false});

    }

    function openInvitation(){

        if(opened) return;

        opened = true;

        // Break seal
        seal.style.transition = ".6s";

        seal.style.transform = "translateX(-50%) scale(0) rotate(360deg)";

        seal.style.opacity = "0";

        // Open flap
        setTimeout(()=>{

            flap.style.transform="rotateX(-180deg)";

        },500);

        // Slide letter out
        setTimeout(()=>{

            letter.style.bottom="120px";

        },1400);

        // Lift letter
        setTimeout(()=>{

            letter.style.transform="translateX(-50%) scale(1.05)";

        },2200);

        // Fade opening
        setTimeout(()=>{

            opening.style.transition="1.5s";

            opening.style.opacity="0";

        },3800);

        // Show website
        setTimeout(()=>{

            opening.style.display="none";

            website.style.display="block";

            if(music){

                music.play().catch(()=>{});

            }

            window.scrollTo(0,0);

        },5200);

    }

    // ======================================
    // SMOOTH SCROLL
    // ======================================

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // ======================================
    // COUNTDOWN
    // ======================================

    const days=document.getElementById("days");
    const hours=document.getElementById("hours");
    const minutes=document.getElementById("minutes");
    const seconds=document.getElementById("seconds");

    if(days){

        const weddingDate=new Date("August 30, 2026 09:00:00").getTime();

        setInterval(()=>{

            const now=new Date().getTime();

            const distance=weddingDate-now;

            const d=Math.floor(distance/(1000*60*60*24));

            const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

            const m=Math.floor((distance%(1000*60*60))/(1000*60));

            const s=Math.floor((distance%(1000*60))/1000);

            days.innerHTML=d;
            hours.innerHTML=h;
            minutes.innerHTML=m;
            seconds.innerHTML=s;

        },1000);

    }

    // ======================================
    // FALLING FLOWERS
    // ======================================

    function createPetal(){

        const petal=document.createElement("div");

        petal.innerHTML="🌸";

        petal.style.position="fixed";

        petal.style.left=Math.random()*100+"vw";

        petal.style.top="-50px";

        petal.style.fontSize=(18+Math.random()*18)+"px";

        petal.style.pointerEvents="none";

        petal.style.zIndex="999";

        petal.style.transition="transform 10s linear";

        document.body.appendChild(petal);

        requestAnimationFrame(()=>{

            petal.style.transform=
            `translate(${(Math.random()*200)-100}px,110vh) rotate(${720*Math.random()}deg)`;

        });

        setTimeout(()=>{

            petal.remove();

        },10000);

    }

    setInterval(createPetal,900);

    // ======================================
    // BUTTERFLY FOLLOW
    // ======================================

    const butterfly=document.createElement("div");

    butterfly.innerHTML="🦋";

    butterfly.style.position="fixed";

    butterfly.style.left="50px";

    butterfly.style.top="50px";

    butterfly.style.fontSize="32px";

    butterfly.style.pointerEvents="none";

    butterfly.style.zIndex="9999";

    butterfly.style.transition="all .25s ease";

    document.body.appendChild(butterfly);

    document.addEventListener("mousemove",e=>{

        butterfly.style.left=e.clientX+20+"px";

        butterfly.style.top=e.clientY-20+"px";

    });

    document.addEventListener("touchmove",e=>{

        if(e.touches.length){

            butterfly.style.left=e.touches[0].clientX+20+"px";

            butterfly.style.top=e.touches[0].clientY-20+"px";

        }

    });

    // ======================================
    // REVEAL ON SCROLL
    // ======================================

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:.2

    });

    document.querySelectorAll("section").forEach(section=>{

        if(section.id!=="opening"){

            section.style.opacity="0";

            section.style.transform="translateY(50px)";

            section.style.transition="1s";

            observer.observe(section);

        }

    });

});
