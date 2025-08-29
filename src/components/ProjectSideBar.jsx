 export default function ProjectSideBar() {  

     function addProjectHandler() {
        console.log('Add Project button clicked'); 
     }

  return (
    <aside>
      <h2>Your Projects</h2>
     <div>
        <button onClick={addProjectHandler}>Add Project</button>
     </div>
    </aside>
  )};