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
		let tempList = this.state.tasks.slice();
    let index = tempList.indexOf(id);
    tempList.splice(index,1);
    localStorage.setItem('Tasks',JSON.stringify(tempList));
    this.setState({
      tasks:tempList,
      totalTasks:tempList.length,
      currTasks:tempList.slice((this.state.currPage-1)*this.state.tasksPerPage,this.state.currPage*this.state.tasksPerPage),      
    });
    if(tempList.length%this.state.tasksPerPage == 0&&this.state.currPage==(tempList.length/this.state.tasksPerPage+1)){
      this.changeCurrTasks(this.state.currPage-1,this.state.tasksPerPage);
    }
  }

  modifyTask(id,modification){
    let tempList = this.state.tasks.slice();
    let index = tempList.indexOf(id);
    tempList[index] = modification;
    this.setState({
      tasks:tempList.slice(),
      currTasks:tempList.slice((this.state.currPage-1)*this.state.tasksPerPage,this.state.currPage*this.state.tasksPerPage),      
    });
    localStorage.setItem('Tasks',JSON.stringify(tempList));    
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
        <Lists lists={this.state.currTasks} handleDelete={this.deleteTask.bind(this)} handleModify={this.modifyTask.bind(this)} />
        <Page lists={this.state.tasks} changeCurrTasks={this.changeCurrTasks.bind(this)} totalTasks={this.state.totalTasks} tasksPerPage={this.state.tasksPerPage} />
{/*         <footer className='footer'>
        <div id='footer'>
          Made with <i className='fa fa-heart red' ></i> by Ayush Rawal  <a class="github-button" href="https://github.com/Ayush-Rawal" aria-label="Follow @Ayush-Rawal on GitHub">Follow @Ayush-Rawal</a>
        </div>
        </footer> */}
      </div>
    );
  }
}

export default App;
