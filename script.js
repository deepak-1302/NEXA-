// =========================
// Nexa Script
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Reveal animation
    const reveals = document.querySelectorAll(".card, .hero-left, .hero-right, .vision");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";
            }
        });
    },{threshold:0.15});

    reveals.forEach(item=>{
        item.style.opacity="0";
        item.style.transform="translateY(50px)";
        item.style.transition="0.8s ease";
        observer.observe(item);
    });

    // Smooth Scroll

    document.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",function(e){

            const href=this.getAttribute("href");

            if(href && href.startsWith("#")){

                e.preventDefault();

                document.querySelector(href).scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

});

// Mouse Glow

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="300px";
glow.style.height="300px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle, rgba(139,92,255,.25), transparent 70%)";
glow.style.filter="blur(40px)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

// Floating Logo

const logo=document.querySelector(".hero-right img");

if(logo){

setInterval(()=>{

logo.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-12px)"
},

{
transform:"translateY(0px)"
}

],{

duration:3500,
iterations:1

});

},3500);

}