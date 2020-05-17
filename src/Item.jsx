import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            priority: this.props.priority,
            isBeingEdited: this.props.isBeingEdited,
        };

        this.onChange = this.onChange.bind(this)
        this.setPriorityColor = this.setPriorityColor.bind(this)
        this.displayEdit = this.displayEdit.bind(this)
        this.displayNormalItem = this.displayNormalItem.bind(this)
        this.completedStrikethrough = this.completedStrikethrough.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    setPriorityColor(priority) {
        if (priority == 1) {
            return "list-group-item-success"
        } else if (priority == 2) {
            return "list-group-item-warning"
        } else if (priority == 3) {
            return "list-group-item-danger"
        }
    }

    displayEdit(isBeingEdited) {
        if (isBeingEdited) {
            return "block";
        } else {
            return "none";
        }
    }

    displayNormalItem(isBeingEdited) {
        if (isBeingEdited) {
            return "none";
        } else {
            return "block";
        }
    }

    completedStrikethrough(completed) {
        if (completed) {
            return "line-through";
        } else {
            "none"
        }
    }

    render() {
        return (
            <div className="container m-0 px-0">
                <div className="mx-0"
                    name="normalEdit"
                    style={{ display: this.displayNormalItem(this.props.isBeingEdited) }}>
                    <li id="alert"
                        name={ this.props.priority }
                        className={ `${this.setPriorityColor(this.props.priority) } clearfix align-middle m-0`}>
                        <input
                            type='checkbox'
                            className='float-left m-2 align-middle'
                            name="done"
                            onChange={() => this.props.itemCompleted(this.props.id)} />
                        <div
                            className='float-left m-2 align-middle'
                            id="display-text"
                            style={{ textDecoration: this.completedStrikethrough(this.props.completed) }}
                        >{ this.props.title }
                        </div>
                        <a className='delete-todo btn float-right text-success m-2 align-middle'
                            onClick={ () => this.props.deleteItem(this.props.id)}
                            name='delete-todo'
                            href='#'
                            style={{ cursor: 'pointer' }}>
                            <i className="fas fa-trash-alt" style={{ color: '#951717' }}></i>
                        </a>
                        <a className='edit-todo btn float-right text-success m-2 align-middle'
                            onClick={ () => this.props.clickEdit(this.props.id)}
                            name='editButton'
                            href='#'>
                            <i className="fas fa-edit" style={{ color: '#42403C' }} ></i>
                        </a>
                    </li>
                </div>
                <div className="m-0"
                    name="editItem"
                    style={{ display: this.displayEdit(this.props.isBeingEdited) }}>
                    <li id="alert m-0"
                        name={ this.props.priority }
                        className={ `${this.setPriorityColor(this.props.priority) } clearfix align-middle`}>
                        <div className="form-group m-4">
                            <label htmlFor="comment">Description:</label>
                            <textarea
                                className="update-todo-text form-control"
                                rows="5" id="comment"
                                placeholder="Describe the stuff you need done..."
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}></textarea>
                        </div>
                        <div className="form-group m-4">
                            <label htmlFor="priority">Priority:</label>
                            <select
                                className="update-todo-priority form-control mb-4"
                                id="priority"
                                name="priority"
                                onChange={ this.onChange }
                                value={ this.state.priority }>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <div className="form-group m-4">
                                <div className="text-right">
                                    <button
                                        className="update-todo btn btn-primary btn-lg"
                                        onClick={() => this.props.saveEdit(this.props.id, this.state.title, this.state.priority)}
                                    >Save</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>
        );};
}

export default Item;