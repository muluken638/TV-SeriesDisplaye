import { Box, Card, Typography } from '@mui/material'
import { Add, Filter, ImportExport, Person2TwoTone, Search } from '@mui/icons-material'
import { IconButton, InputBase } from '@mui/material'
import React from 'react'
import { light } from '@mui/material/styles/createPalette'

function Content() {
  return (
    <div>
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
            <IconButton>
              <Filter />
            </IconButton>
            <Typography variant="body1">Add Filter</Typography>
          </Box>
          <Box display="flex" alignItems="center" ml={2}>
            <Typography variant="body1" bgcolor="blue" p={2} borderRadius={2}>
              Add Filter
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={5} ml={5} mr={5}>
        <Card sx={{ display: 'flex', width: '25%' ,justifyContent:'space-between'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">37</Typography>
            <Typography variant="body1">12% This Month</Typography>
          </Box>
          <Box>
            <IconButton>
              <Person2TwoTone />
            </IconButton>
          </Box>
        </Card>
        <Card sx={{ display: 'flex', width: '25%', padding: '16px',justifyContent:'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">37</Typography>
            <Typography variant="body1">12% This Month</Typography>
          </Box>
          <Box>
            <IconButton>
              <Person2TwoTone />
            </IconButton>
          </Box>
        </Card>
        <Card sx={{ display: 'flex', width: '25%', padding: '16px',justifyContent:'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' ,justifyContent:'space-between'}}>
            <Typography variant="h6">System user</Typography>
            <Typography variant="h4">37</Typography>
            <Typography variant="body1">12% This Month</Typography>
          </Box>
          <Box>
            <IconButton>
              <Person2TwoTone />
            </IconButton>
          </Box>
        </Card>
      </Box>
    </div>
  )
}

export default Content