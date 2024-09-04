function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
loco()
Shery.mouseFollower();
Shery.makeMagnet(".magnet-target");
document.querySelector("#text").addEventListener("mousemove", function (dets) {
    gsap.to(".mousefollower", {
        scale: 20
    })
})
document.querySelector("#text").addEventListener("mouseleave", function (dets) {
    gsap.to(".mousefollower", {
        scale: 1
    })
})

function sound() {
    var sound = document.querySelector("#sound h2")
    var spann = document.querySelector("#sound h2 span")
    var aud = new Audio("./dark-beginning-135858.mp3")
    var click = true
    sound.addEventListener("click", function () {
        if (click == true) {
            aud.play()
            aud.loop = true
            spann.textContent = "off"
            click = false
        }
        else {
            aud.pause()
            spann.textContent = "on"
            click = true
        }
    })
}
sound()

function menu() {
    var menu = document.querySelector("#menu")
    var flag = false
    menu.addEventListener("click", function () {
        console.log("object")
        if (flag == true) {
            gsap.to("#main", {
                backgroundColor: "black"
            })
            gsap.to("#navigation", {
                x: "0%"
            })
            flag = false
        }
        else {
            gsap.to("#main", {
                backgroundColor: "rgba(40, 38, 38, 0.212)"
            })
            gsap.to("#navigation", {
                x: "-40vw"
            })
            flag = true
        }
    })
}
menu()

function pageTwo() {
    var effect = document.querySelectorAll(".effect")
    effect.forEach(function (h) {
        var clutter = ""
        h.textContent.split(" ").forEach(function (word) {
            clutter += ` <span>${word}</span>`
        })
        h.innerHTML = clutter
    })
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 60%",
            end: "top 0%",
            scrub: 1
        }
    })
    tl
        .to("#arrow", {
            rotate: 90
        })
        .to(".effect1 span", {
            color: "white",
            stagger: 0.2
        })
        .to(".effect2 span", {
            color: "white",
            stagger: 0.2
        })
}
pageTwo()




function footer(){
var clutter3 = ""
document.querySelector("#say h1").textContent.split("").forEach(function(letter){
  clutter3 += `<span>${letter}</span>`
})
document.querySelector("#say h1").innerHTML = clutter3

gsap.from("#say h1 span",{
    y:"100%",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#say",
        scroller:"#main",
        start:"top 88%",
        end:"top 80%",
        scrub:1,
    }
})
}
footer()

document.querySelector("#mail").addEventListener("click",function(event){
    window.location.href = "mailto:dikshits207@gmail.com"
})
