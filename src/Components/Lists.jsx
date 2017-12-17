import React, { Component } from 'react'
import List from './List.jsx'

class Lists extends Component {

	render(){
		return(
			<div>
				{this.props.lists.map(list => <List list={list.slice()} id={list.slice()} handleDelete={this.props.handleDelete} handleModify={this.props.handleModify} />)}
			</div>
		)
	}
}

export default Lists