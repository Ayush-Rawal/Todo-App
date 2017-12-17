import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Lists from './Components/Lists'
import Input from './Components/Input'
import Page from './Components/Page'

'use strict';

class Root extends Component {

	constructor(){
		super();
		if(JSON.parse(localStorage.getItem('Tasks'))===null){
			localStorage.setItem('Tasks',JSON.stringify([]));
		}

		this.state = {
			tasks: [], //JSON.parse(localStorage.getItem('Tasks')),
			currTasks: [],//JSON.parse(localStorage.getItem('Tasks')).slice(0,6),
			totalTasks: 0, //JSON.parse(localStorage.getItem('Tasks')).length,
			currPage:1,
			tasksPerPage:6,
		};
	};

	changeCurrTasks(currPage){
		let indexBeg = (currPage-1)*this.state.tasksPerPage;
		let indexEnd = (currPage)*this.state.tasksPerPage;
		let tempList = this.state.tasks.slice(indexBeg,indexEnd);
		this.setState({
			currTasks:tempList.concat([]),
			currPage:currPage,
		});
	}

	addTask(val){
		let tempList = this.state.tasks.concat([]);
		tempList.push(val);
		localStorage.setItem('Tasks',JSON.stringify(tempList));
		this.setState({
			tasks:tempList.concat([]),
			totalTasks:tempList.length,
			currTasks:tempList.slice((this.state.currPage-1)*this.state.tasksPerPage,this.state.currPage*this.state.tasksPerPage),
		});
		if(tempList.length%this.state.tasksPerPage===1){
			this.changeCurrTasks(this.state.currPage+1);
		}
	}

	deleteTask(id){
		let tempList = this.state.tasks.concat([]);
		let index = tempList.indexOf(id);
		tempList.splice(index,1);
		localStorage.setItem('Tasks',JSON.stringify(tempList));
		this.setState({
			tasks:tempList.concat([]),
			totalTasks:tempList.length,
			currTasks:tempList.slice((this.state.currPage-1)*this.state.tasksPerPage,this.state.currPage*this.state.tasksPerPage),
		});
		if(tempList.length%this.state.tasksPerPage===0){
			this.changeCurrTasks(this.state.currPage-1);
		}
	}

	// modifyTask(id,modification){
		// let tempList = this.state.tasks.concat([]);
		// let index = tempList.indexOf(id);
		// tempList[index]=modification;
		// localStorage.setItem('Tasks',JSON.stringify(tempList));
		// this.setState({
			// tasks:tempList.concat([]),
			// currTasks:tempList.slice((this.state.currPage-1)*this.state.tasksPerPage,this.state.currPage*this.state.tasksPerPage),
		// });
	// }

	render(){
		return(
			<div>
				<div className="App">
					<Header/>
				</div>
				<Input addTask={this.addTask.bind(this)}/>
				<Lists lists={this.state.currTasks.concat([])} handleDelete={this.deleteTask.bind(this)} /* handleModify={this.modifyTask.bind(this)} *//>
				<Page lists={this.state.tasks.concat([])} totalTasks={this.state.totalTasks} tasksPerPage={this.state.tasksPerPage} changeCurrTasks={this.changeCurrTasks.bind(this)}/>
			</div>	
		);
	}

}

export default Root