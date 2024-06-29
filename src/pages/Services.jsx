import React from 'react'
import { Box, Typography } from '@mui/material'
import { services } from '../local/constant'
import { serviceSectionStyle, serviceTypoStyle, serviceWrapper } from '../style/commonStyle'

const Services = () => {
    return (
        <Box sx={serviceWrapper}>
            <Box>
                <Typography sx={serviceTypoStyle}>
                    Services
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: '30px', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '50px', flexWrap: 'wrap' }}>
                        {services.map((service, index) => <Box sx={serviceSectionStyle} key={index}>
                            <Box sx={{ p: '56px', textAlign: 'center' }}>
                                <img src={service.image} alt="budgetBg" />
                                <Typography sx={{ fontSize: '22px', fontWeight: 700, lineHeight: '27.61px', my: '20px' }}>
                                    {service.title}
                                </Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '24px' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </Typography>
                            </Box>
                        </Box>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Services