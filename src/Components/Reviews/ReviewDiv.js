import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go'

const ReviewDiv = () => {
    return (
        <div className='h-[560px] bg-[#142580] w-[350px] mt-20 rounded-tr-[80px] px-4 py-8 pb-4'>

            <div className='flex justify-center gap-5 items-center py-16'>
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3Un0AmRsdBUoRjJFGDEDay/a8ef93926a9530e1e9097e90bd4dcd7a/student-guillermo.png?fm=webp&h=150&q=100&w=150" alt="" />
                    </div>
                </div>
                <div className='text-white'>
                    <h1 className='text-sm font-medium'>Guillermo Orellana Ruiz</h1>
                    <p>Android Developer</p>
                    <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/1slgmCtCos3fN8o7iNTV0P/718290ffd972dde4e06e0a4ccf4176e6/logo-white-badoo.svg?fm=webp&q=100" alt="" className='mt-5' />

                </div>

            </div>

            <hr className='border-b-[1px] border-blue-300' />
            <div className='text-white flex flex-col justify-start items-start mt-8 gap-5'>
                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' /> Studied to become a sound engineer</p>
                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Wanted to build apps since he first saw android in 2009</p>
                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Now head android developer at badoo</p>
            </div>
        </div>
    );
};

export default ReviewDiv;