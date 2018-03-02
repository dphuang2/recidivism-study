import React, { Component } from 'react';
import './css/TaskDescription.css';

class TaskDescription extends Component {
    render() {
        return (
            <div className="TaskDescription">
                <p> Here is the task content. This content could be written to a yaml file and then displayed here as a generated component, allowing us to easily change what the task says without going into the HTML.</p>
                <p>Here is another paragraph where we can add more content.</p>
            </div>
        );
    } 
}

export default TaskDescription;
