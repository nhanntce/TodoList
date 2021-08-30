import React from 'react';

class Sort extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            typeSort: 0,
            types: [
                <span>A <i className="fa fa-long-arrow-left"></i> Z</span>,
                <span>A  <i className="fa fa-long-arrow-left"></i> Z</span>,
                <span>Time <i className="fa fa-long-arrow-up"></i></span>
            ]
        }

        this.panelSort = React.createRef();
        this.onToggle = this.onToggle.bind(this);
        this.onSelected = this.onSelected.bind(this);
    }

    onToggle() {
        var classList = this.panelSort.current.classList;
        if(classList.contains('active-panel')) {
            classList.remove('active-panel');
        } else {
            classList.add('active-panel');
        }
    }

    onSelected(e) {
        this.setState({
            typeSort: parseInt(e.target.getAttribute('typesort'))
        })
    }

	render() {

        var sortEle = this.state.types.map((elm, index) => {
            if(this.state.typeSort === index) {
                return (
                    <div key={ index }
                        className="sort-element"
                        typesort={ index }
                        onClick={ this.onSelected }
                    >{ elm } <i className="fa fa-check"></i></div>
                )
            } else {
                return <div key= { index }
                        className="sort-element"
                        typesort={ index }
                        onClick={ this.onSelected }
                    >{ elm }</div>
            }
        })

		return (
            <div>
                <button 
                    type="button" 
                    className="btn btn-success"
                    onClick= { this.onToggle }
                    >
                    Sort <i className="fa fa-chevron-circle-down"></i>
                </button>
                <div className="panel-sort" ref={ this.panelSort }>
                    { sortEle }
                </div>
            </div>
		);
	}

}

export default Sort;
