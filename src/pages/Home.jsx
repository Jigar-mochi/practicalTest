import React from 'react'
import { Box, Button, Card, Typography } from '@mui/material'
import Header from '../components/Header'
import bannerImg from '../assets/images/Asset 1@4xbanner.png'
import { bannerBoldTypo1, bannerBoldTypo2, bannerBoldTypoStyle, bannerBtnStyle, bannerBtnWrapper, bannerLeftSectionWrapper, bannerNormalTypo, bannerWrapperStyle } from '../style/commonStyle'

const Home = () => {
    return (
        <Box sx={bannerWrapperStyle}>
            <Header />
            <Box sx={bannerLeftSectionWrapper}>
                <Box sx={{ pl: '80px' }}>
                    <Typography sx={bannerBoldTypoStyle}>
                        How much
                    </Typography>
                    <Typography sx={bannerBoldTypoStyle}>
                        could you save?
                    </Typography>
                    <Typography sx={bannerNormalTypo}>
                        Answer the questions below to get a fixed price quotation for us to take your accountancy hassles away from you.
                    </Typography>
                    <Card sx={{ p: '37px', mb: '20px' }}>
                        <Typography align='center' sx={bannerBoldTypo1}>
                            Is your turnover expected to be more than £85k?
                        </Typography>
                        <Box sx={bannerBtnWrapper}>
                            <Button sx={bannerBtnStyle} variant="contained">Yes</Button>
                            <Button sx={bannerBtnStyle} variant="contained">No</Button>
                        </Box>
                    </Card>
                    <Typography sx={bannerBoldTypo2}>
                        Takes less than 30 seconds
                    </Typography>
                </Box>
                <Box >
                    <img src={bannerImg} alt="banner" />
                </Box>
            </Box>
        </Box >
    )
}

export default Home