
// let task = document.getElementById('task');
// let list = document.getElementById('list');
// let stats = document.getElementById('stats');
// let buttonAddList = document.getElementById('buttonAddTask');
// let buttonRemoveTask = document.getElementById('buttonRemoveTask');
// let buttonMarkCompleted = document.getElementById('buttonMarkCompleted');
// let daySelect = document.getElementById('day');
// let monthSelect = document.getElementById('month');
// let yearSelect = document.getElementById('year');

// function addTask() {
//     if (task.value.trim() === "") {
//         stats.innerHTML = 'Please enter a task';
//         stats.style.color = 'red';
//         return; // Para a execução se não houver tarefa
//     }

//     // Obtém a data selecionada
//     let selectedDay = daySelect.value;
//     let selectedMonth = monthSelect.selectedIndex; // O índice selecionado
//     let selectedYear = yearSelect.value;

//     // Valida se a data está completamente selecionada
//     if (!selectedDay || selectedMonth === 0 || !selectedYear) {
//         stats.innerHTML = 'Please select a valid date';
//         stats.style.color = 'red';
//         return;
//     }

//     let newItem = document.createElement('li');
//     let checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';

//     let taskText = document.createTextNode(task.value.trim());

//     // O mês é adicionado ao índice + 1 porque selectedIndex começa em 0
//     let selectedDate = `${selectedDay}/${selectedMonth}/${selectedYear}`; // Formato DD/MM/YYYY
//     let dateText = document.createTextNode(` - ${selectedDate}`);

//     newItem.appendChild(checkbox);
//     newItem.appendChild(taskText);
//     newItem.appendChild(dateText);

//     list.appendChild(newItem);
//     stats.innerHTML = 'Item added';
//     stats.style.color = 'green';
//     task.value = '';
//     daySelect.selectedIndex = 0; // Reinicia o select de dias
//     monthSelect.selectedIndex = 0; // Reinicia o select de meses
//     yearSelect.selectedIndex = 0; // Reinicia o select de anos
// }

// function removeTask() {
//     let items = list.getElementsByTagName('li');
//     let removedCount = 0; // Para contar quantos itens foram removidos

//     for (let item of items) {
//         let checkbox = item.querySelector('input[type="checkbox"]');
//         if (checkbox && checkbox.checked) {
//             list.removeChild(item);
//             removedCount++;
//         }
//     }

//     if (removedCount > 0) {
//         stats.innerHTML = `${removedCount} item(s) removed`;
//         stats.style.color = 'red';
//     } else {
//         stats.innerHTML = 'No items selected';
//         stats.style.color = 'orange';
//     }
// }

// function markCompleted() {
//     let items = list.getElementsByTagName('li');
//     let completedCount = 0; // Para contar quantos itens foram marcados como concluídos

//     for (let item of items) {
//         let checkbox = item.querySelector('input[type="checkbox"]');
//         if (checkbox && checkbox.checked) { 
//             item.classList.add('completed');
//             checkbox.checked = false; // Desmarcar o checkbox
//             completedCount++;
//         }
//     }

//     if (completedCount > 0) {
//         stats.innerHTML = `${completedCount} item(s) marked as completed`;
//         stats.style.color = 'green';
//     } else {
//         stats.innerHTML = 'No items selected';
//         stats.style.color = 'orange';
//     }
// }

// // Adiciona eventos aos botões
// buttonAddList.addEventListener('click', addTask);
// buttonRemoveTask.addEventListener('click', removeTask);
// buttonMarkCompleted.addEventListener('click', markCompleted);

// // Popula os campos de data ao carregar a página
// window.onload = populateDateFields;

// // Permite adicionar tarefa ao pressionar Enter
// task.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         event.preventDefault();
//         addTask();
//     }
// });
