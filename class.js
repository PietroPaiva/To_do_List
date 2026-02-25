class TaskCard { 
    constructor(tittle, description, responsable, cardComplete){ 
        this.tittle = tittle 
        this.description = description 
        this.responsable = responsable
        this.cardComplete = false } 
    
    changeStatus(){
        return this.cardComplete = !this.cardComplete
    }
    }

const t1 = new TaskCard("Titulo", "...", "Me")
console.log(t1.changeStatus())

