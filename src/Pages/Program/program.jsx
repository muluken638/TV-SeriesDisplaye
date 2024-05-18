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
  Box,
  TextField,
  Stack,
  Button,
  InputBase,
  NativeSelect,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from '@mui/material/Modal';
import { light } from '@mui/material/styles/createPalette'
import { Filter, ImportExport, Search } from '@mui/icons-material';
import Home from '../../HomePage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height:'70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:2,
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  p: 4,
};




const Program = ({show,onClose}) => {
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


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (

    
    <>
    <Home/>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontWeight: 'bold', fontSize: '30px' }}>
          Add Program
        </Typography>
        <Box sx={{display:'flex',mt:4}}>
          <Box>
            <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
              Vedio URL
              <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }} />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>
             Duration
             <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }} />
           </Typography>
           <Typography id="modal-modal-description" sx={{ mt: 4, display: 'flex', flexDirection: 'column' }}>Channel
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Select..</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
          </Typography>
          </Box>
          <Box>
            <Typography id="modal-modal-description" sx={{ mt: 4,ml:4, display: 'flex', flexDirection: 'column' }}>
              Title
              <TextField id="filled-basic" variant="filled" sx={{ width: '500px' }} />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4,ml:4, display: 'flex', flexDirection: 'column' }}>Catagories
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4,ml:4, display: 'flex', flexDirection: 'column' }}>Type
              <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
          </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 25 }}>
          <Button variant="outlined" sx={{ pr: 6, pl: 6 }} onClick={handleClose}>Cancel</Button>

          <Button variant="contained" href="#outlined-buttons" sx={{ pr: 6, pl: 6 }}>
            Add
          </Button>
        </Stack>
          </Box>
        </Box>
        


      </Box>
    </Modal>
    <Box margin={2} bgcolor={light}>
        <Box
          flexGrow={1}
          p={1}
          display="flex"
          justifyContent="space-between"
          bgcolor="background.paper"
          boxShadow={2}
        >
          <Box
            display="flex"
            alignItems="center"
            flex={1}
            bgcolor="lightgrey"
            borderRadius={2}
          >
            <IconButton>
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              style={{ flexGrow: 1 }}
            />
          </Box>
          <Box display="flex" alignItems="center" ml={2}>
            <IconButton>
              <ImportExport />
            </IconButton>
            <Typography variant="body1">Export</Typography>
          </Box>
          <Box display="flex" alignItems="center" ml={2}>
            <IconButton   >
              <Filter />
            </IconButton>
            <Typography variant="body1">Add Filter</Typography>
          </Box>
          <Box display="flex" alignItems="center" ml={2}>
            <Typography variant="body1" bgcolor="blue" p={1} borderRadius={2}>
          <Button onClick={handleOpen}> Add Program</Button>  
            </Typography>
          </Box>
        </Box>
      </Box>
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
                      color={item.status ? 'success' : 'error'} />
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
      </TableContainer></>
  );
};

export default Program;