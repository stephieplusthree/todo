import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <div className="container-fluid">

          <div className="header">
            <h1 className="tagline">Very Simple Todo App</h1>
          </div>
    
          <hr></hr>

          <div className="row">

            {/* start of left side */}
            <div className="col-4">
              <div className="panel panel-default">   
              <div className="panel-heading panel-title">
                <h5>Add New Todo</h5>
              </div>
              <p>
                <div className="panel-body">
                  <label for="add-todo">I want to...</label>
                  <textarea class="form-control" id="add-todo" rows="3"></textarea>
                </div>
                <div className="panel-body">
                  <label for="select-priority">How much of a priority is this?</label>
                  <select class="form-control" id="select priority">
                    <option>Select a Priority</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </p>                               
              <div className="panel-footer">
                <button className="btn btn-success btn-block" type="button">
                    Add
                </button>
                <br></br>
              </div> 
            </div>
          </div>
            {/* end of left side */}

            {/* start of right side panel */}
            <div className="col-8">
              <div className="panel panel-default">
                <div className="panel-heading panel-title">
                  <h5>View Tasks</h5>
                </div>
                <p>
                  <div className="panel-body">
                    <label for="add-todo">I want to...</label>
                    <textarea class="form-control" id="add-todo" rows="3"></textarea>
                  </div>
                </p>
                <div className="panel-footer">
                  <button className="btn btn-success btn-block" type="button">
                    Add
                  </button>
                  <br></br>
                </div> 
              </div>
            </div>                  
            {/* end of right side panel */}
          </div>
        </div>
        <br/>
        <br/>
    </div>
    );
  }
}

export default App;
