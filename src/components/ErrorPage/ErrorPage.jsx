import React from 'react';
import error404 from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {

    const  navigate = useNavigate()

    return (
        <div>
            <div className='flex items-center justify-center mt-20 px-4 lg:px-0 lg:mt-40'>
                <img src={error404} alt="" />
            </div>
            <div>
                <h1 className='text-2xl text-center font-semibold mt-3'>Oops, page not found!</h1>
                <div className='text-center'>
                    <button className='btn mt-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mb-5' onClick={() => navigate(-2)}>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;