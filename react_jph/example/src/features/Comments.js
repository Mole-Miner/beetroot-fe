import React from 'react';
import DataTable from "@components/DataTable";
import { getComments } from "@api/comments.api";

function Comments() {
  const columnsCells= ['ID', 'Name', 'PostID'];
  const rowsCells = ['id', 'name', 'postId'];

  return <DataTable columnsCells={columnsCells} rowsCells={rowsCells} fetch={getComments}/>
}

export {Comments as Component};
export default Comments;
