import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Table: React.FC<Props> = ({ children }) => {
  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Update</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
