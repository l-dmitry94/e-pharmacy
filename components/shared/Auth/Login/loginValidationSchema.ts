import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
        .string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Please enter a valid email')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter your password'),
});

export default validationSchema;
