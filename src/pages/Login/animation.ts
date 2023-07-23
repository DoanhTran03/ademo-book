import { gsap } from "gsap"

const animate = () => {
    const TL = gsap.timeline({});
    const heading = document.querySelectorAll(".login__header h1")
    const p1 = document.querySelectorAll(".login__header .introduction")
    const line = document.querySelectorAll(".login__header .center-line")
    const icon = document.querySelectorAll(".login__header .icon")
    const slogan = document.querySelectorAll(".login__header .slogan")
    TL
    .from(heading, {autoAlpha: 0, y: -50, duration: 1})
    .from(p1,{autoAlpha: 0, y: -20}, "-=0.2")
    .to(line, {height: 200}, "-=0.2")
    .from(icon, {autoAlpha: 0, y: -20})
    .from (slogan, {autoAlpha: 0, y: -20}, "-=0.2")
} 
export default animate;