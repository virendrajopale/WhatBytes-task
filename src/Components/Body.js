'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '@/Components/Sidebar';
import Main from '@/Components/Main';
import Analysis from '@/Components/Analysis';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(8);
  const [chartData, setChartData] = useState({
    labels: [0, 25, 50, 75, 100],
    datasets: [
      {
        label: 'Your Score',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        smooth: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  });

  useEffect(() => {
    const newChartData = {
      labels: [0, 25, 50, 75, 100],
      datasets: [
        {
          label: 'Your Score',
          data: [percentile, score, rank],
          fill: false,
          smooth: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
      ],
    };
    setChartData(newChartData);
  }, [rank, percentile, score]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Comparison Graph',
      },
    },
  };

  const handleUpdateClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveData = ({ rank, percentile, score }) => {
    setRank(rank);
    setPercentile(percentile);
    setScore(score);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-6 gap-4 mr-2'>
     
        <Sidebar />
    
   
        <Main
          handleUpdateClick={handleUpdateClick}
          rank={rank}
          percentile={percentile}
          score={score}
          chartData={chartData}
          options={options}
          showModal={showModal}
          closeModal={closeModal}
          saveData={saveData}
        />
    
    
        <Analysis score={score} />
      
    </div>
  );
};

export default Body;
