import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Unguka fund', 'Debt funds', 'Large cap funds'],
    datasets: [
      {
        label: '# of Fund',
        data: [5, 9, 9,],
        backgroundColor: [
          '#DB8A15',
          '#7B61FF',
          '#53B159',
        ],
        borderColor: [
          '#fff',
          '#fff',
          '#fff',
        ],
        borderWidth: 1,
      },
    ],
};

const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Your portfolio',
        font: {
            size: 25,
        },
      },
    },
};
  

const DoughnutPieChart = () => {
  return (
    <div className='w-full'>
        <Doughnut data={data} className='w-full ' options={doughnutOptions}/>
    </div>
  )
}

export default DoughnutPieChart