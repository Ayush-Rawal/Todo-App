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
			elemsPerPage:7,
		};
	  }
	 
	handlePageChange(pageNumber) {
		this.setState({
			activePage: pageNumber
		});
		this.props.changeCurrTasks(this.state.activePage,this.state.elemsPerPage);
	}
	 
	  render() {
		return (
		  <div>
			<Pagination activePage={this.state.activePage} itemsCountPerPage={this.state.elemsPerPage} totalItemsCount={this.state.totalElems} pageRangeDisplayed={this.state.pageRange} onChange={this.handlePageChange.bind(this)}/>
			</div>
		);
	  }
	}

	export default Page