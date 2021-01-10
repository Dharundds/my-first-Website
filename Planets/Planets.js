//Parallax
window.alert("Kindly move cursor left or right to experience my project :)");
let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene); 

//swiper

let keys = [
    "Mercury",
    "Venus",
    "Earth"
];

let slider = new Swiper(".swiper-container",{
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination: {
        el:".planet-links",
        clickable: true,
        renderBullet: function(index, className) {
            return '<div class= "' + className +'">'+keys[index]+"</div>";
        }
    }
});

slider.on("slideChange",function () {
    console.log("SLIDE CHANGED");
    gsap.to(".slide-text span",0.2,{
        x: "-100px"
    });
    gsap.to(".slide-number span",0.2,{
        x: "-100px"
    });
    gsap.to(".slide-detail span",0.5,{
        x: "-1000px"
    });
    gsap.to(".slide-detail-facts div",0.5,{
        x: "-1000px"
    });
    gsap.to(".swiper-slide-active ",0.5,{
        scale:0.85
    });
    gsap.to(".swiper-slide .slide-img ",1,{
        rotation:20
    });

});

slider.on("slideChangeTransitionEnd",function () {
    gasp.to(".swiper-slide .slide-img",1,{
        rotation:10
    })
    gsap.to(".slide-text span",0.2,{
        x:0,
        delay:0.1
    });
    gsap.to(".slide-text span",0,{
        x: "100px"
    });
    gsap.to(".slide-number span",0.2,{
        x:0,
        
    });
    gsap.to(".slide-number span",0,{
        x: "100px"
    });
    gsap.to(".slide-detail span",0.2,{
        x:0
    });
    gsap.to(".slide-detail-facts div",0.5,{
        x: 0
    });
    gsap.to(".swiper-slide-active ",0.5,{
        scale:1,
        ease:Power4.easeOut
    });
    

});