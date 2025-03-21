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

  // genrating the html(2)
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name (desturcturing)
     const { name, dueDate } = todoObject; //same
    const html = `
      <div>${name}</div>  
      <div>${dueDate} </div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();
      " class="delete-todo-btn">Delete</button>
    `; // & make it interactive (3)
    todoListHTML += html;
    localStorage.setItem('todoListHTML', JSON.stringify(todoListHTML));
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
};



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