/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { handleGetSettings, setSettingsData } from '../redux/slices/commonSlice'
import logo from '../assets/images/Bitmaplogo.png'
import { footerBoldTypoStyle, footerMenuWrapperStyle, footerNormalTypoStyle, footerWrapperStyle, headerMenuItemStyle } from '../style/commonStyle'

const Footer = () => {

    const dispatch = useDispatch()
    const [setting, setSetting] = useState(null)
    const { settingsData } = useSelector((state) => state)

    const menuItems = ['About', 'Blogs', 'Contacts', 'Services']

    useEffect(() => {
        if (settingsData === null) {
            dispatch(handleGetSettings({ handleSuccess: (data) => { dispatch(setSettingsData(data)) } }))
        }
    }, [])

    useEffect(() => {
        if (settingsData !== null) {
            setSetting(settingsData)
        }
    }, [settingsData])

    return (
        <Box sx={footerWrapperStyle}>
            {setting && <Box sx={{ display: 'flex', alignItems: 'center', mt: '130px', }}>
                <Box sx={{ padding: "0 150px" }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '22px', lineHeight: '32px' }}>
                        Tagline will go here. Lorem ipsum d oler sit amet…
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '22px', lineHeight: '32px', mt: 3, color: '#00D5F8' }}>
                        {setting.inquiry_mail}
                    </Typography>
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: "0 150px" }}>
                    <Box sx={{ width: '166px' }}>
                        <Typography variant="h6" sx={footerBoldTypoStyle}>
                            Address
                        </Typography>
                        <Typography variant="h6" sx={footerNormalTypoStyle}>
                            {setting.address}
                        </Typography>
                    </Box>
                    <Box sx={{ width: '166px' }}>
                        <Typography variant="h6" sx={footerBoldTypoStyle}>
                            Contact
                        </Typography>
                        <Typography variant="h6" sx={footerNormalTypoStyle}>
                            {setting.contact_mail}
                        </Typography>
                        <Typography variant="h6" sx={footerNormalTypoStyle}>
                            {setting.contact_no}
                        </Typography>
                    </Box>
                </Box>
            </Box>}
            <Box sx={footerMenuWrapperStyle}>
                <img src={logo} alt="" />
                <Box sx={{ display: 'flex', gap: '16px' }}>
                    {menuItems.map((ele) => <Typography key={ele} variant="h6" sx={headerMenuItemStyle}>{ele}</Typography>)}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 400, fontSize: '12px', lineHeight: '16px', color: '#606060' }}>
                    ￼© 2022. All rights reserved
                </Typography>
            </Box>
        </Box >
    )
}

export default Footer