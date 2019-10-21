import zenscroll from 'zenscroll'

let zenItems = Array.from(document.getElementsByClassName('zen-item'))

zenItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();

    let target = item.getAttribute('data-target')
    let element = document.getElementById(target)
    
    zenscroll.to(element)
  })
})