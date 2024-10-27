class Task{
    constructor(year, month, day, type, description){
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
    }

    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === "") {
                console.error(`The field ${key} is required.`);
                return false; // Retorna falso se algum campo estiver vazio ou indefinido
            }
        }
        return true; // Retorna verdadeiro se todos os campos forem válidos
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

    loadTasks() {
        const tasks = [];
        const id = localStorage.getItem('id');

        for (let i = 1; i <= id; i++) {
            try {
                const task = JSON.parse(localStorage.getItem(i));
                if (task !== null) {
                    task.id = i; // Adiciona o ID à tarefa para referência
                    tasks.push(task);
                }
            } catch (e) {
                console.error(`Error loading task with id ${i}:`, e);
            }
        }
        return tasks; // Retorna um array com todas as tarefas
    }

    createTask(task) {
        let id = this.getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id.toString())
    }

    removeTask(id) {
        localStorage.removeItem(id);
    }

    searchTasks(searchTask) {
        const tasks = this.loadTasks();

        return tasks.filter(task => {
            return (searchTask.year ? task.year === searchTask.year : true) &&
                (searchTask.month ? task.month === searchTask.month : true) &&
                (searchTask.day ? task.day === searchTask.day : true) &&
                (searchTask.type ? task.type === searchTask.type : true) &&
                (searchTask.description ? task.description === searchTask.description : true);
        });
    }

    getNextId() {
        let currentId = localStorage.getItem('id')
        return parseInt(currentId) + 1
    }
}

const database = new Database()

// let buttonAddList = document.getElementById('buttonAddTask');

function registerTask() {
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = documen.getElementById('description').value

    const task = new Task(year, month, day, type, description);

    if (task.validateData()){
        database.createTask(task)
        stats.innerHTML = 'Item added';
        stats.style.color = 'green';
    } else {
        alert('Preencha todos os campos.')
    }
}

function resetForm() {
    document.getElementById('year').value = '';
    document.getElementById('month').value = '';
    document.getElementById('day').value = '';
    document.getElementById('type').value = '';
    document.getElementById('description').value = '';
}

function loadTasks(tasks = database.loadTasks()) {
    const listTasks = document.getElementById('listTasks');
    listTasks.innerHTML = ''; // Limpa a lista existente

    tasks.forEach((t) => {
        const row = listTasks.insertRow();

        row.insertCell(0).innerHTML = `${t.day}/${t.month}/${t.year}`;
        
        // Converte o tipo de tarefa de número para texto
        row.insertCell(1).innerHTML = getTaskTypeName(t.type);
        row.insertCell(2).innerHTML = t.description;

        // Cria e adiciona o botão de deletar
        const btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.id = t.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            if (confirm('Are you sure you want to delete this task?')) {
                database.removeTask(t.id);
                loadTasks(); // Atualiza a lista de tarefas
            }
        };

        row.insertCell(3).append(btn);
    });
}

// Função auxiliar para obter o nome do tipo de tarefa
function getTaskTypeName(type) {
    switch (type) {
        case '1':
            return 'Personal';
        case '2':
            return 'Professional';
        case '3':
            return 'Academic';
        case '4':
            return 'Household';
        case '5':
            return 'Leisure';
        case '6':
            return 'Voluntering';
        case '7':
            return 'Personal';
        case '8':
            return 'Planning';
        default:
            return 'Unknown';
    }
}

// Função para buscar tarefas com base nos critérios do formulário
function searchTasks() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const type = document.getElementById('type').value;
    const description = document.getElementById('description').value;

    const task = new Task(year, month, day, type, description);
    const tasks = database.searchTasks(task);

    loadTasks(tasks); // Carrega as tarefas filtradas
}

// Carrega as tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('listTasks'))) {
        loadTasks();
    }
});