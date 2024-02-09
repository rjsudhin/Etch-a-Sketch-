let color = 'black'
addEventListener('load', function() {
   // create container board
   createBoard(16)

   // get the size of block
   const btn_popup = document.querySelector('#popup')
   btn_popup.addEventListener('click', function() {
      let size = getSize()
      createBoard(size)
   })

   // get the black button 
   const btnBlack = document.querySelector('#black')
   btnBlack.addEventListener('click', function() {
      let color = 'black'
      setColor(color)
   })

   // get the random button
   const btnRandom = document.querySelector('#random')
   btnRandom.addEventListener('click', function() {
      let color = 'random'
      setColor(color)
   })

   // clear the board when clicks reset button 
   const btnReset = document.querySelector('#reset')
   btnReset.addEventListener('click', function() {
      const allBlocks = document.querySelectorAll('.block')
      allBlocks.forEach(block => block.style.backgroundColor = '#22552255')
   })

   
})

function createBoard(size) {
   const board = document.querySelector('#board')
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`

   // make blocks 
   const amount = size * size
   for (let i = 0; i < amount; i++) {
      let div = document.createElement('div')
      div.classList.add('block')
      div.addEventListener('mouseover', divColor)
      board.appendChild(div)
   }
}

function getSize() {
   let message = document.querySelector('#message')
   let input = prompt('Provide a number to size')
   if (input == '') {
      message.textContent = 'Provide a size'
   } else if (input < 0 || input > 100) {
      message.textContent = 'Provide a size between 1 and 100'
   } else {
      message.textContent = 'you are ready'
   }

   return input
}


function divColor(e) {
   if (color == 'random') {
      e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
   } else {
      e.target.style.backgroundColor = 'black'

   }
}

function setColor(colorChoice) {
   color = colorChoice
}