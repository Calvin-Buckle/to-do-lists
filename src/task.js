
import toDoAdd from "./todo";


function pressSubmit (){

    let myLibrary = [];

function project(name){
    this.name = name;};
   


    function projectAddPressed(){
        const addButton = document.querySelector('.project-add');
        const addProjectForm = document.querySelector('.form-Body');
          
          addButton.addEventListener('click', function callForm (e){
            taskFormClass();
            })
       
      }


      projectAddPressed()
    




  





   
    function taskFormClass(){

        // creates the fieldset in DOM
        const fieldsetElement = document.createElement('fieldset')
        //Link fieldset to original body
        const taskFormBody= document.querySelector('.form-Body')
        taskFormBody.appendChild(fieldsetElement);
        //Creates input field
        const formInputElement = document.createElement('input')
        formInputElement.type = 'text';
        formInputElement.classList.add('name-input')
        //Links input to fieldset
        fieldsetElement.appendChild(formInputElement)
        //Creates submit button
        const formSubmitElement= document.createElement('button')
        formSubmitElement.classList.add('project-Submit')
        formSubmitElement.innerHTML= 'Submit'
        //Links submit button to fieldset
        fieldsetElement.appendChild(formSubmitElement)
         //Creates cancel button
        const formCancelElement = document.createElement('button')
        formCancelElement.classList.add('project-Cancel')
        formCancelElement.innerHTML = 'Cancel'
        //Links cancel button to fieldset
        fieldsetElement.appendChild(formCancelElement)



//Rendering the form and buttons
    function render(){
        let libraryEl = document.querySelector('.list-Item');
         libraryEl.innerHTML = "";
       
        for (let i = 0; i < myLibrary.length; i++){
        let task = myLibrary[i]
        let taskEl = document.createElement("button");
        taskEl.classList.add('task-Button')
        taskEl.innerHTML = `<p>${task.name}<p>`
        libraryEl.appendChild(taskEl)}
    
    
        const taskSelected = document.querySelector('.task-Button');
        taskSelected.addEventListener('click', (e) =>{
        
            
          toDoAdd();
        
        })}
        
        
    
    
// Prevents default and makes form display none
function preventAndNone(e){
    e.preventDefault();
    //Change ME!
    taskFormClass();}; 





   

        
//Pressing submit
const projectSubmitButton = document.querySelector('.project-Submit');
projectSubmitButton.addEventListener('click', (e) =>{
    function addTaskToLibrary(){
        let name = document.querySelector('.name-input').value;
        let newProject = new project(name);
        myLibrary.push(newProject);
        render();
    
        fieldsetElement.remove();
        };  
   
    addTaskToLibrary();
    preventDefault();
   
});




//Task form cancel button
const cancelButton = document.querySelector('.project-Cancel')
cancelButton.addEventListener('click', (e) =>{
    fieldsetElement.remove();
    
    
})


}
}

export default pressSubmit;