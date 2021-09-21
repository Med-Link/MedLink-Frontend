import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import { Bar, Pie, Doughnut, Line, Bubble, Radar } from "react-chartjs-2";

export default function IncomeGrowthChart() {

    // get income growth of each month
    const [chartData, setChartData] = useState([]);
    const getChartData =() =>{
     const token = window.localStorage.getItem('token');
       axios.get(`${backendUrl}/admin/incomegrowth`,{
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
    const Months = chartData.map(d=>d.month);
    const Incomes = chartData.map(d=>d.sum);

    return (
        <div>
            <Line
              data={{labels:Months,
                datasets: [
                  {
                    label: "Income",
                    data: Incomes,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                    ],
                    borderColor: [
                      'rgba(54, 162, 235)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
    );
}
