import React from 'react';
import AddAndEditForm from './components/AddAndEditForm';
import Control from './components/Control';
// import shortid from 'shortid';
import TableItem from './components/TableItems';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks: []
		}
		console.log('Constr');
	}

	componentWillMount() {
		console.log('componentWillUnmount');
		var tasks;
		if(localStorage && localStorage.getItem('tasks')) {
			tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks
			})
		}
	}
	render() {
		return (
			<div className="container">
				<h1 className="text-center">To Do List</h1>
				<hr/>
				<div className="row">
					<div className="col-4">
						{/* Add */}
						<AddAndEditForm />
					</div>

					<div className="col-8">
						{/* toggle add button */}
						<button 
							type="button" 
							className="btn btn-success">
								<i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;Add new task
						</button>
						<Control />

						{/**table tasks */}
						<TableItem tasks={ this.state.tasks } />
					</div>
				</div>

			</div>
		);
	}

}

export default App;
