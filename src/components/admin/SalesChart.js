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
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 252)',
                        'rgba(255, 159, 64)',
                        'rgba(205, 199, 24)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(205, 199, 24,1)'
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              
            />
          </div>
    );
}
