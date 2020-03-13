import React from "react";

function TableBody(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.key}</th>
        <td>
          <img src={props.image} height="50" />
        </td>
        <td>{props.first}</td>
        <td>{props.last}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.age}</td>
      </tr>
    </tbody>
  );
}

export default TableBody;
