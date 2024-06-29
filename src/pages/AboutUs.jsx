import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import aboutUSBanner from '../assets/images/2480559about-banner.png'
import { aboutWrapper, buttonStyle } from '../style/commonStyle'

const AboutUs = () => {
    return (
        <Box sx={aboutWrapper}>
            <Box sx={{ display: 'flex', padding: '120px', alignItems: 'center' }}>
                <Box>
                    <Typography sx={{ fontSize: '47px', fontWeight: 700, lineHeight: '58.99px', mb: '22px' }}>
                        About us
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '22.59px', mb: '29px' }} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur sadipscing elitr
                    </Typography>
                    <Button sx={buttonStyle} variant="contained">Submit</Button>
                </Box>
                <Box>
                    <img src={aboutUSBanner} alt="about us page" />
                </Box>
            </Box>
        </Box >
    )
}

export default AboutUs