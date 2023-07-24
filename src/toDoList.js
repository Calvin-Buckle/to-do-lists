import projectAddPressed from "./addButton";


function initialLoad(){
  



    const container = document.querySelector('.container')
   


//Content
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
      

          const projectBoard = document.querySelector('.project-board');
          content.appendChild(projectBoard)
            const projectBoardHeader = document.createElement('h1');
            
            projectBoard.appendChild(projectBoardHeader);
            projectBoardHeader.classList.add('project-board-header');
            projectBoardHeader.textContent="Projects";
             
            const projectBoardContent = document.createElement('div')
            projectBoardContent.classList.add('project-board-content')
            projectBoard.appendChild(projectBoardContent)
                
            const addProjectForm = document.getElementById('addProjectForm')
            projectBoardContent.appendChild(addProjectForm)

            
            
                    const buttonHolder = document.createElement('div');
                    buttonHolder.classList.add('button-holder');
                    projectBoardContent.appendChild(buttonHolder);

                const projectAdd = document.createElement('button')
                projectAdd.textContent='+'
                projectAdd.classList.add('project-add')
                buttonHolder.appendChild(projectAdd)

            const toDoList = document.querySelector('.to-do-list');
            const toDoListHeader = document.createElement('h1')
            content.appendChild(toDoList)
            toDoListHeader.classList.add('to-do-list-header')
            toDoListHeader.textContent='To Do Board'
            toDoList.appendChild(toDoListHeader)
                const toDoListHolder = document.createElement('div');
                toDoListHolder.classList.add('to-do-list-holder')
                toDoList.appendChild(toDoListHolder);
      const footer = document.querySelector('.footer');
      container.appendChild(footer)





      projectAddPressed();
}

export default initialLoad;