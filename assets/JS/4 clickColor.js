const divColor1 = document.querySelector('#div1')
const divColor2 = document.querySelector('#div2')
const divColor3 = document.querySelector('#div3')
const divColor4 = document.querySelector('#div4')

const createColor = document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    color = 'purple' 
  } else if (event.key === 's') {
    color = 'blue'
  } else if (event.key === 'd') {
    color = 'red'  
  }
  })

function pintar(Element) {
  Element.style.backgroundColor = color;
}

divColor1.addEventListener( 'click', function() {
    divColor1.style.backgroundColor = color;
})

divColor2.addEventListener( 'click', function() {
  divColor2.style.backgroundColor = color;
})

divColor3.addEventListener( 'click', function() {
  divColor3.style.backgroundColor = color;
})

divColor4.addEventListener( 'click', function() {
  divColor4.style.backgroundColor = color;
})