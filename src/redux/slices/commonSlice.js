import Axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BASE_URL } from '../../services/config'
import { toast } from 'react-toastify'

const initialState = {
    blogsData: null,
    settingsData: null
}

export const commonSlice = createSlice({
    name: 'commonSlice',
    initialState,
    reducers: {
        setBlogsData: (state, action) => {
            state.blogsData = action.payload
        },
        setSettingsData: (state, action) => {
            state.settingsData = action.payload
        },
    },
})

export const { setBlogsData, setSettingsData } = commonSlice.actions

export default commonSlice.reducer

export const handleContactFormSubmit = createAsyncThunk(
    'contactForm',
    async (data) => {
        try {
            const response = await Axios.post(`${BASE_URL}api/contact/send`, data.payload)
            if (response.status === 200) {
                data.handleSuccess()
                toast(response.data.message, { position: "top-center", type: 'success' })
            } else {
                toast('Something went wrong', { position: "top-center", type: 'success' })
            }
        } catch (error) {
            toast(JSON.stringify(error.message), { position: "top-center", type: 'error' })
        }
    },
)
export const handleGetBlogs = createAsyncThunk(
    'blog',
    async (data) => {
        try {
            const response = await Axios.get(`${BASE_URL}api/blog/`)
            if (response.status === 200) {
                data.handleSuccess(response.data.data)
            } else {
                toast('Something went wrong', { position: "top-center", type: 'success' })
            }
        } catch (error) {
            toast(JSON.stringify(error.message), { position: "top-center", type: 'error' })
        }
    },
)
export const handleGetSettings = createAsyncThunk(
    'settings',
    async (data) => {
        try {
            const response = await Axios.get(`${BASE_URL}api/settings/fetch-frontend-details`)
            if (response.status === 200) {
                data.handleSuccess(response.data.data)
            } else {
                toast('Something went wrong', { position: "top-center", type: 'success' })
            }
        } catch (error) {
            toast(JSON.stringify(error.message), { position: "top-center", type: 'error' })
        }
    },
)