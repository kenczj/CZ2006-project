import {Box} from '@mui/material'
import React from 'react'

export const about = () => {
    return (
        <Box container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            direction: 'column',
            minHeight: '100vh',
        }}>
            <Box sx={{
              width: 500, borderRadius:5, backgroundColor:'primary.light', color:'white', p:5, fontSize:20}} >Azon will develop an intuitive renting property website to enable users to rent their apartments via real-time retrieval of gov data 
                API to best match their chosen/intended location. Agents are able to list & rent out users’ properties while Users are able to 
                browse through thousands of properties for rent with each listing filled with detailed information and photos. Administrators 
                would be involved in the maintenance and integrity of the website</Box>
        </Box>
    )
}

export default about