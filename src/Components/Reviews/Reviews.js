import React from 'react';
import RevCarousel from './RevCarousel';

const Reviews = () => {
    return (
        <div className='rounded-tl-[110px] py-32 lg:mt-96 bg-cover' style={{ backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/006/868/934/non_2x/abstract-purple-fluid-wave-background-free-vector.jpg)` }}>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div>
                        <h1 className='text-white text-3xl md:text-6xl lg:text-6xl  font-medium'>Future Prodigy’s proven career results.</h1>
                        <p className='text-white text-base mt-7 '>Our courses have helped tens of thousands of people globally. And that number keeps growing everyday.</p>
                    </div>

                </div>
                <div></div>
            </div>

            <RevCarousel />
        </div>
    );
};

export default Reviews;


