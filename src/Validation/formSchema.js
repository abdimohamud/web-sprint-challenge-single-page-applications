import * as yup from 'yup'

let formSchema = yup.object().shape({

    name: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Username is Required'),


})

export default formSchema