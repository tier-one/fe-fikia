import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutPieChart = ({ portfolios, isFetching }: any) => {
  const labels = portfolios?.map((portfolio: any) => portfolio?.fundName)
  const portFolioDatas = portfolios?.map((portfolio: any) => portfolio?.sumInvested)

  const data = {
      labels: labels,
      datasets: [
        {
          label: '# of Fund',
          data: portFolioDatas,
          backgroundColor: [
            '#DB8A15',
            '#7B61FF',
            '#53B159',
            '#9653b1',
            '#53b1af',
            '#b1af53',
          ],
          borderColor: [
            '#fff',
            '#fff',
            '#fff',
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

  return (
    <div className='w-full'>
        {isFetching === false && portFolioDatas && portFolioDatas.length === 0 && (<span className='text-red-300'>
          You have not subscribed to any fund yet,
          Subscribe to one or more funds to see your portfolio
        </span>)}
        {portFolioDatas && portFolioDatas?.length !== 0 && (<Doughnut data={data} className='w-full ' options={doughnutOptions}/>)}
    </div>
  )
}

export default DoughnutPieChart