import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts';
    
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const ApexChart = () => {
  const [series] = useState([
    {
      name: "STOCK ABC",
      data: [0, 30, 60, 90, 120, 150],
    },
  ]);

  const chartData: ApexOptions = {
    chart: {
      type: "area",
      height: 300,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['1991', '1992', '1993', '1994', '1995', '1996'], 
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: 'left',
    },
  };

  return (
    <div className='w-full' id="chart">
      <ReactApexChart options={chartData} series={series} type="area" className='w-full' height={300} />
    </div>
  );
};

export default ApexChart;