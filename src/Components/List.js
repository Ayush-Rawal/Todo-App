import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {

	constructor(props){
		super(props);
		this.state  = {
			Done:false,
		}
	}

	render(){
		return(
			<div className="row App mar7" id={this.props.id} >
				<div className='col-lg-9 pad'>
					<h3>{this.props.list}</h3> 
				</div>
				{/* to be later formatted with BootStrap */}
				<div className='col-lg-3'>
				<div className="btn-group" role="group" aria-label="Buttons for Done, Delete">
					<button className='btn btn-lg btn-outline-success'>
						<span>
						<i className="fa fa-check-circle green" ></i> Mark Done
						</span>
					</button>
					<button className='btn btn-lg btn-danger' >Delete</button>
				</div>
				</div>
			</div>
		)
	}
}

List.propTypes = {
	list:PropTypes.string
}

export default List