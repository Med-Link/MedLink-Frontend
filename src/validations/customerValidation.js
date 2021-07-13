import * as yup from 'yup';

export const customerSchema = yup.object().shape({
      firstName : yup.string().min(3).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('first name is required'),
      lastName :  yup.string().min(3).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required('last name required'),
      email: yup.string().email().required('email is required') ,
      password: yup.string().min(6).required('password is required') ,

})