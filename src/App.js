import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList'
import CreateTaskForm from './CreateTaskForm';
import React from 'react';
import NameInput from "./NameInput"


/*
  Quand react aura monté dans l'inteface le composant
  1. envoyer au backend un requête (getasksFromBackend appelée dans componentDidMount)
  2. Mettre le state avec les données de réponses
  3. React va voir que le l'état du composant App a changé et il va mettre à jour l'interface
*/
class App extends React.Component {

  //remplacer taskData par un fetch comment le faire 
  constructor(){

    super()
    this.state = {
      'taskData': [],
      'poulet': ''
    }
  }

  getTasksFromBackend(){
   
    fetch("http://localhost:3030/tasks")
      .then(response => response.json())
      .then(json => {

        //blablaba => this.setState ?!

      })
  }

  componentDidMount(){//fonction appelée dès que le composant a été affichée dans le navigateur

    this.getTasksFromBackend()
  }

  nameChanged(newNameValue){//dans App.js
    this.setState({
      poulet: newNameValue
    })
  }

  render(){
    return (
    <div className="App">
      <header className="App-header">
          
        <NameInput 
          // on va mettre une props dont la valeur est une fonction !!!
          //onSubmit est une fonction ! 
          onSubmit={this.nameChanged.bind(this)}
        />

        <p>
            coucou {this.state.poulet}
        </p>

        {/* NameInput(this.nameChanged)  équivalent */}
        <TaskList
        // on passe une props nommée taskData au composant TaskList 
        // cette props utilise le state de App comme valeur
          taskData={this.state.taskData} 
        
        />
        {/* TaskList(this.state.taskData) */}

      </header>
    </div>);
    }
}

export default App;
