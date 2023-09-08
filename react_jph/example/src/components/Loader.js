import React from 'react';
import { CircularProgress } from '@mui/material';

export default function Loader() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'grid', placeContent: 'center' }}>
      <CircularProgress />
    </div>
  );
}
