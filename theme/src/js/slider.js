import Swiper from 'swiper'

let containers = Array.from(document.getElementsByClassName('swiper-container'))

containers.forEach((container) => {
  let pagination = container.querySelector('.swiper-pagination')
  let hash = 'hash' + Math.floor(getCoords(container).top + Math.random() * 1000000)
  console.log(hash)
  if (pagination) {
    pagination.classList.add(hash)
  }

  new Swiper(container, {
    loop: true,
    threshold: 20,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination.' + hash,
      clickable: true
    }
  })
})

function getCoords(elem) { // crossbrowser version
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}