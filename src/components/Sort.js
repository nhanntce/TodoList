import React from 'react';

class Sort extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            typeSort: 1,
        }

		this.onHandleChange = this.onHandleChange.bind(this);
    }

	onHandleChange(event) {
		let value = event.target.value;
		this.props.onSort(parseInt(value));
		this.setState({
			typeSort: value
		})
	}
	render() {
		return (
        <div className="form-group">
			<select 
				className="form-control" 
				name="typeSort"
				value={ this.state.typeSort }
				onChange={ this.onHandleChange }>
				<option value={ 1 }>A -&gt; Z</option>
				<option value={ 2 }>Z -&gt; A</option>
				<option value={ 3 }>Lastest</option>
				<option value={ 4 }>Oldest</option>
			</select>
        </div>
		);
	}

}

export default Sort;
