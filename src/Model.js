import React, { Component } from 'react';
import './css/Model.css';
import { Draggable } from 'react-beautiful-dnd';

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 8 * 2,
  margin: '0 0 8px 0',

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

class Model extends Component {
    render() {
        console.log(this.props);
        return (
            <Draggable classname="Model" key={this.props.index} draggableId={this.props.model.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div>
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}
                        >
                            {this.props.model.model}
                        </div>
                        {provided.placeholder}
                    </div>
                )}
            </Draggable>
        );
    } 
}

export default Model;
