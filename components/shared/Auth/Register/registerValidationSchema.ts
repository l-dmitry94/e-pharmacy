import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().required('Please enter your name'),
    email: yup
        .string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Please enter a valid email')
        .required('Please enter your email'),
    phone: yup
        .string()
        .matches(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
            'Please enter a valid phone number'
        )
        .required('Please enter your phone number'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter your password'),
});

export default validationSchema;
