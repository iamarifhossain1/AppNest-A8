import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import AllApps from '../AllApps/AllApps';
import appError from '../../assets/App-Error.png'

const Apps = () => {
  const allAppsData = useLoaderData();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  
  const filteredApps = allAppsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='inter bg-[#F5F5F5] py-10'>
      <h1 className='text-4xl font-bold text-center'>Our All Applications</h1>
      <p className='text-gray-500 text-center mt-2 px-4 lg:px-0'>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center mt-5'>
        <div>
          <h1 className='text-2xl font-semibold'>
            ({filteredApps.length}) App{filteredApps.length !== 1 ? 's' : ''} Found
          </h1>
        </div>

        
        <div className='mt-5 lg:mt-0'>
          <label className='input flex items-center gap-2'>
            <svg
              className='h-[1em] opacity-50'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </g>
            </svg>
            <input
              type='search'
              required
              placeholder='Search Apps...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='bg-transparent outline-none w-full'
            />
          </label>
        </div>
      </div>
     
     
            {filteredApps.length > 0 ? (
  <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 lg:px-0 place-items-center text-center'>
    {filteredApps.map((app) => <AllApps key={app.id} allApp={app} />)}
  </div>
) : (
  <div className='flex flex-col justify-center items-center min-h-screen'>
    <img src={appError} alt="APP NOT FOUND" className='mb-4 px-4 lg:px-0' />
    <h1 className='text-2xl font-bold'>OPPS!! APP NOT FOUND</h1>
    <button className='btn mt-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white' onClick={() => navigate(-1)}>Go Back</button>
  </div>
    


)}

        
    </div>
  );
};

export default Apps;
