import React from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../AllApps/AllApps';

const Apps = () => {

    const allAppsData = useLoaderData()
    
    

    return (
        <div className='inter bg-[#F5F5F5] py-10'>
            <h1 className='text-4xl font-bold text-center '>Our All Applications</h1>
            <p className='text-gray-500 text-center mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center mt-5'>
                <div>
                    <h1 className='text-2xl font-semibold '>({allAppsData.length}) Apps Found</h1>
                </div>

                <div className='mt-5 lg:mt-0'>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" />
                    </label>
                </div>
            </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 lg:px-0 place-items-center'>
                    {
                        allAppsData.map(allApp => <AllApps key={allApp.id} allApp={allApp}></AllApps>)
                    }
                </div>
        </div>
    );
};

export default Apps;