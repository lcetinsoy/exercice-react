//n'est pas du javascript valide
// ce n'est pas grave : React va le compiler (transformer) en javascript valide 
//avant qu'il soit utilisé par le navigateur

function Task(props){// Les informations passées par les props doivent être considérés en lecture seule

    console.log(props)

    //remarque : on peut faire le javascript qu'on veut avant le return

    return (
        <div class="task">
            <h3 class="task-title">
               {props.title}
            </h3>

            <p>
               {props.description}
            </p>
        </div>
    )
}


function TaskList(props) {

  const listOfJSTasks = props.taskData

  return (
    <div id="tasks">

        {
            //Pour chaque objet JS tâche, je veux créer le composant React correspondant
            listOfJSTasks.map(objJsTask => {
                return (
                  <Task 
                  
                    title={objJsTask.title}
                    description={objJsTask.description}
                  />
                )
            })
        }
    
    </div>
  );
}

export default TaskList;
