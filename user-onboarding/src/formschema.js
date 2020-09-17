import * as yup from 'yup'

const formschema = yup.object().shape({
    email:yup
    .string()
    .email('Email invalid')
    .required('Email is required'),
    name:yup
    .string()
    .min(2,'Name must be more then one character')
    .required('Name is required'),
    password:yup
    .string()
    .min(6,'Password must be more then five characters')
    .required('Password is required'),
    terms:yup
    .boolean()
    .oneOf([true],'Must agree to Terms of Service'),
})
export default formschema