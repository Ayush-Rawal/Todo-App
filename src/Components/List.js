import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class List extends Component {

	constructor(props){
		super(props);
		this.state  = {
			Done:false,
		}
	}

	render(){
		
		const listclasses = classNames({
			well: this.state.Done,
			'list-group-item-success' : this.state.Done,
			'col-lg-9': true, 
			pad: true,
			// 'list-group-item':true
		});	

		const iclasses = classNames({
			fa:true,
			green:true,
			'fa-check-circle': !this.state.Done,
			'fa-close':this.state.Done
		});

		return(
			<div className="row App mar7" id={this.props.id} >
				<div className={listclasses}>
					<h3>{this.props.list}</h3> 
				</div>
				{/* to be later formatted with BootStrap */}
				<div className='col-lg-3'>
				<div className="btn-group" role="group" aria-label="Buttons for Done, Delete">
					<button className='btn btn-lg btn-outline-success' onClick={ () => this.setState({Done:!this.state.Done}) } >
						<span>
						<i className={iclasses} ></i> {this.state.Done?"Mark Undone":"Mark Done"}
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