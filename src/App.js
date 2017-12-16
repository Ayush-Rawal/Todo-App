import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Input from './Components/Input'
import Lists from './Components/Lists'
import Page from './Components/Page'

class App extends Component {

  constructor(props){
    let emptyarr = []
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem('Tasks')) || emptyarr,
      currTasks: JSON.parse(localStorage.getItem('Tasks')).slice(0,6) || emptyarr ,
      totalTasks: JSON.parse(localStorage.getItem('Tasks')).length || 0 ,
    }
  }

  addTask(val){
		let tempList= this.state.tasks;
    tempList.push(val);
    localStorage.setItem('Tasks',JSON.stringify(tempList));
		this.setState({
      tasks:tempList,
      totalTasks:tempList.length,
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
  
  changeCurrTasks(currPage,itemsPerPage){
    let indexBeg = (currPage-1) * itemsPerPage
    let indexEnd = currPage * itemsPerPage
    let tempList = this.state.tasks.slice(indexBeg,indexEnd)
    this.setState({
      currTasks: tempList,
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <Header/>
        </div>
        <Input addTask={this.addTask.bind(this)}/>
        <Lists lists={this.state.currTasks} handleDelete={this.deleteTask.bind(this)} />
        <Page lists={this.state.tasks} changeCurrTasks={this.changeCurrTasks.bind(this)} totalTasks={this.state.totalTasks} />
      </div>
    );
  }
}

export default App;
