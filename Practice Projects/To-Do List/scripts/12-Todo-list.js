// main idea of js
const todoList = JSON.parse(localStorage.getItem ('todoList')) || [{          // save data (1) 
  name: 'make dinner',
  dueDate: '2022-12-22'
}, { 
  name: 'wash dishes',
  dueDate: '2022-12-22',
}]; 


renderTodoList();
// render means to display

function renderTodoList() {
  let todoListHTML = '';

//todoList.forEach(function(todoObject, index) {
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; //same
    const html = `
      <div>${name}</div>  
      <div>${dueDate} </div>
      <button class="delete-todo-btn js-delete-todo-button">Delete</button>
    `; // & make it interactive (3)
    todoListHTML += html;
    localStorage.setItem('todoListHTML', JSON.stringify(todoListHTML));
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        // console.log(index);  closure - index is only connected to this function only
        todoList.splice(index, 1);
        renderTodoList();
        saveToStorage();
      });
    });
};

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,  shorthand property
    // dueDate: dueDate,
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}