// import para mim conseguir usar essa classe que exportei da class.js

import TaskCard from './class.js'

const task = new TaskCard()

const createButton = document.getElementById('createButton')

createButton.addEventListener('click', function(){
    task.createCard
})


