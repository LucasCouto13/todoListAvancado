// Seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn= document.querySelector('#cancel-edit-btn');

let oldInputValue;

const tasks = JSON.parse(localStorage.getItem('tasksList')) || [];

//Funções

const saveTodo = (text) =>{

    //Criar a div central da tarefa
    const todo = document.createElement("div");
    todo.classList.add("todo");

    //Criar a h3 da tarefa(como é um texto, temos que passar o innertext)
    // e passa ela como child(filho) da div "todo"
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);
    
    //Criar o button de check da tarefa, adicionado uma classe "finish-todo"
    //e passando ele como filho da div "todo"
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML ='<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    //Criar o button de edit da tarefa, adicionado uma classe "edit-todo"
    //e passando ele como filho da div "todo"
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML ='<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    //Criar o button de remove da tarefa, adicionado uma classe "remove-todo"
    //e passando ele como filho da div "todo"
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML ='<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);
    
    //Colocar a div "todo" na div central das tarefas
    todoList.appendChild(todo);

    //Limpar a barra de digitar quando tiver um submit
    todoInput.value = "";
    todoInput.focus();
}

const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}


const uptadeTodo = (editInputV) =>{
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) =>{
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = editInputV;
        }
    })
}

const saveStorage = () => {
    localStorage.setItem('tasksList', JSON.stringify(tasks));
}


// Eventos
todoForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    const inputValue = todoInput.value //pega o valor

    if(inputValue){
        //Salvar to do
        saveTodo(inputValue)
        tasks.push(inputValue);
        saveStorage();
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target; //Pega o click

    const parentEl = targetEl.closest("div"); //Procura a "div" mais aproximada
    //e associa a ela

    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")){
        parentEl.remove();
        saveStorage();
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    toggleForms();
})

editForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        uptadeTodo(editInputValue); //Função para editar e atualizar o todo
    }


    toggleForms(); //Fecha as opções
})
