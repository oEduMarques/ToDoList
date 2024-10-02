let task = document.getElementById('task')
let list = document.getElementById('list')
let stats = document.getElementById('stats')
let buttonAddList = document.getElementById('buttonAddTask')
let buttonRemoveTask = document.getElementById('buttonRemoveTask')
let buttonMarkCompleted = document.getElementById('buttonMarkCompleted')

function addTask() {
    let newItem = document.createElement('li')
    if (task.value.trim() === "") {   // verifica se o input é valido
        stats.innerHTML = 'Please enter a task'
        stats.style.color = 'red'
    } else {
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'

        let taskText = document.createTextNode(task.value.trim())
        newItem.appendChild(checkbox)
        newItem.appendChild(taskText)

        list.appendChild(newItem)
        stats.innerHTML = 'Item added'
        stats.style.color = 'green'
        task.value = ''
    }
}

function removeTask() {
    let items = list.getElementsByTagName('li');
    for (let item of items) {
        let checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            list.removeChild(item); 
        }
    };
}

function markCompleted() {
    let items = list.getElementsByTagName('li');
    for (let item of items) {
        let checkbox = item.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) { 
            item.classList.add('completed');
            checkbox.checked = false;
        }
    }
}

buttonAddList.addEventListener('click', addTask)
buttonRemoveTask.addEventListener('click', removeTask);
buttonMarkCompleted.addEventListener('click', markCompleted);

task.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addTask();
    }
})