import React from 'react';


class Item extends React.Component {

	
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.id);
    }

	render() {
        var { no, name} = this.props;
        var status = this.props.status ? 
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={ this.onUpdateStatus }
                        >Active</button> : 
                    <button 
                        type="button" 
                        className="btn btn-secondary"
                        onClick={ this.onUpdateStatus }
                        >Inactive</button>;

		return (
            <tr>
                <td scope="row">{no}</td>
                <td>{name}</td>
                <td>
                    { status }
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick= { this.onUpdate }
                        ><i className="fa fa-pencil"></i> Edit</button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={ this.onDelete }
                        ><i className="fa fa-trash"></i> Delete</button>
                </td>
            </tr>
		);
	}

}

export default Item;
