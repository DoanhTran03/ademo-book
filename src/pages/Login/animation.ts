import { gsap } from "gsap"

const animate = () => {
    const heading = document.querySelectorAll(".login__header h1")
    const p1 = document.querySelectorAll(".login__header .introduction")
    const line = document.querySelectorAll(".login__header .center-line")
    const icon = document.querySelectorAll(".login__header .icon")
    const slogan = document.querySelectorAll(".login__header .slogan")
    const TL = gsap.timeline();
    TL
    .fromTo(heading, {autoAlpha: 0, y: -50, duration: 1}, {autoAlpha: 1})
    .fromTo(p1,{autoAlpha: 0, y: -20}, {autoAlpha: 1}, "-=0.2" )
    .to(line, {height: 200}, "-=0.2")
    .fromTo(icon, {autoAlpha: 0, y: -20}, {autoAlpha: 1})
    .fromTo(slogan, {autoAlpha: 0, y: -20}, {autoAlpha: 1}, "-=0.2")
} 
export default animate;