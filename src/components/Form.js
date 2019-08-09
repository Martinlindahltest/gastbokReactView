import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logProps = this.logProps.bind(this);


    
        this.state = {
            inputText: 'text',
            inputName: 'namn'

        }
    }


    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.inputName + ' ' + this.state.inputText);
        //event.preventDefault();
        

        fetch('http://localhost:4000/', {
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                namn: this.state.inputName,
                text: this.state.inputText
            })
        }).then(val => console.log('value', val))
        alert('Tack! Ditt inlägg: ' + this.state.inputText + ' Namn: ' + this.state.inputName)
        this.props.fetchAgain()


      }
    
    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
      }

    logProps(){
        //console.log(this.props.fetchAgain)
        alert('Tack! Ditt inlägg: ' + this.state.inputText + ' Namn: ' + this.state.inputName)
        this.props.fetchAgain()
        
                }
        
    render() {

        return (
            <div className="container">
                        {
                      //  inlägg:
                      //  <input type="text" name="inputText" value={this.state.text} onChange={this.handleChange} /><br />
                        }
                        <br/>
                        <div class="input-field col s6 l3">

                            <textarea id="textarea1" name="inputText" class="materialize-textarea" value={this.state.text} onChange={this.handleChange} ></textarea>
                            <label>Inlägg: </label>
                        </div>
                        <br/>
                        <div className="input-field col s6 l3">
                            <input type="text" name="inputName"value={this.state.name} onChange={this.handleChange}/>
                            <label>Namn: </label>
                        </div>
                        <button onClick={this.handleSubmit}>Skicka</button>
                        <br/>
{
                     //   <button onClick={this.props.fetchAgain}>fetchAgain</button>
                     //   <button onClick={this.logProps}>log props</button>
}
            </div>
        )
    }
}