import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Switch,
  Typography,
} from '@mui/material';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ChanalPage = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', status: true },
    { id: 2, name: 'Jane Smith', status: false },
    { id: 3, name: 'Bob Johnson', status: true },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const toggleStatus = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleEdit = (id) => {
    console.log(`Editing item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting item with ID: ${id}`);
  };



  return (
  <div>


    <Content/>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Switch
                    checked={item.status}
                    onChange={() => toggleStatus(item.id)}
                    color={item.status ? 'success' : 'error'}
                  />
                  <Typography
                    variant="body2"
                    ml={1}
                    color={item.status ? 'green' : 'red' }
                  >
                    {item.status ? 'Active' : 'Inactive'}
                  </Typography>
                </div>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(item.id)}>
                  <FaEdit />
                </IconButton>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <FaTrash  color='red'/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
  
}

export default ChanalPage;