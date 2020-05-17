import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            priority: "",
        };

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="card rounded">
                    <div className="card-header">Add New Todo</div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="title">I want to ... </label>
                            <textarea
                                name="title"
                                className="create-todo-text form-control"
                                rows="5"
                                id="title"
                                placeholder="What do you need to do?"
                                value={ this.state.title }
                                onChange={ this.onChange }
                                ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="priority">How much of a priority is this?</label>
                            <select
                                className="create-todo-priority form-control"
                                id="priority"
                                name="priority"
                                value={ this.state.priority }
                                onChange={ this.onChange }>
                                <option value="1">Select a Priority</option>
                                <option value="2">1</option>
                                <option value="3">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="text-right">
                            <button className="create-todo btn btn-primary btn-block rounded" onClick={() => this.props.addToDoItem(this.state.title, this.state.priority)}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;