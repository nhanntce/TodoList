import React from 'react';

class Filter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterStatus: -1
        }
    }
     
    onHandleChange = (event) => {
        let filterStatus = event.target.value;
        this.setState({
            filterStatus: filterStatus
        })
        this.props.onFilter(parseInt(filterStatus));
    }

	render() {
		return (
                <div className="form-group">
                  <select 
                    className="form-control" 
                    name="" 
                    value={ this.state.filterStatus }
                    onChange= { this.onHandleChange }>
                    <option value= { -1 }>All</option>
                    <option value= { 1 }>Active</option>
                    <option value= { 0 }>Inactive</option>
                  </select>
                </div>
		);
	}

}

export default Filter;
