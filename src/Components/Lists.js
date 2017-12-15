import React, { Component } from 'react'
import List from './List'

class Lists extends Component {

	constructor(props){
		super(props);
		this.state= {
			lists:["Hello","World"]
		}
	}

	addToList(val){
		let tempList=this.state.lists;
		tempList.push(val)
		this.setState({
			lists:tempList
		})
	}

	render(){
		return(
			<div>
				{this.state.lists.map(list => <List list={list} id={list} />)}
			</div>
		)
	}
}

export default Lists