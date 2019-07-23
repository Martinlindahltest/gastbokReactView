import React, { Component } from 'react'
import Display from './Display'

export default class Fetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: 'init'
        }
    }

    componentDidMount() {
          fetch('http://localhost:4000/')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
    
    render() {
        return (
            <div>
                <Display apiData={this.state.data[0]} />
                <Display apiData={this.state.data[1]} />
                <Display apiData={this.state.data[2]} />

                {console.log(this.state.data.namn)}
            </div>
        )
    }
}
