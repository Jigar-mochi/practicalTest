/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { handleGetBlogs, setBlogsData } from '../redux/slices/commonSlice'
import bg1 from '../assets/images/Rectangletestimonial-bg.png'
import cardImage from '../assets/images/Bitmap Copy 21.png'
import avatarImg from '../assets/images/Pattern-fill-8f708492fba54a97e4c0f745af907342user-profie.png'
import { testimonyWrapper } from '../style/commonStyle'

const Blog = () => {
    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState([])
    const { blogsData } = useSelector((state) => state)

    useEffect(() => {
        if (blogsData === null) {
            dispatch(handleGetBlogs({ handleSuccess: (data) => { dispatch(setBlogsData(data)) } }))
        }
    }, [])

    useEffect(() => {
        if (blogsData !== null) {
            setBlogs(blogsData)
        }
    }, [blogsData])

    return (
        <Box sx={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Typography variant="h5" sx={{ fontSize: '47px', fontWeight: 700, lineHeight: '58.99px', mb: '60px' }}>
                        Testimonials
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '80px' }}>
                        {[1, 2].map((ele) => <Card key={ele} sx={testimonyWrapper} >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: '13px' }}>
                                <Avatar alt="avatar" src={avatarImg} sx={{ width: '56px', height: '56px' }} />
                                <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '28px', ml: '16px' }}>
                                    Josh brollins
                                </Typography>
                            </Box>
                            <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '32px', color: '#5E5E5E' }}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                            </Typography>
                        </Card>)}
                    </Box>
                </Box>
            </Box>
            <Box sx={{ pb: '132px', display: 'flex', justifyContent: 'center', mt: '196px' }}>
                <Box>
                    <Typography variant="h5" sx={{ mb: '60px', fontSize: '47px', fontWeight: 700, lineHeight: '58.99px' }}>
                        Blogs
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '1084px' }}>
                        {
                            Array.isArray(blogs) && blogs.length > 0 && blogs.slice(0, 3).map((blog) => {
                                return <Card sx={{ width: 332, boxShadow: 'none', backgroundColor: 'transparent' }} key={blog.id}>
                                    <CardMedia
                                        sx={{ height: 200 }}
                                        image={blog.image_url || cardImage}
                                        title="green iguana"
                                    />
                                    <CardContent sx={{ padding: '16px 0' }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {blog.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {moment(blog.createdAt).format('MMM DD, YYYY')} <span>{blog.writer_name}</span>
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {blog.short_description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Blog