import React from 'react';
import Filter from './Filter';
import Search from './Search';
import Sort from './Sort';

class Control extends React.Component {
	render() {
		return (
            <div className="row mt-2">
                <div className="col-6">
                    <Search onSearch= { this.props.onSearch }/>
                </div>
                <div className="col-3">
                    <Filter onFilter= { this.props.onFilter }/>
                </div>
                <div className="col-3">
                    <Sort onSort= { this.props.onSort }/>
                </div>
            </div>
		);
	}

}

export default Control;
