import React from "react";

function SearchBox(props) {
  return (
    <div>
        <br/>
      <form className="form-inline justify-content-center">
        <div className="form-group">
          {/* <label htmlFor="search">Search:</label> */}
          <input
            onChange={props.handleInputChange}
            // value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search For an Employee"
            id="search"
          />
        </div>
      </form>
      <br />
    </div>
  );
}

export default SearchBox;
