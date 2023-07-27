function toDoAdd(){

let toDoLibrary = []

function toDoList(){
    this.toDoName = toDoName
}












    //create the add Button for to do

const addToDoButton = document.createElement('button')
addToDoButton.classList.add('addToDO')
addToDoButton.innerHTML = 'Add to DO'

const toDoListBody = document.querySelector('.to-do-list-body')
toDoListBody.appendChild(addToDoButton)



let toDoForm = document.querySelector('#addToDoForm')
addToDoButton.addEventListener('click', (e) =>{

    toDoForm.style.display = 'block';
    

})


}




export default toDoAdd;