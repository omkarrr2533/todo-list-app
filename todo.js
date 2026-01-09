// Todo List Application
console.log("Todo app loaded");

const newTaskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let tasks = [];

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        newTaskInput.value = '';
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.text;
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener('click', addTask);
