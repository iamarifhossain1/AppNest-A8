import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../../../src/App.css'
import HomeApps from '../Apps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const appData = useLoaderData();
    
    return (
        <div className='bg-[#F5F5F5] inter'>
            <Banner></Banner>
            <HomeApps appData={appData}></HomeApps>
        </div>
    );
};

export default Home;