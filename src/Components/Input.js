import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = { 
			inpval: ""
		}
    }

    changeinp(evt) {
        this.setState({
            inpval: evt.target.value
        })
    }

	handlekeypress = (event) => {
		if(event.key=='Enter'){
			//Function to submit list
			this.props.addTask(event.target.value);
			this.setState({
				inpval: ""
			})
		}
	}

	handleClick = (event) => {
		console.log(event)
		this.props.addTask(this.state.inpval);
		this.setState({
			inpval:""
		});
	}

    render() {
        return ( 
			<div className='row mar10'>
				<div className='col-lg-12'>
					<div className='input-group'>
						<input className='form-control' type = 'text' placeholder = 'Enter task' onChange = { evt => this.changeinp(evt) } value = { this.state.inpval } onKeyPress={this.handlekeypress} />
						<span className='input-group-btn'>
							<button className='btn btn-primary' type='submit' onClick={this.handleClick} >Submit</button>
						</span>
            		</div>
				</div>
			</div>
        );
    }
}

export default Input