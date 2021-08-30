import React from 'react';
import Item from './Item';


class TableItem extends React.Component {

	
	render() {

        var listItem = this.props.tasks.map((task, index) => {
            return <Item key={ index } no={index + 1} name={task.name} status={task.status}/>;
        });

		return (
			<table className="table table-hover mt-2">
                <thead className="bg-success text-white">
                    <tr>
                        <th>No.</th>
                        <th>Task name</th>
                        <th>Status</th>
                        <th>Management</th>
                    </tr>
                </thead>
                <tbody>
                    { listItem }
                </tbody>
            </table>
		);
	}

}

export default TableItem;
