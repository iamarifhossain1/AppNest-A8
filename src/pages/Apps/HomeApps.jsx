import React, { Suspense } from 'react';
import '../../../src/App.css'
import HomeAppSingleCard from '../HomeAppSingleCard/HomeAppSingleCard';
import { Link } from 'react-router';
        

const HomeApps = ({appData}) => {


    return (
        <div className='inter pb-10'>
            <h1 className=' text-2xl lg:text-5xl font-bold text-center'>Trending Apps</h1>
            <p className='text-gray-500 text-center px-4 lg:px-0 mt-4'>Explore All Trending Apps on the Market developed by us</p>
           
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 lg:px-0 place-items-center'>
                    {
                        appData.map(singleCard => <HomeAppSingleCard key={singleCard.id} singleCard={singleCard}></HomeAppSingleCard>)
                    }
                </div>
            
            <Link to='/apps'>
                <div className='text-center mt-10'>
                        <button className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white'>Show All</button>
                </div>
            </Link>
        </div>
    );
};

export default HomeApps;