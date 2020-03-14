import React from "react";

// props to populate each table row with the API data
function TableBody(props) {
  return (
    <tbody>
      <tr className="table-row">
        {/* {parseInt(props.key)} */}
        <th scope="row">{props.index}</th>
        <td>
          <img src={props.image} height="50" alt="profile pic" />
        </td>
        <td className="firstName">{props.first}</td>
        <td className="lastName">{props.last}</td>
        <td>{props.phone}</td>
        <td>
          <a href={"mailto: " + props.email}>{props.email}</a>
        </td>
        <td>{props.age}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
