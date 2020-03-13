import React from "react";

function SearchBox(props) {
    return (
      <form>
        <div className="form-group">
          {/* <label htmlFor="search">Search:</label> */}
          <input
            onChange={props.handleInputChange}
            // value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee Name"
            id="search"
          />
        </div>
      </form>
    );
  }
  
  export default SearchBox;
  