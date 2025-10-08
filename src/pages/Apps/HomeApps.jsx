import React, { Suspense } from 'react';
import '../../../src/App.css'
import HomeAppSingleCard from '../HomeAppSingleCard/HomeAppSingleCard';
        

const HomeApps = ({appData}) => {

    return (
        <div className='inter'>
            <h1 className=' text-2xl lg:text-5xl font-bold text-center'>Trending Apps</h1>
            <p className='text-gray-500 text-center px-4 lg:px-0 mt-4'>Explore All Trending Apps on the Market developed by us</p>
            <Suspense fallback={'Loading..................'}>
                <div className='max-w-7xl gap-4 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto cursor-pointer lg:mt-4'>
                    {
                        appData.map(singleCard => <HomeAppSingleCard key={singleCard.id} singleCard={singleCard}></HomeAppSingleCard>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default HomeApps;