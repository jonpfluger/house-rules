document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '#logo',
        translateX: [-400, 0],
        easing: 'easeOutExpo',
        duration: 1500,
        delay: 1000,
        opacity: [0, 1]
    })
})

anime({
    targets: 'nav a',
    translateY: [-50, 0],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: (el, i) => {
        return 1000 + 100 * i;
    },
    opacity: [0, 1]
})

anime({
    targets: '.myCustomCard',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });

//   '.myCustomCard'