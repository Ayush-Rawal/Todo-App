import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import Lists from './Components/Lists'

class App extends Component {

  constructor(props){
    let emptyarr = []
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('Tasks')) || emptyarr
    }
  }

  addTask(val){
		let tempList= this.state.tasks;
    tempList.push(val);
    localStorage.setItem('Tasks',JSON.stringify(tempList));
		this.setState({
			tasks:tempList
		});
	}

	deleteTask(id){
		let templist = this.state.tasks.slice();
    let index = templist.indexOf(id);
    templist.splice(index,1);
    localStorage.setItem('Tasks',JSON.stringify(templist));
    this.setState({
      tasks:templist
    })
	}

  render() {
    return (
      <div>
        <div className="App">
          <Header/>
        </div>
        <Input addTask={this.addTask.bind(this)}/>
        <Lists lists={this.state.tasks} handleDelete={this.deleteTask.bind(this)} />
      </div>
    );
  }
}

export default App;
