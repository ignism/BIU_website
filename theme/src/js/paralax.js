import ScrollMagic from 'scrollmagic'

let controller = new ScrollMagic.Controller()

let wrappers = Array.from(document.getElementsByClassName('paralax-wrapper'))

wrappers.forEach((wrapper) => {

  let element = wrapper.querySelector('.paralax')

  if (element.classList.contains('reverse')) {

    let scene = new ScrollMagic.Scene({
      triggerElement: wrapper,
      triggerHook: 1,
      duration: '200%'
    }).addTo(controller).on('progress', (event) => {
      let position = parseInt((1.0 - event.progress) * 10000) / 100 + '%'
      let translation = 'translate(0, 0)'

      if (window.innerWidth > 991) {
        let sin = Math.sin((event.progress - 0.5) * -Math.PI)
        translation = 'translate(0, ' + sin * 100 / 6 + 'vh)'
      }
      element.style.backgroundPositionY = position
      element.style.transform = translation
    })
  } else {
    let scene = new ScrollMagic.Scene({
      triggerElement: wrapper,
      triggerHook: 1,
      duration: '200%'
    }).addTo(controller).on('progress', (event) => {
      let position = parseInt(event.progress * 10000) / 100 + '%'
      let translation = 'translate(0, 0)'

      if (window.innerWidth > 991) {
        let sin = Math.sin((event.progress - 0.5) * Math.PI)
        translation = 'translate(0, ' + sin * 100 / 8 + 'vh)'
      }
      element.style.backgroundPositionY = position
      element.style.transform = translation
    })
  }
})
