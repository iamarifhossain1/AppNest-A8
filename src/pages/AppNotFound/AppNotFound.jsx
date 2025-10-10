import React from 'react';
import { useNavigate } from 'react-router';

const AppNotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex justify-center items-center mt-10 lg:mt-20 mb-10'>
                <div className='text-center mt-3'>
                    <h1 className='text-2xl lg:text-5xl font-bold'>App is Not Found !</h1>
                    <button className='btn mt-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mb-5' onClick={() => navigate(-2)}>Go Back</button>
                    <p className='text-gray-500 text-center mt-3'>The App you are requesting is not found on our system.  please try another apps</p>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;