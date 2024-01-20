let tasks = [];

function renderTasks() {
  const taskContainer = document.getElementById('taskList');
  taskContainer.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    if (task.priority === 'high') {
      taskDiv.classList.add('priority-high');
    }
    taskDiv.innerHTML = `
      <span>${task.name}</span>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskContainer.appendChild(taskDiv);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const prioritySelect = document.getElementById('prioritySelect');
  const taskName = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (taskName !== '') {
    const task = {
      name: taskName,
      priority: priority,
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function editTask(index) {
  const newTaskName = prompt('Enter new task name:');
  if (newTaskName !== null) {
    tasks[index].name = newTaskName.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function filterTasks() {
    const priorityFilter = document.getElementById('priorityFilter').value;
    if (priorityFilter === 'all') {
      renderTasks();
    } else {
      const filteredTasks = tasks.filter(task => task.priority === priorityFilter);
      renderFilteredTasks(filteredTasks);
    }
  }
  
  function renderFilteredTasks(filteredTasks) {
    const taskContainer = document.getElementById('taskList');
    taskContainer.innerHTML = '';
    filteredTasks.forEach((task, index) => {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('task');
      if (task.priority === 'high') {
        taskDiv.classList.add('priority-high');
      }
      taskDiv.innerHTML = `
        <span>${task.name}</span>
        <div>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
      taskContainer.appendChild(taskDiv);
    });
  }
  