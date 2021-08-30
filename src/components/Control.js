import React from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends React.Component {
	render() {
		return (
            <div className="row mt-2">
                <div className="col-6">
                    <Search />
                </div>
                <div className="col-6">
                    <Sort />
                </div>
            </div>
		);
	}

}

export default Control;
