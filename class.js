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
        this.tittle = document.createElement('input')
        const criar = document.createElement('button')
        
        this.tittle.type = "text"
        this.tittle.placeholder = "Digite sua tarefa..."

        card.classList.add("card")

        criar.textContent = "Criar"

        cardToDo.appendChild(card)
        card.appendChild(this.tittle)
        card.appendChild(criar)

        return this.tittle;

    }

    saveCard(){


        ;        

    }


    }



