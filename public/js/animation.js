let headerAnimationsComplete = sessionStorage.getItem('headerAnimationsComplete')

document.addEventListener('DOMContentLoaded', () => {
    if (!headerAnimationsComplete) {
        sessionStorage.setItem('headerAnimationsComplete', true)
        anime({
            targets: '#logo',
            translateX: [-400, 0],
            easing: 'easeOutExpo',
            duration: 1500,
            delay: 1000,
            opacity: [0, 1]
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
    }

})

// working animation for cards
anime({
    targets: '.animatedCard',
    scale: [
        { value: .1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
    ],
    delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
});
anime({
    targets: '#boardGame',
    translateX: [-270, 0],
    delay: (el, i) => {
        return 500 + 100 * i;
    },
    opacity: [0, 1]
  });
  anime({
    targets: '#cardGame',
    translateX: [300, 0],
    delay: (el, i) => {
        return 500 + 100 * i;
    },
    opacity: [0, 1]
  });
  anime({
    targets: '#videoGame',
    translateY: [-270, 0],
    delay: (el, i) => {
        return 500 + 100 * i;
    },
    opacity: [0, 1]
  });

