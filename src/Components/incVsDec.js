import React from "react";
import { useState } from "react";
const TableData = () => {
  const [currentData, updateData] = useState({
    Name: "Vivek", Age: 22, State:
      "Tamil"
  })
  const afterClick = () => {
    updateData({ Name: "Sonu", Age: 26, State: "Gujarat" })
  }
  return (<><div>
    <table border={2}>
      <th>Name</th>
      <th>Age</th>
      <th>State</th>
      <tr>
        <td>{currentData.Name}</td>
        <td>{currentData.Age}</td>
        <td>{currentData.State}</td>
      </tr>
    </table>
  </div><button onClick={afterClick}>Click Here</button></>)
}
export default TableData;