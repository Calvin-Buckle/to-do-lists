function toDoAdd(){

let toDoLibrary = []

function toDoList(toDoName){
    this.toDoName = toDoName
}












    //create the add Button for to do

const addToDoButton = document.createElement('button')
addToDoButton.classList.add('addToDO')
addToDoButton.innerHTML = 'Add to DO';

const toDoListBody = document.querySelector('.to-do-list-body')
toDoListBody.appendChild(addToDoButton)








//die een
function render(){
    let toDoLibraryEl = document.querySelector('.to-do-list-body');
    toDoLibraryEl.innerHTML = "";
    for (let i = 0; i < toDoLibrary.length; i++){
    let toDo = toDoLibrary[i];
    let toDoEl = document.createElement("div");
    toDoEl.innerHTML = `<p>${toDo.toDoName}<p>`
    toDoLibraryEl.appendChild(toDoEl)}}




const toDoSubmit = document.querySelector('#to-Do-Submit')
toDoSubmit.addEventListener('click', (e) =>{


    addToDoToLibrary();
    e.preventDefault();
    function addToDoToLibrary(){
        let toDoName = document.querySelector('#name-to-do').value
        let newToDoList = new toDoList(toDoName)
        toDoLibrary.push(newToDoList)
        render();
        addProjectForm.style.display = 'none';
    
    }
    

})



let toDoForm = document.querySelector('#addToDoForm')
addToDoButton.addEventListener('click', (e) =>{

    toDoForm.style.display = 'block';
    

})


}




export default toDoAdd;