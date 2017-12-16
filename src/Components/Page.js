import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
// import Pagination from 'react-js-pagination/src/components'
require("bootstrap/less/bootstrap.less");

class Page extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  activePage: 1,
			totalElems:this.props.totalTasks,
			pageRange:3,
			elemsPerPage:this.props.tasksPerPage || 6,
		};
	}
	 
	handlePageChange(pageNumber) {
		this.setState({
			activePage: pageNumber,
		});
		this.props.changeCurrTasks(pageNumber,this.state.elemsPerPage);
	}
	
	// Instead of using the following method to update state on prop change, one can directly use the prop value instead of the state value
	// See commented part in Pagination tag
	// Leaving this as a reminder here
	// Leaving two tactical dots (.)(.)

	componentWillReceiveProps(nextProps){
		if(nextProps.totalTasks!=this.state.totalElems){
			this.setState({
				totalElems:nextProps.totalTasks
			})
		}
	}

	render() {
		return (
		  <div className='container text-center center-align' >
				<h5>Total Tasks: {this.props.totalTasks} </h5>
				<div className='pagination'>
					<Pagination activePage={this.state.activePage} itemsCountPerPage={this.state.elemsPerPage} totalItemsCount={this.state.totalElems/* props.totalTasks */} pageRangeDisplayed={this.state.pageRange} onChange={this.handlePageChange.bind(this)} innerClass='pagination btn-group justify-content-center' itemClass="page-item btn btn-group-item buttons li" />
				</div>
			</div>
		);
	}
}

	export default Page