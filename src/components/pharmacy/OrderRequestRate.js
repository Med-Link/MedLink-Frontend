import React, {useState} from "react";
import axios from 'axios';
import { backendUrl } from "../../urlConfig.js";
import { Bar, Pie, Doughnut, Line, Bubble, Radar } from "react-chartjs-2";

export default function OrderRequestsRateChart() {
    
  // get income growth of each month
  const [chartData, setChartData] = useState([]);
  const getChartData = () => {
    const token = window.localStorage.getItem('token');

    axios.get(`${backendUrl}/pharmacy/orderrequestsrate`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    }).then(res => {
      const results = res.data.result;
      setChartData(results);
    })
  }

  React.useEffect(() => {
    getChartData();
  }, []);
  
    const Months = chartData.map(d=>d.month);
    const Orders = chartData.map(d=>d.count);

    return (
        <div>
            <Bar
              data={{labels:Months,
                datasets: [
                  {
                    label: "Orders",
                    data: Orders,
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


