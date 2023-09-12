import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { getComments } from '@js/api/comments.api';

function Comments() {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  const gridColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 300 },
    { field: 'postId', headerName: 'PostID', width: 100 }
  ];

  useEffect(() => {
    getComments().then((comments) => setComments(comments));
  }, []);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={comments}
        columns={gridColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 }
          }
        }}
        pageSizeOptions={[25, 50, 100]}
        onRowClick={(params) => navigate('/comments/' + params.id)}
      />
    </div>
  );
}

export { Comments as Component };

export default Comments;
