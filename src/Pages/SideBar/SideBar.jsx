import React from 'react';
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { DashboardOutlined, YoutubeSearchedForSharp, Person2TwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function Drawer() {
  
  

  return (
    <Box sx={{ width: 240, bgcolor: 'background.paper' }}>
      {/* Company Logo and Name */}
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mt: 2 ,ml:5}}>
        <img src="company-logo.png" alt="Company Logo" width={60} height={60} />
        <Typography variant="h6" fontWeight="bold" sx={{ mt: 1 }}>
          Company Name
        </Typography>
      </Box>
      <Divider sx={{ mt: 2 }} />

     
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { bgcolor: 'primary.light' } }} Link to="/">
            <ListItemIcon>
              <DashboardOutlined />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <Link to="/Channel">
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { bgcolor: 'primary.light' } }} >
            <ListItemIcon>
              <YoutubeSearchedForSharp/>
            </ListItemIcon>
            <ListItemText primary="Channel" />
          </ListItemButton>
        </ListItem></Link>
        <ListItem disablePadding>
          <ListItemButton sx={{ '&:hover': { bgcolor: 'primary.light',fontWeight:'bald' } }} Link to="/program">
            <ListItemIcon>
              <Person2TwoTone />
            </ListItemIcon>
            <ListItemText primary="Program" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

}
export default Drawer;