let myElement = document.querySelector('#blah')

myElement.addEventListener('transitionend', updateCount, false)

let h1Element = document.querySelector('#count')
let count = 0

function updateCount (e) {
  count++
  h1Element.textContent = count
}
