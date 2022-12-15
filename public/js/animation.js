let headerAnimationsComplete = sessionStorage.getItem('headerAnimationsComplete')

// const boardBtn = document.getElementById('boardBtn')
// let cardBtn = document.querySelector('.cardBtn')
// let videoBtn = document.querySelector('.videoBtn')

// function aniCards() {
//     anime({
//         targets: '.animatedCard',
//         translateX: [-400, 0],
//         easing: 'easeOutExpo',
//         duration: 1500,
//         delay: 1000,
//         opacity: [0, 1]
//     })
// }



document.addEventListener('DOMContentLoaded', () => {
    if(!headerAnimationsComplete){
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

// document.getElementById('#boardBtn').addEventListener('click', () => {
//     aniCards()
// })

anime({
    targets: '.animatedCard',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });


// moves right to left
// anime({
//     targets: '.animatedCard',
//     translateX: 270,
//     direction: 'alternate',
//     easing: 'easeInOutSine',
//     delay: function(el, i, l) {
//       return i * 100;
//     },
//     endDelay: function(el, i, l) {
//       return (l - i) * 100;
//     }
//   });

// good for card shuffle

// anime({
//     targets: '.staggering-axis-grid-demo .el',
//     translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
//     translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
//     rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
//     delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
//     easing: 'easeInOutQuad'
//   });