import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const pharmacySchema = yup.object().shape({

      
      name : yup.string().min(3).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("please add a name"),
      contactNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('please add a contact number'),
      email: yup.string().email().required('please add an email'),
      location : yup.string().required('please add location'),
      password: yup.string().min(6).required('please add password'),
      // contactNumber :  yup.string().min(10).max(10).required(),
      // registrationDocs: yup.string().required(),


})