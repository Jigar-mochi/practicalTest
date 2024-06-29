import React from 'react'
import { Box, Typography } from '@mui/material'
import { processSectionWrapper, processTypoWrapper, processWrapperStyle } from '../style/commonStyle'

const OurProcess = () => {
    return (
        <Box sx={processSectionWrapper}>
            <Box>
                <Typography sx={processTypoWrapper}>
                    Our Process
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: '30px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '50px' }}>
                        {[1, 2, 3].map((ele) => <Box key={ele} sx={processWrapperStyle}>
                            <Box sx={{ p: '56px', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '22px', fontWeight: 700, lineHeight: '24px', mb: '20px' }}>
                                    Step {ele}
                                </Typography>
                                <Typography sx={{ fontSize: '18px', fontWeight: 400, lineHeight: '24px' }}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                </Typography>
                            </Box>
                        </Box>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OurProcess