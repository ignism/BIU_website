import ScrollMagic from 'scrollmagic'

let controller = new ScrollMagic.Controller()

let wrappers = Array.from(document.getElementsByClassName('highlight-wrapper'))

function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

console.log('orientation: ' + isMobileDevice())

wrappers.forEach((wrapper) => {
  let content = wrapper.innerHTML
  let color = wrapper.getAttribute('data-color')
  let background = wrapper.getAttribute('data-background')
  let lines = content.split('<br>')

  wrapper.innerHTML = ''
  let delay = 200
  for (let i = 0; i < lines.length; i++) {
    let span = document.createElement('span')
    span.classList.add('relative', 'highlight', 'font-bold', 'text-' + color)
    span.style.animationDelay = i * delay + 'ms'
    span.innerHTML = lines[i]

    let xmlns = 'http://www.w3.org/2000/svg'

    let svg = document.createElementNS(xmlns, 'svg')
    svg.style.position = 'absolute'
    svg.style.left = 0
    if (isMobileDevice()) {
      svg.style.top = '0.125em'
    } else {
      svg.style.top = '0.075em'
    }
    svg.style.width = '100%'
    svg.style.height = '1em'
    svg.style.zIndex = '-1'
    svg.style.overflow = 'visible'
    svg.classList.add('text-' + background, 'fill-current')

    let rect = document.createElementNS(xmlns, 'rect')
    rect.setAttributeNS(null, 'x', '0')
    rect.setAttributeNS(null, 'y', '0')
    rect.setAttributeNS(null, 'width', '100%')
    rect.setAttributeNS(null, 'height', '1em')

    svg.appendChild(rect)
    span.appendChild(svg)


    wrapper.appendChild(span)
    if (i < lines.length - 1) {
      wrapper.appendChild(document.createElement('br'))
    }
  }

  let scene = new ScrollMagic.Scene({
    triggerElement: wrapper,
    triggerHook: 0.85,
    duration: '100%'
  }).addTo(controller).on('enter', (event) => {
    wrapper.classList.add('active')
  })
})