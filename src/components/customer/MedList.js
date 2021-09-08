/* eslint-disable react/jsx-key */
import React, {useState} from "react";
/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";



export default function MedList() {
  
    //backend connection for medicine drop down list
  const [data, setData] = useState([]);

  const getdata =() =>{
    const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/order/listmedicine`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
            console.log(results);
            setData(results);
      })
  }
  React.useEffect(()=>{
    getdata();
  },[]);
  const options = data.map((option) => {
    const firstLetter = option.medname[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  // backend connection for pass the medicine id and filter the pharmacies

  const [pharmacyData, setPharmacyData] = useState([]);
  const onSelectMedicine = (event)=> {
      console.log(event)
      const token = window.localStorage.getItem('token');
    
      axios.get(`${backendUrl}/order/pharmacybymedicine?medid=${event.medid}`,{
        headers: {
          'Authorization': token ? `Bearer ${token}` : ''
        }
        })
      .then(res =>{
        const results =  res.data.result;
            console.log(results);
            setPharmacyData(results);
      })
  }


  
  
  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.medname+" - "+option.brand}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Medicine Names with their brands" variant="outlined" />}
      size="small"
      getOptionSelected={(value)=> onSelectMedicine(value)}
    />
  );
}

  
