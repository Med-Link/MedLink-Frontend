import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import { Bar, Pie, Doughnut, Line, Bubble, Radar } from "react-chartjs-2";

export default function SalesChart() {

    // get monthly income from each pharmacy transactions
    const [chartData, setChartData] = useState([]);
    const getChartData =() =>{
     const token = window.localStorage.getItem('token');
       axios.get(`${backendUrl}/admin/viewmonthlyincome`,{
         headers: {
           'Authorization': token ? `Bearer ${token}` : ''
         }
         })
       .then(res =>{
         const results =  res.data.result;
        //  console.log(results);
         setChartData(results);
       })
   }
   React.useEffect(()=>{
    getChartData();
  },[]);
    const PNames = chartData.map(d=>d.name);
    const Incomes = chartData.map(d=>d.sum);

console.log(PNames);
    return (
        <div>
            <Bar
              data={{labels:PNames,
                datasets: [
                  {
                    label: "Income",
                    data: Incomes,
                    backgroundColor: [
                        'rgba(181, 150, 242)',
                    ],
                    borderColor: [
                        'rgba(181, 150, 242)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
    );
}
