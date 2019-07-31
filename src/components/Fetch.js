import React, { Component } from 'react'
import Display from './Display'
import Form from './Form'


export default class Fetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: [{
                 namn: 'init namn',
                 text: 'init text'

                    }]
        }
    }


    componentDidMount() {
          fetch('http://localhost:4000/')
          .then(response => response.json())
          .then(data => this.setState({ data })
        );
      }


    render() {

        let array = this.state.data.map(obj => <Display apiData={obj} />)
        array = array.reverse()

        return (
            <div>
                    <Form />
                {array}
                {console.log(this.state.data)}
            </div>
        )
    }
}
