import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


const LineChart= () => {
  const chartData: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      }, 
    },
    forecastDataPoints: {
      count: 2
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      categories: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' 
      ],
      tickAmount: 15,
    },
    title: {
      text: 'Reports',
      align: 'left',
      style: {
        fontSize: "16px",
        color: '#666'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    yaxis: {
      min: 0,
      max: 40
    },
    series: [{
      name: 'Sales',
      data: [4, 3, 10, 9, 29, 19, 22]
    }],
  };

  return (
    <div className='w-full' id="chart">
      <ReactApexChart options={chartData} series={chartData.series} type="line" height={350} className='w-[100%]' />
    </div>
  );
};

export default LineChart;
