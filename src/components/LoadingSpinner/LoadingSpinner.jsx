import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[700px]'>
            <RingLoader className='text-sky-500'></RingLoader>
        </div>
    );
};

export default LoadingSpinner;