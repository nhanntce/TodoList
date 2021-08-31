import React from 'react';
import AddAndEditForm from './components/AddAndEditForm';
import Control from './components/Control';
import shortid from 'shortid';
import TableItem from './components/TableItems';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tasks: [],
			isShowForm: false,
			taskEditting: null,
			filterStatus: -1, 
			search: '',
			typeSort: 3
		}
		this.onToggleForm = this.onToggleForm.bind(this);
		this.onCloseForm = this.onCloseForm.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onUpdateStatus = this.onUpdateStatus.bind(this);
		this.onDelete = this.onDelete.bind(this);
		this.onUpdate = this.onUpdate.bind(this);
		this.onFilter = this.onFilter.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.onSort = this.onSort.bind(this);
	}

	componentWillMount() {
		var tasks;

		if(localStorage && localStorage.getItem('tasks')) {
			tasks = JSON.parse(localStorage.getItem('tasks'));
			this.setState({
				tasks: tasks
			})
		}
	}

	onToggleForm() {
		if(this.state.taskEditting !== null) {
			this.setState({
				taskEditting: null,
				isShowForm: true
			})
		} else {
			this.setState({
				isShowForm: !this.state.isShowForm
			});
		}
	}

	onCloseForm() {
		this.setState({
			isShowForm: false
		});
	}

	onShowForm() {
		this.setState({
			isShowForm: true
		});
	}

	onSubmit(data) {
		let { tasks } = this.state;
		data.date = Date.now();
		if(data.id === '') {
			data.id = shortid.generate();
			tasks.push(data);
		} else {
			let index = this.findIndex(data.id);
			if(index !== -1) {
				tasks[index] =  data;
			}
		}
		this.setState({
			tasks: tasks
		})
		localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
	}

	onUpdateStatus(id) {
		let { tasks } = this.state;
		let index = this.findIndex(id);
		if(index !== -1){
			tasks[index].status = !tasks[index].status;
			this.setState({
				tasks: tasks
			})

			localStorage.setItem('tasks', JSON.stringify(tasks));
		}

	}

	onDelete(id) {
		let { tasks } = this.state;
		let index = this.findIndex(id);
		if(index !== -1){
			tasks.splice(index, 1);
			this.setState({
				tasks: tasks
			})

			localStorage.setItem('tasks', JSON.stringify(tasks));
		}
	}

	/**
	 * find index of task in array
	 * @param {*} id 
	 * @returns 
	 */
	findIndex = (id) => {
		let { tasks } = this.state;
		let result = -1;
		tasks.forEach((task, index) => {
			if(task.id === id) {
				result = index;
			}
		})
		return result;
	}

	onUpdate(id) {
		let index = this.findIndex(id);
		let task = this.state.tasks[index];
		this.setState({
			taskEditting: task
		});
		this.onShowForm();
	}

	onFilter(filterStatus) {
		this.setState({
			filterStatus: filterStatus
		})
	}

	onSearch(search) {
		this.setState({
			search: search
		})
	}

	onSort(typeSort) {
		this.setState({
			typeSort: typeSort
		})
	}

	render() {
		var { isShowForm, filterStatus, tasks, search, typeSort } = this.state;
		var addNewForm = isShowForm ? <AddAndEditForm 
			taskEditting= { this.state.taskEditting }
			onSubmit = { this.onSubmit }
			onCloseForm= { this.onCloseForm }/> : '';

			tasks = tasks.filter((task) => {
				if(task.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
					if(filterStatus === -1) {
						return task;
					} else if(filterStatus === 1) {
						return task.status === true;
					} else {
						return task.status !== true;
					}
				}
			})
			tasks = tasks.sort((task1, task2) => {
				if(typeSort === 1) {
					return task1.name.localeCompare(task2.name, 'en', { sensitivity: 'base' }); 
				} else if(typeSort === 2) {
					return task2.name.localeCompare(task1.name, 'en', { sensitivity: 'base' });
				} else if(typeSort === 3) {
					return task2.date - task1.date;
				} else {
					return task1.date - task2.date;
				}
			});

		

		return (
			<div className="container">
				<h1 className="text-center">To Do List</h1>
				<hr/>
				<div className="row">
					<div className={ isShowForm ? 'col-4' : ''}>
						{/* Add */}
						{ addNewForm }
					</div>

					<div className={ isShowForm ? 'col-8' : 'col-12'}>
						{/* toggle add button */}
						<button 
							type="button" 
							className="btn btn-success"
							onClick={ this.onToggleForm }>
								<i className="fa fa-plus-circle"></i>&nbsp;Add new task
						</button>
						<Control 
							onFilter = { this.onFilter }
							onSearch = { this.onSearch }
							onSort = { this.onSort }
						/>

						{/**table tasks */}
						<TableItem 
							tasks={ tasks } 
							onUpdateStatus= { this.onUpdateStatus }
							onDelete= { this.onDelete }
							onUpdate= { this.onUpdate }/>
					</div>
				</div>

			</div>
		);
	}

}

export default App;
