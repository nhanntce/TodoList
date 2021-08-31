import React from 'react';

class AddAndEditForm extends React.Component {
	
    constructor(props) {
        super(props);

        this.state = {
            id: '', 
            name: '',
            status: true,
            date: null
        }
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onHandleForm = this.onHandleForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    onCloseForm() {
        this.props.onCloseForm();
    }

    onHandleForm(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status') {
            value = value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.props.onCloseForm();
    }

    onClear() {
        this.setState({
            name: '',
            status: true
        })
    }

    componentWillMount() {
        if(this.props && this.props.taskEditting) {
            console.log('AAAAAAA')
            this.setState({
                id: this.props.taskEditting.id,
                name: this.props.taskEditting.name,
                status: this.props.taskEditting.status,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.taskEditting) {
            this.setState({
                id: nextProps.taskEditting.id,
                name: nextProps.taskEditting.name,
                status: nextProps.taskEditting.status,
            });
        } else {
            this.setState({
                id: '',
                name: '',
                status: true,
            });
        }

    }

    render() {
		return (
			
            <div className="panel-add">
                <i 
                    className="fa fa-times-circle close"
                    onClick= { this.onCloseForm }></i>
                <h2 className="text-center">Add new task</h2>
                <form onSubmit= { this.onSubmit }>
                    <div className="form-group">
                        <label>Name of Task</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value= { this.state.name }
                            onChange= { this.onHandleForm }
                            />
                    </div>
                    <div className="form-group">
                    <label>Status</label>
                    <select 
                        className="form-control" 
                        name="status"
                        value= { this.state.status }
                        onChange= { this.onHandleForm }>
                        <option 
                            value={ true }
                            >Active</option>
                        <option 
                            value={ false }
                            >Inactive</option>
                    </select>
                    </div>
                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="btn btn-primary pl-4 pr-4 mr-2"
                            ><i className="fa fa-plus-circle"></i> Save</button>
                        <button 
                            type="reset" 
                            className="btn btn-danger pl-3 pr-3 ml-2"
                            onClick= { this.onClear }
                            ><i className="fa fa-ban"></i> Cancel</button>
                    </div>
                </form>
            </div>
					
		);
	}

}

export default AddAndEditForm;
