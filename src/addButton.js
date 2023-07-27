
function projectAddPressed(){
  const addButton = document.querySelector('.project-add');
  const addProjectForm = document.querySelector('#addProjectForm');
    
    addButton.addEventListener('click', function callForm (e){
       addProjectForm.style.display = 'block';
      })
 
}


export default projectAddPressed;