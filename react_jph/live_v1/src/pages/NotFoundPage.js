import React from 'react';
import '@scss/NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 not found</h1>
        <Button variant="outlined" onClick={() => navigate(-1)}>Go back</Button>
    </div>
  );
}

export {NotFoundPage as Component};

export default NotFoundPage;
