'use client'
import React, { useState } from 'react';
import { FiBarChart2 } from "react-icons/fi";
import { TfiMedallAlt } from "react-icons/tfi";
import { FaRegFile } from "react-icons/fa";

const Sidebar = () => {
    const [selectedId, setSelectedId] = useState(1); 
 
    const sidebarData = [
        { id: 1, title: "Dashboard", icon: <FiBarChart2 size={20} className='justify-self-start' /> },
        { id: 2, title: "Skill Test", icon: <TfiMedallAlt size={20} className='justify-self-start' /> },
        { id: 3, title: "Internship", icon: <FaRegFile size={20} className='justify-self-start' /> },
    ];

    const handleItemClick = (id) => {
        setSelectedId(id);
    };

    return (
        <div className='border-r  border-r-gray-200 col-span-1  w-full h-full md:h-full'>
            <div className='flex flex-col items-center w-full gap-4 mt-12'>
                {sidebarData.map((data) => (
                    <span
                        key={data.id}
                        className={`flex items-center self-start gap-4 p-4 pl-3 cursor-pointer ${
                            selectedId === data.id ? 'text-blue-500 bg-gray-100 w-[95%] rounded-e-full' : 'text-gray-600'
                        }`}
                        onClick={() => handleItemClick(data.id)}
                    >
                        {data.icon}
                        <p className='text-md font-semibold'>{data.title}</p>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
