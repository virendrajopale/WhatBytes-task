'use client'
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FcRating } from "react-icons/fc";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = ({score}) => {
    const [newData, setnewData] = useState("");
  const Analysisdata = [
    { title: "HTML Tools, Forms, History", percentage: 80, color: "bg-blue-500", textColor:" text-blue-500" },
    { title: "Tags & References in HTML", percentage: 60, color: "bg-orange-500",textColor:" text-orange-500" },
    { title: "Tables & References in HTML", percentage: 24, color: "bg-red-500" ,textColor:" text-red-500"},
    { title: "Tables & CSS Basics", percentage: 96, color: "bg-green-500",textColor:" text-green-500" }
  ];
  

      const data =   {
        datasets: [
          {
            data: [score, 15-score],
            backgroundColor: ['#3b82f6', '#e5e7eb'],
            borderWidth: 0,
          },
        ],
      };
   


  const options = {
    cutout: '70%',
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    
    <div className='mt-16 lg:mr-2 w-full col-span-2 flex flex-col justify-center gap-2'>

    <div className=" w-auto p-4 h-fit  border   border-gray-200 rounded-md  ">
      <h2 className=" font-semibold mb-4 ">Syllabus Wise Analysis</h2>
      {Analysisdata.map((item, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-gray-700">{item.title}</span>
          </div>
          <span className=' w-full flex justify-between items-center'>

          <div className="flex w-[80%] bg-gray-200 rounded-full h-[0.550rem]">
            <div
              className={`${item.color} h-[0.550rem rounded-full`}
              style={{ width: `${item.percentage}%` }} >

            </div>
          </div>
            <span className={`${item.textColor}`}>{item.percentage}%</span>
          </span>
        </div>
      ))}
    </div>
    <div className=" p-6 rounded-md p-4 h-fit border  border-gray-200  max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Question Analysis</h2>
        <span className="text-blue-600 font-bold">{score}/15</span>
      </div>
      <p className="text-gray-600 mb-6">
        <b> You scored {score} questions correct out of 15.</b> However it still needs some improvements
      </p>
      <div className="relative h-48">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center">
       <FcRating size={30}/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Analysis;
