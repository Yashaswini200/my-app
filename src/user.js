import React, { useState } from 'react';

const EditButton = ({ onEdit }) => {
 return <button onClick={onEdit}>Edit</button>;
};

const Table = ({ header, data, onEdit }) => {
 const widths = header.map((title, i) => Math.max(...data.map(row => row[i].toString().length), title.length));

 return (
    <table>
      <thead>
        <tr>{header.map((title, i) => <th key={i} style={{ width: `${widths[i]}ch` }}>{title}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((item, j) => (
              <td key={j} style={{ width: `${widths[j]}ch` }}>
                {j === widths.length - 1 ? (
                 <EditButton onEdit={() => onEdit(row)} />
                ) : (
                 item
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
 );
};

const UserList = ({ userList, onEdit }) => {
 const header = ['First Name', 'Last Name', 'Email', 'Phone No', 'Role Name', 'Action'];
 return <Table header={header} data={userList} onEdit={onEdit} />;
};

const App = () => {
 const userList = [
    ['John', 'Doe', 'john.doe@example.com', '1234567890', 'Manager', 'Edit'],
    ['Jane', 'Doe', 'jane.doe@example.com', '1234567891', 'HR', 'Edit'],
 ];

 const handleEdit = (user) => {
    console.log('Editing user:', user);
 };

 return <UserList userList={userList} onEdit={handleEdit} />;
};

export default App;