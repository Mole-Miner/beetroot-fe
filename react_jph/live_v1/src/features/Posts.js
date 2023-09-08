import React, { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { getPosts } from "../api/posts.api";

const gridColumns = [
    { field: 'id', headerName: "ID", width: 50 },
    { field: 'title', headerName: "Title", width: 300 },
    { field: 'userId', headerName: "UserID", width: 100 },
];

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then((posts) => setPosts(posts));
    }, []);

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid rows={posts} columns={gridColumns} initialState={{
                pagination: {
                    paginationModel: {page: 0, pageSize: 10}
                }
            }} pageSizeOptions={[10, 20]}/>
        </div>
    );
}
