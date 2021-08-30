import React from 'react';


class Item extends React.Component {

	
	render() {

        var status = this.props.status ? <button type="button" className="btn btn-success">Active</button> : 
        <button type="button" className="btn btn-default">Inactive</button>;

		return (
            <tr>
                <td scope="row">{this.props.no}</td>
                <td>{this.props.name}</td>
                <td>
                    { status }
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
		);
	}

}

export default Item;
