'use client';
import React from 'react';
import { FcSurvey, FcOk, FcStatistics } from 'react-icons/fc';
import Modal from './Modal';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Main = ({ handleUpdateClick, rank, percentile, score, chartData, options, showModal, closeModal, saveData }) => {
  return (
    <div className='col-span-3 lg:ml-6'>
      <p className='text-xl font-bold'>Skill Test</p>
      <div className='mt-9 flex flex-col gap-4'>
        <div className='w-full h-auto flex flex-col md:flex-row justify-between items-center p-4 border border-gray-200 rounded-md'>
          <img
            className='h-12 mb-4 md:mb-0'
            alt='html'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png'
          />
          <div className='flex flex-col justify-center pt-1 md:mx-4'>
            <h1 className='font-bold text-center md:text-left'>Hyper Text Markup Language</h1>
            <p className='text-gray-500 text-center md:text-left'>Questions: 08 | Duration: 15 mins | Submitted on June 2021</p>
          </div>
          <button
            onClick={handleUpdateClick}
            className='h-10 rounded-md bg-blue-900 text-white p-2 px-4'
          >
            Update
          </button>
        </div>
        <div className='w-full h-auto p-4 border border-gray-200 rounded-md'>
          <h1 className='font-bold'>Quick Statistics</h1>
          <div className='flex flex-col md:flex-row justify-evenly'>
            <div className='flex gap-3 h-full border-b md:border-b-0 md:border-r border-gray-200 p-3'>
              <div className='bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center'>
                <img
                  className='h-7 object-contain'
                  src='https://static.vecteezy.com/system/resources/thumbnails/035/666/417/small/ai-generated-golden-cricket-winning-trophy-free-png.png'
                />
              </div>
              <div>
                <h2 className='text-center md:text-left'>{rank}</h2>
                <p className='text-gray-300 text-sm text-center md:text-left'>YOUR RANK</p>
              </div>
            </div>
            <div className='flex gap-3 border-b md:border-b-0 md:border-r border-gray-200 p-3'>
              <div className='bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center'>
                <FcSurvey size={25} />
              </div>
              <div>
                <h2 className='text-center md:text-left'>{percentile}</h2>
                <p className='text-gray-300 text-sm text-center md:text-left'>PERCENTILE</p>
              </div>
            </div>
            <div className='flex gap-3 p-3'>
              <div className='bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center'>
                <FcOk size={30} />
              </div>
              <div>
                <h2 className='text-center md:text-left'>{score}</h2>
                <p className='text-gray-300 text-sm text-center md:text-left'>CORRECT ANSWERS</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col justify-between gap-2 p-4 border border-gray-200 rounded-md'>
          <h1 className='font-bold'>Comparison Graph</h1>
          <span className='flex flex-col md:flex-row justify-between'>
            <h1 className='text-gray-500'>
              <b>You score {percentile}% percentile</b>
              <p>which is lower than the average percentile 72% of all the</p> engineers who took this assessment.
            </h1>
            <div className='bg-gray-200 h-12 w-12 rounded-full flex justify-center items-center mt-4 md:mt-0'>
              <FcStatistics size={30} />
            </div>
          </span>
          <div className='w-full mt-4'>
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
      <Modal showModal={showModal} closeModal={closeModal} saveData={saveData} />
    </div>
  );
};

export default Main;
