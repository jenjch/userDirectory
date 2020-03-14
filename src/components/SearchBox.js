import React from "react";

function SearchBox(props) {
  return (
    <div>
      <br />
      <form className="form-inline justify-content-center">
        <div className="form-group">
          <input
            // runs function and dynamically renders page with text input
            onChange={props.handleInputChange}
            // value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="search for employees..."
            id="search"
          />
        </div>
      </form>
      <br />
    </div>
  );
}

export default SearchBox;
