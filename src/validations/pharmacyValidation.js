import * as yup from 'yup';

export const pharmacySchema = yup.object().shape({
      name : yup.string().min(3).required(),
      contactNumber :  yup.string().min(10).max(10).required(),
      email: yup.string().email().required() ,
      location : yup.string().required(),
      password: yup.string().min(6).required(),
      // registrationDocs: yup.string().required(),


})