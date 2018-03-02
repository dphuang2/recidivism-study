import React, { Component } from 'react';
import './css/Task.css';

class Task extends Component {
    render() {
        return (
            <div className="Task">
                <div className="header">
                    <h1> Task </h1>
                    <div className="info-used">Information Used</div>
                    <div className="model">Model</div>
                    <div className="example-out">Example Output</div>
                </div>
                <p> This is where the actual task will be completed</p>
            </div>
        );
    } 
}

export default Task;
