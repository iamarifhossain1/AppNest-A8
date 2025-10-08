import { Download, Star, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BarChart } from 'recharts';

const AppDetails = () => {

    const {id} = useParams()
    const appId = parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app => app.id === appId);
    const {title, image, companyName, downloads, ratingAvg, reviews, action, fileSize, ratings} = singleApp;
    const [install, setInstall] = useState(false);
        
    const handleInstall = () => { 
        setInstall(true);
        toast.success(`${title} installed successfully! 🎉`, {
            position: 'top-center',
            autoClose: '3000',
        })
    }

    return (
        <div className='bg-[#F5F5F5] lg:px-20'>
            <div className=' flex flex-col lg:flex-row items-center py-10 gap-8'>

                <div>
                    <img src={image} alt="" className='w-80 bg-white p-5'/>
                </div>

                <div className='w-full text-center lg:text-left'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p className='mb-4 '>Developed By: <span className='text-indigo-600 font-medium'>{companyName}</span></p>
                    <hr className='w-full text-gray-300' ></hr>

                    <div className='flex justify-center lg:justify-start items-center gap-5 space-y-1 mt-4'>

                        <div className='space-y-1'>
                            <div className='flex justify-center'><Download className='text-green-600 text-center'></Download></div>
                            <p className='text-gray-500 text-center'>Download</p>
                            <h1 className='text-center text-2xl font-bold'>{downloads}</h1>
                        </div>

                        <div className='space-y-1'>
                            <div className='flex justify-center'><Star className='text-orange-600'></Star></div>
                            <p className='text-gray-500'>Average Ratings</p>
                            <h1 className='text-center text-2xl font-bold'>{ratingAvg}</h1>
                        </div>

                        <div className='space-y-1'>
                            <div className='flex justify-center'><ThumbsUp className='bg-indigo-700 text-white p-1 rounded-md'></ThumbsUp></div>
                            <p className='text-gray-500'>Total Reviews</p>
                            <h1 className='text-center text-2xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <button disabled={install} className={`btn bg-green-600 text-white mt-2 ${install ? 'opacity-60 cursor-not-allowed text-black' : ''}`} onClick={handleInstall}>{install ? 'Installed' : action}  ({fileSize})</button>
                    <hr className='mt-5 text-gray-300'/>
                </div>
            </div>

                <div className='text-2xl font-bold'>
                    <h1>Ratings</h1>
                </div>

            <ToastContainer />
        </div>
    );
};

export default AppDetails;