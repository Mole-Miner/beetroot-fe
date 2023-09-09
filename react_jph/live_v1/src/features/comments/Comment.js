import React from 'react';
import { useParams } from 'react-router-dom';

function Comment() {
  const { commentId } = useParams();

  return <p>Comment id {commentId}</p>;
}

export { Comment as Component };

export default Comment;
