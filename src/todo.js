function toDoAdd(){

let toDoLibrary = []

function toDoList(toDoName){
    this.toDoName = toDoName};


createAddToDo();
//create the add Button for to do
function createAddToDo(){

    
const addToDoButton = document.createElement('button');
addToDoButton.classList.add('addToDo');
addToDoButton.innerHTML = 'Add to Do';

const toDoListBody = document.querySelector('.to-do-list-body')
toDoListBody.appendChild(addToDoButton);

let toDoForm = document.querySelector('#addToDoForm')
document.querySelector('.addToDo').addEventListener('click', (e) =>{
   
    formClass();
    
})
}







function formClass(){

    // creates the fieldset in DOM
    const fieldsetElement = document.createElement('fieldset')
    //Link fieldset to original body
    const toDoBody= document.querySelector('.to-do-list-body')
    toDoBody.appendChild(fieldsetElement);
    //Creates input field
    const formInputElement = document.createElement('input')
    formInputElement.type = 'text';
    formInputElement.classList.add('name-to-do')
    //Links input to fieldset
    fieldsetElement.appendChild(formInputElement)
    //Creates submit button
    const formSubmitElement= document.createElement('button')
    formSubmitElement.classList.add('to-Do-Submit')
    formSubmitElement.innerHTML= 'Submit'
    //Links submit button to fieldset
    fieldsetElement.appendChild(formSubmitElement)
     //Creates cancel button
    const formCancelElement = document.createElement('button')
    formCancelElement.classList.add('to-Do-Cancel')
    formCancelElement.innerHTML = 'Cancel'
    //Links cancel button to fieldset
    fieldsetElement.appendChild(formCancelElement)

//Creates the To Do when you click submit on the form
const toDoSubmit = document.querySelector('.to-Do-Submit');
toDoSubmit.addEventListener('click', (e) =>{

    
    addToDoToLibrary();
    e.preventDefault();

})

//Deletes the form when you press cancel
const toDoCancel = document.querySelector('.to-Do-Cancel');
toDoCancel.addEventListener('click', (e) =>{
    fieldsetElement.remove();
})

}


function render(){
    let toDoLibraryEl = document.querySelector('.to-do-list-body');
    toDoLibraryEl.innerHTML = "";
    for (let i = 0; i < toDoLibrary.length; i++){
    let toDo = toDoLibrary[i];
    let toDoEl = document.createElement("div");
    toDoEl.innerHTML = `<p>${toDo.toDoName}<p>`
    toDoLibraryEl.appendChild(toDoEl)
    const deleteToDo = document.createElement('button');
    deleteToDo.innerHTML = 'X';
    deleteToDo.classList.add('deleteToDo')
    toDoEl.appendChild(deleteToDo);

    deleteToDo.addEventListener('click', (e) => {
        toDoEl.remove()
    })
}




};



    function addToDoToLibrary(){
        let toDoName = document.querySelector('.name-to-do').value;
        let newToDoList = new toDoList(toDoName);
        toDoLibrary.push(newToDoList);
        render();
        addProjectForm.style.display = 'none';
        createAddToDo();}
       
       


}


export default toDoAdd;