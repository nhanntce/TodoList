import React from "react";

class Search extends React.Component {

    onHandleChange = (event) => {
        this.props.onSearch(event.target.value);
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Search"
                        onChange= { this.onHandleChange } />
                </div>
            </div>
        );
    }
}

export default Search;
