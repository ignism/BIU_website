let burger = document.querySelector('.burger')

if (burger) {
  burger.addEventListener('click', (event) => {
    event.preventDefault()

    if (burger.classList.contains('active')) {
      closeMenu()
    } else {
      openMenu()
    }
  })
}

let mobileContactButton = document.querySelector('.mobile-contact-button')

if (mobileContactButton) {
  mobileContactButton.addEventListener('click', (event) => {
    event.preventDefault()

    closeMenu()
  })
}

function openMenu () {
  let nav = document.querySelector('.nav')
  let burger = document.querySelector('.burger')
  let mobileMenu = document.querySelector('.mobile-menu')

  nav.classList.add('active')
  burger.classList.add('active')
  mobileMenu.classList.add('active')
}

function closeMenu () {
  let nav = document.querySelector('.nav')
  let burger = document.querySelector('.burger')
  let mobileMenu = document.querySelector('.mobile-menu')

  nav.classList.remove('active')
  burger.classList.remove('active')
  mobileMenu.classList.remove('active')
}

let logoWrapper = document.querySelector('.logo-wrapper')
let nav = document.querySelector('.nav')
let scrollLength = 0
let prevScrollY = 0
let scrollThreshhold = 200
let isGoingDown = false

if (nav) {
  window.addEventListener('mousemove', (event) => {
    if (event.clientY < 100) {
      nav.classList.remove('hide')
    }
  })

  window.addEventListener('scroll', (event) => {
    if (window.scrollY - prevScrollY < 0) {
      // up
      isGoingDown = false
      nav.classList.remove('hide')

      if (window.scrollY < 20) {
          
          nav.classList.add('beam-up')
          if (window.scrollY < 10) {
            logoWrapper.classList.add('beam-up')
          }
      }
    } else {
      // down
      if (window.scrollY > 5) {
        logoWrapper.classList.remove('beam-up')
      }
      if (window.scrollY > 10) {
        nav.classList.remove('beam-up')
      }
      if (isGoingDown) {
        if (scrollLength < scrollThreshhold) {
          scrollLength += window.scrollY - prevScrollY
        } else {
          if (window.scrollY > 500) {
            nav.classList.add('hide')
          }
        }
      } else {
        isGoingDown = true
        scrollLength = 0
      }
    }

    prevScrollY = window.scrollY
  })
}
