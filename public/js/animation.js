document.addEventListener('DOMContentLoaded', () => {
   anime({
    targets: '#logo',
    translateX: [-400, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 1000,
    opacity: [0,1] 
   }) 
})
