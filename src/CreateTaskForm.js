import React from "react"

class CreateTaskForm extends React.Component {

    constructor(){
    
    }

    onButtonClick(){
     
    }
    


    render() {

      const data = this.getData()

      return (
        
        <div>
         
          <button
            onClick={e => this.onButtonClick(e)}
          >
              Click moi 
          </button>

          </div>
          
       );
    }
  }

  export default CreateTaskForm