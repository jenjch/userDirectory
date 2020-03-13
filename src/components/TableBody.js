import React from "react";

function TableBody(props) {
  return (
    <tbody>
      <tr>
        {/* {parseInt(props.key)} */}
        <th scope="row">{props.key}</th>
        <td>
          <img src={props.image} height="50" />
        </td>
        <td className="firstName">{props.first}</td>
        <td className="lastName">{props.last}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.age}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
