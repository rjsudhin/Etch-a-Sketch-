addEventListener('load', function() {
   // create a container with child div
   createContainer(16)
})

function createContainer(size) {
   let container = document.querySelector('#container')
   console.log(container)
   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   container.style.gridTemplateRows = `repeat(${size}, 1fr)`

   // amount of full container child divs
   let amount = size * size

   for (let i = 0; i < amount; i += 1) {
      let div = document.createElement('div')
      container.insertAdjacentElement('beforeend', div)
      drawing(div)
      
      function drawing(elem) {
         elem.addEventListener('mouseover', function() {
            elem.style.backgroundColor = 'black'
         })
      }

   }



}


