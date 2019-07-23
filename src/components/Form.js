import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
            inputText: 'inittext',
            inputName: 'initname'
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.inputName + ' ' + this.state.inputText);
        event.preventDefault();

        fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                namn: this.state.name,
                text: this.state.text
            })
})
      }
    
    

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        
        });
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>

                    <input type="text" name="inputName"value={this.state.name} onChange={this.handleChange} />

                    <input type="text" name="inputText" value={this.state.text} onChange={this.handleChange} />

                    </label>
                    <input type="submit" value="Submit" />
                </form> 
            </div>
        )
    }
}
