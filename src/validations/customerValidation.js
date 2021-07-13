import * as yup from 'yup';

export const customerSchema = yup.object().shape({
      firstName : yup.string().min(3).required(),
      lastName :  yup.string().min(3).required(),
      email: yup.string().email().required() ,
      password: yup.string().min(6).required() ,

})