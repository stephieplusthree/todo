import React, { Component } from 'react';
import Item from './Item.jsx';

class View extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card w-100 rounded m-0">
                    <div className="card-header">View Todos</div>
                    <ul className="list-group m-0">
                        { this.props.toDoList.map((each) => {
                            return (
                                <Item
                                    key={ each.id }
                                    title={ each.title }
                                    priority={ each.priority }
                                    completed={ each.completed }
                                    id={ each.id }
                                    isBeingEdited={ each.isBeingEdited }

                                    clickEdit={ this.props.clickEdit }
                                    saveEdit={ this.props.saveEdit }
                                    itemCompleted={ this.props.itemCompleted }
                                    deleteItem={ this.props.deleteItem }
                                >{ each.title }</Item>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default View;