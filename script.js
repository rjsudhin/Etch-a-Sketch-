const message = document.querySelector('#message')
addEventListener('load', function() {
   // create board
   createBoard(16) 
   const btn_popup = document.querySelector('#popup')
   btn_popup.addEventListener('click', function() {
     let size = getSize()
     createBoard(size)
   })

})


function createBoard(size) {
   const board = document.querySelector('#board')
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`

   let amount = size * size

   for (let i = 0; i < amount; i += 1) {
      let div = document.createElement('div')
      div.style.backgroundColor = 'yellow'
      board.appendChild(div)
   }
}

function getSize() {
   let input = prompt('Enter the size')
   if (input == '') {
      message.textContent = 'Provide a number'
   } else if (input < 0 || input > 100) {
      message.textContent = 'Provide a number between 1 and 100'
   } else {
      message.textContent = 'you are ready to play'
   }

   return input
}




