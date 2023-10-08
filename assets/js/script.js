let tasks = [
    { id: 1, description: 'Hacer mercado', completed: false },
    { id: 2, description: 'Estudiar para la prueba', completed: false },
    { id: 3, description: 'Sacar a pasear a Tobby', completed: false }
];

let completedTasks = 0;

const taskNameInput = document.getElementById('task-name');
const btnAdd = document.getElementById('btn-add');
const tasksList = document.getElementById('tasks-list-name');
const totalTasks = document.getElementById('total-tasks');
const completedTasksCount = document.getElementById('completed-tasks');

const nameTask =
    `<div id="task-name-summary">
<p>ID: <span id="task-id">1</span></p>
<p>Tarea: <span id="task-name">Hacer mercado</span></p>
<input type="checkbox">
<button>x</button>
</div>`

const createTaskHTML = (task) => {
    return `<div id="task-name-summary">
    <p>ID: <span id="task-id">${task.id}</span></p>
    <p>Tarea: <span id="task-name">${task.description}</span></p>
    <input type="checkbox" onchange="toggleTaskCompleted(${task.id})" ${task.completed ? 'checked' : ''}>
    <button onclick="deleteTask(${task.id})" style="background: none; border: none;"><i class="fas fa-xmark fa-fw" style="color: red;"></i></button>
    </div>`;
}

const pintarHtml = () => {
    let html = '';
    tasks.forEach(task => {
        html += createTaskHTML(task);
    });
    tasksList.innerHTML = html;
}

const updateTotalTasks = () => {
    totalTasks.textContent = tasks.length;
};

const updateCompletedTasks = () => {
    completedTasksCount.textContent = completedTasks;
}

const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        if (tasks[taskIndex].completed) {
            completedTasks--;
            updateCompletedTasks();
        }
        tasks.splice(taskIndex, 1);
        pintarHtml();
        updateTotalTasks();
    }
}

const toggleTaskCompleted = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        if (tasks[taskIndex].completed) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        updateCompletedTasks();
    }
}

const addTask = () => {
    const nuevaTarea = taskNameInput.value

    const taks = {
        id: randomID(),
        description: nuevaTarea,
        completed: false
    }
    tasks.push(taks);
    pintarHtml();
    taskNameInput.value = '';
    updateTotalTasks();
}

const randomID = () => {
    return Math.floor(Math.random() * 100);
}

pintarHtml();
updateTotalTasks();
updateCompletedTasks();
