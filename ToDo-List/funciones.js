const sumbitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todolist = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li');

let listLength = list.Length;

const generateTemplate = (todo) => {

    const html = 
    `<li>
        <input type="checkbox" id="todo_${listLength}">
        <label for="todo_${listLength}>
        <span class="check"></span>
        ${todo}
        </label>
        <i class="far fa-trash-alt delete"></i>
    </li>`
    todolist.innerHTML += html;
};

function addTodos(e){
    e.preventDefault();
    const todo = submitForm.add.value.trim();
    if(todo.Length){
        listLength = listLength + 1;
        generateTemplate(todo);
        submitForm.reset();
    }
}

submitForm.addEventListener('submit',addTodos);
addButton.addEventListener('click',addTodos);

function deleteTodos(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
}

todolist.addEventListener('click',deleteTodos);