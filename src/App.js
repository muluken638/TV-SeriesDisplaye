import React from 'react';
import Box from '@mui/material/Box';
import Content from './Pages/Contentes/Content';
import NavBar from './Pages/AppBar/NavBar';
import Channel from './Pages/Channal/chanal';
import SidebarContent from './Pages/Contentes/sidebar';
import SideBar from './Pages/SideBar/SideBar';
import MUITable from './Pages/Channal/chanal';
import Program from './Pages/Program/program';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './HomePage';
const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/Channel" component={Channel} />
      <Route path="/Program" component={Program} />
    </Routes>
    </Router>


  );
}

export default App;