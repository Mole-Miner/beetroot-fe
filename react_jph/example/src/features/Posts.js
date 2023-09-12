import React from 'react';
import { getPosts } from '@api/posts.api';
import DataTable from '@components/DataTable';

function Posts() {
  const columnCells = ['ID', 'Title'];
  const rowsCells = ['id', 'title'];

  return <DataTable rowsCells={rowsCells} columnsCells={columnCells} fetch={getPosts} />;
}

export { Posts as Component };
export default Posts;
