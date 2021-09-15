import React from "react"

class NameInput extends React.Component {

    constructor(props){
    
        super(props)
        this.state = {
          'name': ""
        }
    }

  handleChange(event){
    const newNameValue = event.target.value

    this.setState({
      'name': newNameValue
    })
  }

  handleSubmit(event){
    /*
      chaque fois qu'on appuie sur valider
      1. on récupère la valeur du state (name)
      2. on appelle la fonction passée par les props avec la valeur du state
    */

    const newName = this.state.name
    
    //on appelle la fonction onSubmit passée par les props
    this.props.onSubmit(newName)

  }

    render() {

      return (
        
        <div>
         
          <label>
            Entrez votre nom
            <input type="text"  value={this.state.name} onChange={event => this.handleChange(event)}/>

            <input type="submit" value="Valider" onClick={this.handleSubmit.bind(this)} />


          </label>
          </div>
          
       );
    }
  }

  export default NameInput