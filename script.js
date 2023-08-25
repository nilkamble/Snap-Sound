var tl =gsap.timeline();

tl.from(".nav h3 ,.links a",{
    y:-100,
    duration:0.5,
    delay:0,
    stagger:0.5
    
})
tl.from(".heading",{
    y:-100,
    duration:0.5,
    opacity:0
})
tl.from(".illus",{
    y:100,
    duration:1,
    opacity:0
})