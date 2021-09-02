import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const orderplaceSchema = yup.object().shape({

      
      
      contactnumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('please add a contact number'),
     
      // contactNumber :  yup.string().min(10).max(10).required(),
      // registrationDocs: yup.string().required(),


})