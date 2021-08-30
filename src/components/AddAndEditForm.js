import React from 'react';

class AddAndEditForm extends React.Component {
	render() {
		return (
			
            <div className="panel-add">
                <i className="fa fa-times-circle close"></i>
                <h2 className="text-center">Add new task</h2>
                <form>
                    <div className="form-group">
                        <label>Name of Task</label>
                        <input type="text"
                            className="form-control"
                            name="name-of-task"/>
                    </div>
                    <div className="form-group">
                    <label>Status</label>
                    <select className="form-control" name="status">
                        <option value={ true }>Active</option>
                        <option value={ false }>Inactive</option>
                    </select>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-success pl-5 pr-5">Add</button>
                    </div>
                </form>
            </div>
					
		);
	}

}

export default AddAndEditForm;
