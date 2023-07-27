

function pressSubmit (){



    
    const addProjectForm = document.querySelector('#addProjectForm')
let myLibrary = [];

function project(name){
    this.name = name;};

    function render(){
        let libraryEl = document.querySelector('.list-Item');
         libraryEl.innerHTML = "";
        for (let i = 0; i < myLibrary.length; i++){
        let task = myLibrary[i]
        let taskEl = document.createElement("div");
        taskEl.innerHTML = `<p>${task.name}<p>`
        libraryEl.appendChild(taskEl)}};


        
//Pressing submit
const submitButton = document.querySelector('#project-Submit');
submitButton.addEventListener('click', (e) => {
    addTaskToLibrary();
    preventAndNone(e);
  
    function addTaskToLibrary(){
    let name = document.querySelector('#name-input').value;
    let newProject = new project(name);
    myLibrary.push(newProject);
    render();
    addProjectForm.style.display = 'none'
    };  
});


// Prevents default and makes form display none
function preventAndNone(e){
    e.preventDefault();
    addProjectForm.style.display = 'none'
    
    }


const cancelButton = document.querySelector('#projectCancel')
cancelButton.addEventListener('click', (e) =>{
    preventAndNone(e);
    
})



}



export default pressSubmit; 