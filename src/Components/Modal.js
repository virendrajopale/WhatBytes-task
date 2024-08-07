'use client';
import React, { useState } from 'react';

const Modal = ({ showModal, closeModal, saveData }) => {
  const [rank, setRank] = useState();
  const [percentile, setPercentile] = useState();
  const [score, setScore] = useState();
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const newErrors = {};
    if (!rank) newErrors.rank = 'required';
    if (!percentile || percentile < 0 || percentile > 100) newErrors.percentile = 'required | percentile 0-100';
    if (!score || score < 0 || score > 15) newErrors.score = 'required | score 0-15';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    saveData({ rank, percentile, score });
    closeModal();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg mx-4 md:w-2/4">
        <h2 className="text-xl font-bold mb-4">Update scores</h2>
        
        <div className="mb-4 flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="bg-blue-900 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">1</div>
            <label className="">Update your <span className="font-bold">Rank</span></label>
          </div>
          <input 
            type="number"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="border p-2 rounded-md w-full md:w-1/3 transition-all focus:-translate-x-2 active:-translate-x-2 duration-200"
          />
          {errors.rank && <p className="text-red-500">{errors.rank}</p>}
        </div>

        <div className="mb-4 flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="bg-blue-900 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">2</div>
            <label className="">Update your <span className="font-bold">Percentile</span></label>
          </div>
          <input 
            type="number"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
            className="border p-2 rounded-md w-full md:w-1/3 transition-all focus:-translate-x-2 active:-translate-x-2 duration-200"
          />
          {errors.percentile && <p className="text-red-500">{errors.percentile}</p>}
        </div>

        <div className="mb-4 flex flex-col md:flex-row md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="bg-blue-900 text-white rounded-full h-8 w-8 flex items-center justify-center mr-2">3</div>
            <label className="">Update your <span className="font-bold">Current Score (out of 15)</span></label>
          </div>
          <input 
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="border p-2 rounded-md w-full md:w-1/3 transition-all focus:-translate-x-2 active:-translate-x-2 duration-200"
          />
          {errors.score && <p className="text-red-500">{errors.score}</p>}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={closeModal}
            className="border border-blue-900 text-blue-900 p-2 px-4 rounded-md"
          >
            cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-900 text-white p-2 px-4 rounded-md"
          >
            save →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
