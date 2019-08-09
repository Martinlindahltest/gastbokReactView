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

        this.fetchAgain = this.fetchAgain.bind(this);

    }


    componentDidMount() {
          fetch('http://52.59.214.158:4000/')
          .then(response => response.json())
          .then(data => this.setState({ data })
        );
      }

    fetchAgain = () => {
        console.log('fetchAgain körs i Fetch')

        fetch('http://52.59.214.158:4000/')
        .then(response => response.json())
        .then(data => this.setState({ data })
      );
    }

    


    render() {

        let array = this.state.data.map(obj => <Display apiData={obj} />)
        array = array.reverse()

        return (
            <div>
                    <Form fetchAgain={this.fetchAgain} />
                {array}
                {console.log(this.state.data)}
            </div>
        )
    }
}
