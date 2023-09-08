import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Loader from '@components/Loader';

export default function DataTable({ columnsCells, rowsCells, fetch }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch().then((data) => setData(data));
  }, []);

  return (
    <>
      {data?.length >= 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {columnsCells?.map((columnCell) => (
                  <TableCell key={columnCell}>{columnCell}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  {rowsCells?.map((rowCell) => (
                    <TableCell key={rowCell}>{item[rowCell]}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loader />
      )}
    </>
  );
}
