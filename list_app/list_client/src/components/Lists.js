
import React, { Component } from 'react';

class Lists extends Component {

    state = {
        lists: []
    }

    componentDidMount() {
        this.getLists()
    }

    getLists = ()  => {
        fetch('http://localhost:3000/lists')
        .then(response => response.json())
        .then(json => this.setState({lists: json}))
        .catch(error => console.error(error))
    }

    render () {
        console.log(this.state.lists);
        return (
            <div>
            {this.state.lists.map( list => {
                return (
                    <div key={list.id} className="list-lists">
                        <h2>{ list.name }</h2>
                        <h3>Category: { list.category }</h3>
                    </div>
                )
            })}
            </div>
        )
    }
}

export default Lists;