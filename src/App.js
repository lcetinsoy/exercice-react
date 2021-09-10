import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList'
import CreateTaskForm from './CreateTaskForm';


function App() {

  const taskData = [
    {
     'title': "installer node",
     "description": "installer node" 
    },
    {
      'title': "manger du houmous",
      'description': "Eplucher les poids chiche"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        
        <TaskList
        
          taskData={taskData}
        
        />
     
        <CreateTaskForm />

      </header>
    </div>
  );
}

export default App;
