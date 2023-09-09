import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCommentById } from '@js/api/comments.api';
import { CircularProgress } from '@mui/material';

function Comment() {
  const [comment, setComment] = useState(null);
  const { commentId } = useParams();

  useEffect(() => {
    const timeout = setTimeout(() => {
      getCommentById(commentId).then((comment) => setComment(comment));
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', placeContent: 'start center' }}>
      {comment ? (
        <>
          <h2>{comment.name}</h2>
          <h3>{comment.email}</h3>
          <p>{comment.body}</p>
          <b>ID {comment.id}</b>
          <b>PostID {comment.postId}</b>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export { Comment as Component };

export default Comment;
