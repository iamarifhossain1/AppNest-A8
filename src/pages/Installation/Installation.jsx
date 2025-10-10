import { ChevronDown, Download, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Installation = () => {

     const [installedApps, setInstalledApps] = useState([]);

     useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(stored);
  }, []);
        
    return (
        <div className='bg-[#F5F5F5]'>
            <div className='container mx-auto inter py-10'>
                <h1 className='text-2xl lg:text-4xl font-bold text-center'>Your Installed Apps</h1>
                <p className='text-center text-gray-500 mt-2'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div>
                        <h1 className='text-2xl font-semibold'>{installedApps.length} App Found</h1>
                    </div>
                    <div>
                        <details className="dropdown">
                            <summary className="btn m-1 text-gray-500 flex items-center">Sort by Downloads <ChevronDown className='text-gray-400 '></ChevronDown></summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <li><a>Low - High</a></li>
                                <li><a>High - Low</a></li>
                            </ul>
                        </details>
                    </div>
                </div>

                <div>
                    {
                        installedApps.map((app) => 
                            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1'>
                                <div className='flex items-center justify-between bg-white p-3 rounded-lg shadow-md mt-5 border-1 border-gray-200 px-5'>

                                    <div className='flex gap-3 '>
                                        <img src={app.image} className='w-20 bg-white p-2 border-1 border-gray-200 rounded-lg shadow-md' alt="" />
                                        <div className=''>
                                            <p>{app.title}</p>
                                            <div className='flex items-center gap-2 mt-5'>
                                                <Download className='w-5 text-green-500'></Download> <p className='text-sm text-green-500'>{app.downloads}</p>
                                                <Star className='w-5 text-orange-500'></Star> <p className='text-sm text-orange-500'>{app.ratingAvg}</p>
                                                <p className='text-gray-500 text-sm'>{app.fileSize}</p>
                                            </div>
                                        </div>

                                    </div>

                                    <div>
                                        <button className='btn bg-green-500 text-white'>Uninstall</button>
                                    </div>
                                </div>
                                
                                

                            </div>   
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Installation;