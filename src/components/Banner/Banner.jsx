import React from 'react';
import '../../../src/App.css'
import ios from '../../assets/ios.png'
import android from '../../assets/android.png'
import hero from '../../assets/hero.png'


const Banner = () => {
    return (
        <div>
            <div className='inter py-10 lg:py-20 inter'>
                <h1 className='text-2xl lg:text-7xl text-center font-bold lg:leading-24'>We Build <br /> <span className='text-[#632EE3]'> Productive</span> Apps</h1>
                <p className='text-gray-500 mt-5 text-center px-2 lg:px-0'>At AppNest, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='text-cente flex flex-col lg:flex-row justify-center px-4'>
                    <a href="https://play.google.com/store/games?hl=en" target='blank' className='btn border-1 border-gray-200 shadow-sm lg:mr-5 mt-10 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:-translate-y-1 hover:scale-105 hover:rotate-1 hover:animate-bounce hover:duration-5000'><span><img src={android} alt=""  className='w-5 mr-1'/></span> Google Play</a>
                    <a href="https://www.apple.com/app-store/" target='blank' className='btn border-1 border-gray-200 shadow-sm mt-5 lg:mt-10 hover:bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:text-white hover:-translate-y-1 hover:scale-105 hover:-rotate-1 hover:animate-bounce hover:duration-5000'><span><img src={ios} alt=""  className='w-5 mr-1'/></span> App Store</a>
                </div>

                <div>
                    <img src={hero} alt=""  className='mx-auto mt-10 px-5 lg:px-0'/>
                </div>

                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-5 lg:py-20'>
                    <h1 className='text-white text-2xl lg:text-4xl text-center font-semibold px-4 lg:px-0'>Trusted by Millions, Built for You</h1>
                    
                    <div className='flex flex-col lg:flex-row text-center justify-center items-center lg:gap-24 mt-5 lg:mt-10'>
                        <div className='space-y-4'>
                            <p className='text-white font-extralight'>Total Downloads</p>
                            <h1 className='text-2xl lg:text-7xl font-extrabold text-white'>29.6M</h1>
                            <p className='text-white font-extralight'>21% more than last month</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-white font-extralight mt-3 lg:mt-0'>Total Reviews</p>
                            <h1 className='text-2xl lg:text-7xl font-extrabold text-white'>906K</h1>
                            <p className='text-white font-extralight'>46% more than last month</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-white font-extralight mt-3 lg:mt-0'>Active Apps</p>
                            <h1 className='text-2xl lg:text-7xl font-extrabold text-white'>132+</h1>
                            <p className='text-white font-extralight'>31 more will Launch</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;