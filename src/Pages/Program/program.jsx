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

const Program = () => {
  const [data, setData] = useState([
    {
      id: 3,
      title: 'Bob Johnson',
      duration: 'duration',
      description: 'description',
      status: true,
    },
    {
      id: 2,
      title: 'Jane Smith',
      duration: 'durationd',
      description: 'description',
      status: false,
    },
    {
      id: 1,
      title: 'John Doe',
      duration: 'durationd',
      description: 'description',
      status: true,
    },
  ]);

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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.duration}</TableCell>
              <TableCell>{item.description}</TableCell>
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
                    color={item.status ? 'success' : 'error'}
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
                  <FaTrash />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Program;