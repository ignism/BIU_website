let eyes = Array.from(document.getElementsByClassName('eye'))

window.addEventListener('mousemove', event => {
  eyes.forEach(eye => {
    let w = eye.getAttribute('data-width')
    let h = eye.getAttribute('data-height')

    let x = eye.getBoundingClientRect().x + (eye.getBoundingClientRect().width / 2)
    let y = eye.getBoundingClientRect().y + (eye.getBoundingClientRect().height / 2)
    let dx = (event.clientX - x) / (window.innerWidth * 0.5)
    let dy = (event.clientY - y) / (window.innerHeight * 0.5)

    dx = dx > 1 ? 1 : dx < -1 ? -1 : dx
    dy = dy > 1 ? 1 : dy < -1 ? -1 : dy

    let tx = dx * w
    let ty = dy * h
    let translate = 'translate(' + tx + 'px, ' + ty + 'px)'

    eye.style.transform = translate
  })
})