import React from 'react';
import Banner from '../../components/Banner/Banner';
import '../../../src/App.css'
import HomeApps from '../Apps/HomeApps';
import { useLoaderData, useNavigation } from 'react-router';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Home = () => {
    const appData = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === 'loading' ? LoadingSpinner : Home)
    
    return (
        <div className='bg-[#F5F5F5] inter'>
            <Banner></Banner>
            <HomeApps appData={appData}></HomeApps>
        </div>
    );
};

export default Home;