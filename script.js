const seal=document.getElementById("seal");

const flap=document.getElementById("flap");

const letter=document.getElementById("letter");

const opening=document.getElementById("opening");

const website=document.getElementById("website");

website.style.display="none";

seal.onclick=function(){

    seal.style.transition=".4s";

    seal.style.transform="translateX(-50%) scale(0)";

    seal.style.opacity="0";

    setTimeout(()=>{

        flap.style.transform="rotateX(180deg)";

    },400);

    setTimeout(()=>{

        letter.style.bottom="150px";

    },1200);

    setTimeout(()=>{

        opening.style.opacity="0";

        opening.style.transition="1.5s";

    },3600);

    setTimeout(()=>{

        opening.style.display="none";

        website.style.display="block";

    },5200);

}
