import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div>
                <span className="form-group">
                    <input type="text" className="form-control search" placeholder="Search" />
                </span>{" "}
                &nbsp;
                <button type="button" className="btn btn-success">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    }
}

export default Search;
