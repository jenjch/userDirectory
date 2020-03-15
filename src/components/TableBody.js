import React from "react";

// props to populate each table row with the API data
function TableBody(props) {
  return (
      <tr className="table-row">
        {/* {parseInt(props.key)} */}
        <th scope="row" className="align-middle">{props.index}</th>
        <td>
          <img src={props.image} height="50" alt="profile pic" />
        </td>
        <td className="align-middle">{props.first}</td>
        <td className="align-middle">{props.last}</td>
        <td className="align-middle">{props.phone}</td>
        <td className="align-middle">
          <a href={"mailto: " + props.email}>{props.email}</a>
        </td>
        <td className="align-middle">{props.age}</td>
      </tr>
  );
}

export default TableBody;
