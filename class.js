// export default class é para mim conseguir importar essa classe e conseguir chamar o metodo no arquivo dos controllers

export default class TaskCard { 
    constructor(tittle, description, responsable, cardComplete){ 
        this.tittle = tittle 
        this.description = description 
        this.responsable = responsable
        this.cardComplete = cardComplete } 
    
    createCard(){
        const cardToDo = document.getElementById('toDo')
        const card = document.createElement('div')
        const input = document.createElement('input')
        const criar = document.createElement('button')
        
        input.type = "text"
        input.placeholder = "Digite sua tarefa..."

        input.classList.add("card")

        criar.textContent = "Criar"

        cardToDo.appendChild(card)
        card.appendChild(input)
        card.appendChild(criar)

    }


    }



