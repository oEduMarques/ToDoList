class Task{
    constructor(year, month, day, type, description){
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }

    validateData() {
        for (key in this){
            if (this[key] === undefined || this[key] === this[task].trim()) {
                console.error(`O campo${key} é obrigatório!`)
                // stats.innerHTML = 'Please select a valid date';
                // stats.style.color = 'red';
                // return false;
            }

            return true;
        }
    }
}

class Database{
    constructor(){
        this.initDatabase()
    }

    initDatabase() {
        const id = localStorage.getItem('id')

        if(id === null)
            localStorage.setItem('id', '0')
    }

    loadTasks() {}

    createTask(task) {
        let id = this.getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id.toString())
    }

    removeTask(id) {}

    getNextId() {
        let currentId = localStorage.getItem('id')
        return parseInt(currentId) + 1
    }
}

const database = new Database()

let year = document.getElementById('year').value
let month = document.getElementById('month').value
let day = document.getElementById('day').value
let type = document.getElementById('type').value
let description = documen.getElementById('description').value
let buttonAddList = document.getElementById('buttonAddTask');

function registerTask() {
    let task = new Task(year, month, day, type, description)

    if (task.validateData()){
        database.createTask(task)
        stats.innerHTML = 'Item added';
        stats.style.color = 'green';
    } else {
        alert('Preencha todos os campos.')
    }
}