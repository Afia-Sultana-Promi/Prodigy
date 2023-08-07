import React from 'react';
import TopBanner from '../../Components/TopBanner/TopBanner';
import MarqueeComp from '../../Components/Marquee/Marquee';
import Reviews from '../../Components/Reviews/Reviews';
import Courses from '../../Components/Courses/Courses';
import MobileApp from '../../Components/MobileApp/MobileApp';
import Stats from '../../Components/Stats/Stats';
import Ecommerce from '../../Components/E-commerce/Ecommerce';

const Home = () => {
    return (
        <div className='bg-white'>
            <TopBanner />
            <div className='max-w-7xl mx-auto'>
                <div>
                <div class="flex justify-center">
                    <h1 className='font-bold mb-10'>All of these companies are looking for you</h1>
                </div>
                <MarqueeComp />
            </div>
            <Stats />
            <Courses />
            <Ecommerce />
            <MobileApp />
</div>
        </div>
    );
};

export default Home;