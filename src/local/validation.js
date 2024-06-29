import * as Yup from 'yup'

export const contactFormValidation = Yup.object().shape({
    fname: Yup.string().required('This field is required'),
    lname: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email').required('This field is required'),
    phone: Yup.string().required('This field is required'),
    budget: Yup.string().required('This field is required'),
    description: Yup.string().required('This field is required'),
})