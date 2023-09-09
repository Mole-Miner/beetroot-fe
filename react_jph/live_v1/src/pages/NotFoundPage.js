import React from 'react';
import '@scss/NotFoundPage.scss';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1>404 not found</h1>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}
