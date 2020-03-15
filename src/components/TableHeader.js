import React from "react";

// on click runs functions to sort/re-display rendered user data
function TableHeader(props) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" onClick={props.restoreOrder} className="index">
              #
            </th>
            <th scope="col">Image</th>
            <th scope="col" onClick={props.sortFirst} className="firstName">
              First Name
            </th>
            {/* onClick={props.sortFirst} */}
            <th scope="col" onClick={props.sortLast} className="lastName">
              Last Name
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>

        {props.children}
        
        </tbody>
      </table>
    </div>
  );
}

export default TableHeader;
