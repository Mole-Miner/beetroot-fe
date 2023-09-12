import React from 'react';
import { getUsers } from '@api/users.api';
import DataTable from '@components/DataTable';

function Users() {
  const columnsCells = ['ID', 'Name', 'Username'];
  const rowsCells = ['id', 'name', 'username'];

  return <DataTable rowsCells={rowsCells} columnsCells={columnsCells} fetch={getUsers} />;
}

export { Users as Component };
export default Users;
