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
      currPage:1,
      tasksPerPage:6
    }
  }

  addTask(val){
		let tempList= this.state.tasks;
    tempList.push(val);
    localStorage.setItem('Tasks',JSON.stringify(tempList));
		this.setState({
      tasks:tempList,
      totalTasks:tempList.length,
      currTasks:tempList.slice((this.state.currPage-1)*this.state.tasksPerPage,this.state.currPage*this.state.tasksPerPage),
    });
    if(tempList.length%this.state.tasksPerPage == 1){
      this.changeCurrTasks(this.state.currPage+1,this.state.tasksPerPage);
    }
	}

	deleteTask(id){
		let templist = this.state.tasks.slice();
    let index = templist.indexOf(id);
    templist.splice(index,1);
    localStorage.setItem('Tasks',JSON.stringify(templist));
    this.setState({
      tasks:templist,
      totalTasks:templist.length,
    })
  }
  
  changeCurrTasks(currPage,itemsPerPage){
    let indexBeg = (currPage-1) * itemsPerPage
    let indexEnd = currPage * itemsPerPage
    let tempList = this.state.tasks.slice(indexBeg,indexEnd)
    this.setState({
      currTasks: tempList,
      currPage:currPage,
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
        <Page lists={this.state.tasks} changeCurrTasks={this.changeCurrTasks.bind(this)} totalTasks={this.state.totalTasks} tasksPerPage={this.state.tasksPerPage} />
      </div>
    );
  }
}

export default App;
