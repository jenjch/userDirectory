import React from "react";

function TableHeader (props) {
    return(
<div className="table-responsive">
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th onClick={props.sortFirst} scope="col">First Name</th>
      {/* onClick={props.sortFirst} */}
      <th onClick={props.sortLast} scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  
  {props.children}

</table>
</div>
    );
}

export default TableHeader;
