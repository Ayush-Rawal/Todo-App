import React, { Component } from 'react'
import List from './List'

class Lists extends Component {

	render(){
		return(
			<div>
				{this.props.lists.map(list => <List list={list} id={list} />)}
			</div>
		)
	}
}

export default Lists