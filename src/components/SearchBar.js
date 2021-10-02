import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import MapIcon from '@mui/icons-material/Explore';
import InputBase from '@mui/material/InputBase';
import RoomIcon from '@mui/icons-material/Room';
import Paper from '@mui/material/Paper';

const SearchBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                direction: 'column',
                minHeight: '100vh',
            }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Property"
                    inputProps={{ 'aria-label': 'search property' }}
                />
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 25, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <RoomIcon />
                </IconButton>
            </Paper>
        </Box>
    )
}

export default SearchBar


//  <TextField 
//  sx={{bgcolor: 'white',borderRadius: 3 }} 
// />