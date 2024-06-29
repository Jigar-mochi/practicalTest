import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import RHFTextField from '../components/RHFTextField'
import { handleContactFormSubmit } from '../redux/slices/commonSlice'
import { contactFormValidation } from '../local/validation'
import { buttonStyle } from '../style/commonStyle'
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const dispatch = useDispatch()

    const defaultValues = {
        fname: "",
        lname: "",
        email: "",
        phone: "",
        budget: '',
        description: "",
    }

    const { control, handleSubmit, reset } = useForm({
        defaultValues,
        resolver: yupResolver(contactFormValidation)
    })

    const onSubmit = (data) => {
        dispatch(handleContactFormSubmit({ payload: data, handleSuccess }))
    }

    const handleSuccess = () => { reset() }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '86px' }}>
            <ToastContainer />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '785px' }}>
                <Typography align='left' sx={{ mb: '60px', mt: '79px' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Box sx={{ display: 'flex', gap: '60px' }}>
                            <RHFTextField
                                name="fname"
                                label="First Name"
                                control={control}
                            />
                            <RHFTextField
                                name="lname"
                                label="Last Name"
                                control={control}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '60px', mt: 2 }}>
                            <RHFTextField
                                name="email"
                                label="Mail"
                                control={control}
                            />
                            <RHFTextField
                                name="phone"
                                label="Phone"
                                control={control}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '60px', mt: 2 }}>
                            <RHFTextField
                                name="budget"
                                type='number'
                                label="Budget"
                                control={control}
                            />
                            <RHFTextField
                                name="description"
                                label="Description"
                                control={control}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                        <Button sx={buttonStyle} variant="contained" type='submit'>Submit</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default ContactForm