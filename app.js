const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const todos = document.querySelector('.todos');

const generateTemplate = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between">
    <span>${todo}</span>  
    <i class="icon fa fa-trash delete " aria-hidden="true"></i>
</li>`
    todos.innerHTML +=html;
};

//add element
addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.t.value.trim();
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete element
todos.addEventListener('click',e => {
    if( e.target.tagName == 'I'){
        e.target.parentNode.remove();
    }
});

const filterTodos = (term) => {
Array.from(todos.children);
    c.filter(todo => !todo.textContent.includes(term))
    c.forEach(todo => todo.classList.add('filtered'));

    Array.from(todos.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};
//search todos
search.addEventListener('keyup',e => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});