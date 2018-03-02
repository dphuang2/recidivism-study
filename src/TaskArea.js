import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './css/TaskArea.css';
import Model from './Model.js'

let DATA = [
    {
        'id': 1,
        'info': ['gender', 'eye color'],
        'model': 'linear regression',
        'examples': ['example1', 'example2', 'example3']
    },
    {
        'id': 2,
        'info': ['race', 'age', 'past offences', 'location', 'gender'],
        'model': 'neural network',
        'examples': ['example1', 'example2', 'example3']
    },
    {
        'id': 3,
        'info': ['location'],
        'model': 'SVM',
        'examples': ['example1', 'example2', 'example3']
    },
    {
        'id': 4,
        'info': ['age', 'past offences'],
        'model': 'linear regression',
        'examples': ['example1', 'example2', 'example3']
    },
]

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 8,
});

class TaskArea extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: DATA,
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        );

        this.setState({
            items,
        });
    }

    render() {
        var models = []
        this.state.items.map((model, index) => [model, index]).forEach(function(model){
            models.push(<Model key={model[0].id} index={model[1]} model={model[0]} />);
        });

        return (
            <div className="TaskArea">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <h1 className="header">Task</h1>
                    <div className="header-column">Fairness</div>
                    <div className="header-column">Information Used</div>
                    <div className="header-column">Model</div>
                    <div className="header-column">Example Output</div>
                    <div className="models">
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {models}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
            </div>
        );
    } 
}

export default TaskArea;
