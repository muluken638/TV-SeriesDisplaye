import React from 'react';
import Box from '@mui/material/Box';
import Content from './Pages/Contentes/Content';
import NavBar from './Pages/AppBar/NavBar';
import Channel from './Pages/Channal/chanal';
import SidebarContent from './Pages/Contentes/sidebar';
import SideBar from './Pages/SideBar/SideBar';
import MUITable from './Pages/Channal/chanal';
const App = () => {
  return (
    <Box display="flex" height="100vh">
      <SideBar />
      <Box flexGrow={1} display="flex" flexDirection="column" flex={6}>
        <NavBar/>
        <Content/>
      </Box>
    </Box>
    //<SidebarContent/>
  );
};

export default App;