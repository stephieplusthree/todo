import React, { Component } from 'react';
import Add from './Add.jsx';
import View from './View.jsx';


let toDoList = [];
let id = 0;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      toDoList : [],

    };
    
    this.addToDoItem = this.addToDoItem.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.itemCompleted = this.itemCompleted.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  addToDoItem(title, priority) {
    let newToDoItem =  {
      title: title,
      priority: priority,
      completed: false,
      id: id,
      isBeingEdited: false
    }
    this.state.toDoList.push(newToDoItem);
    this.setState({ 
      toDoList: this.state.toDoList 
    });
    id++; 
  };

  clickEdit( id ) {
    let tempItem = this.state.toDoList;
    for (let i = 0; i < tempItem.length; i++) {
      if (tempItem[i].id == id) { 
        tempItem[i].isBeingEdited = true; 
      }
    }
    this.setState({
      toDoList: tempItem
    });
  }
  
  saveEdit( id, title, priority ) {
    let tempSaveItem = this.state.toDoList;
    for (let i = 0; i < tempSaveItem.length; i++) {
      if (tempSaveItem[i].id == id) { 
          tempSaveItem[i].isBeingEdited = false;
          tempSaveItem[i].title = title;
          tempSaveItem[i].priority = priority;
        }
    }
    this.setState({
      toDoList: tempSaveItem
    });
}

itemCompleted( id ) {
  let tempCompleteItem = this.state.toDoList;
    for (let i = 0; i < tempCompleteItem.length; i++) {
      if (tempCompleteItem[i].id == id) { 
        tempCompleteItem[i].completed = !tempCompleteItem[i].completed; 
      }
    }
  this.setState ({
    toDoList: tempCompleteItem
  })
}

deleteItem( id ) {
  let   tempDelete = this.state.toDoList.filter((currentItem) => {
    if (currentItem.id !== id) {
      return currentItem;
    }
  });
  this.setState({ 
    toDoList: tempDelete 
  });
} 

  render() {
    return (
      <div className="container">
        <div id="title">
          <h1 className="text-light mt-3">Very Simple Todo App</h1>
          <p className="text-light font-weight-light">Track all of the things</p>
          <hr className="my-4 text-light"></hr>
        </div>
       <div className="d-flex justify-content-around">
         <div className="p2 mr-4" style={{width: '40%'}}>
           <Add
             addToDoItem={ this.addToDoItem }
             ></Add>
         </div>
         <div className="m-0" style={{width: '60%'}}>
           <View
              toDoList={ this.state.toDoList }
              clickEdit={ this.clickEdit }
              saveEdit={ this.saveEdit }
              itemCompleted={ this.itemCompleted }
              deleteItem={ this.deleteItem }
              ></View>
         </div>
        </div>
      </div>
    );
  }
}

export default App;