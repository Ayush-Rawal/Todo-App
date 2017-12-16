import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class List extends Component {

	constructor(props){
		super(props);
		this.state  = {
			Done:false,
			Modify:false,
			inpVal:"",
		}
	}

	changeinp(evt) {
		this.setState({
			inpVal: evt.target.value
		})
	}

	handleChange = (text) => {
		if(text!==""){
			this.props.handleModify(this.props.id,text);
			this.setState({
				Modify:false,
				inpVal:"",
			});
		}
	}

	handleKeypress = (event) => {
		if(event.key=='Enter'&&event.target.value!==""){
			this.handleChange(event.target.value);
		}
	}

	cancelModification(){
		this.setState({
			Modify:false,
			inpVal:"",
		})
	}

	render(){

		const listclasses = classNames({
			well: this.state.Done,
			'list-group-item-success' : this.state.Done,
			'col-lg-8': true, 
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
			<div>
				{!this.state.Modify && <div className="row App mar7" id={this.props.id} > 
					<div className={listclasses}>
						<h3>{this.props.list}</h3> 
					</div>
					<div className='col-lg-4'>
					<div className="btn-group" role="group" aria-label="Buttons for Done, Modify and Delete">
						<button className='btn btn-lg btn-outline-success' onClick={ () => this.setState({Done:!this.state.Done}) } >
							<span>
							<i className={iclasses} ></i> {this.state.Done?"Mark Undone":"Mark Done"}
							</span>
						</button>
						<button className='btn btn-lg btn-warning' onClick={ () => this.setState({Modify:true}) }>Modify</button>					
						<button className='btn btn-lg btn-danger' onClick={ () => this.props.handleDelete(this.props.id) } >Delete</button>
					</div>
					</div>
				</div> }
				
				{this.state.Modify && <div className="row App mar7" id={this.props.id} >
				<div className='col-lg-8'>
				<input className='form-control' type = 'text' placeholder = 'Enter new task' onChange = { evt => this.changeinp(evt) } value = { this.state.inpval } onKeyPress={this.handleKeypress} />
				</div>
				<div className="btn-group" role="group" aria-label="Buttons Cancelling and approving modifications">
				<button className='btn btn-danger' onClick={ () => this.cancelModification() } >Cancel </button>
				<button className='btn btn-lg btn-warning' type='submit' onClick={ () => this.handleChange(this.state.inpVal) }>Modify</button>					
				</div>
				</div> }
			</div>
		)
	}
}

List.propTypes = {
	list:PropTypes.string
}

export default List