import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const pharmacySchema = yup.object().shape({

      
      name : yup.string().min(3).required(),
      contactNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
      // contactNumber :  yup.string().min(10).max(10).required(),
      email: yup.string().email().required() ,
      location : yup.string().required(),
      password: yup.string().min(6).required(),
      // registrationDocs: yup.string().required(),


})