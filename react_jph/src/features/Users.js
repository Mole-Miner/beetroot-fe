import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { getUsers } from '@js/api/users.api';

const gridColumns = [
    { field: 'id', headerName: "ID", width: 50 },
    { field: 'username', headerName: 'Username', width: 200 }
];

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then((users) => setUsers(users));
    }, []);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid rows={users} columns={gridColumns} initialState={{
                pagination: {
                    paginationModel: {page: 0, pageSize: 5}
                }
            }} pageSizeOptions={[5, 10]}/>
        </div>
    );
}
