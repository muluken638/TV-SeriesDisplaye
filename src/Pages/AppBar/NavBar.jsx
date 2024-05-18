import { Notifications } from '@mui/icons-material'
import { Avatar, Box,  IconButton,  Toolbar, Typography } from '@mui/material'
import React from 'react'

function NavBar() {
  return (
  <>
    <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          p={2}
          bgcolor="black"
          color="white"
        >
        <Box>
          <Typography variant='h6'>Dashboard</Typography>
        </Box>
        <Box alignItems="center"
          display="flex"
          justifyContent="space-between">
        <Box  > 
          <Typography>
            <IconButton>
              <Notifications style={{color:"white"}}/>
            </IconButton>
          </Typography>
        </Box>
          <Box>
            <Avatar></Avatar>
          </Box>
        </Box>
          
        </Box>
  </>
  )
}

export default NavBar