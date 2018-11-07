import React, { Component } from 'react';

export default class DetailView extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-start pl-3">
                <h4>Name: <span>{(this.props.name) ? this.props.name : ''}</span></h4>
                <h4>Description:</h4>
                <p className="pl-5">{(this.props.description) ? this.props.description : ''}</p>
                <p>{this.props.comments}</p>
            </div>
        )
    }
}
