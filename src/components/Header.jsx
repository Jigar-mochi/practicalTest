import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import logo from '../assets/images/Bitmaplogo.png'
import { buttonStyle, headerMenuItemStyle } from '../style/commonStyle'

const Header = () => {
    const menuItems = ['Services', 'About us', 'Blogs', 'Case studies']
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 60px'
        }}>
            <img src={logo} alt="" />
            <Box sx={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
                {menuItems.map((ele) => <Typography key={ele} variant="h6" sx={headerMenuItemStyle}>{ele}</Typography>)}
                <Button sx={buttonStyle} variant="contained">Contact us</Button>
            </Box>
        </Box>
    )
}

export default Header