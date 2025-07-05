import React from "react";

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>25</td>
            <td>New York</td>
            <td>USA</td>
            <td>john.doe@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
