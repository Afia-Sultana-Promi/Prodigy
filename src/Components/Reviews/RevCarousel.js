import React from 'react';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { GoPrimitiveDot } from 'react-icons/go';

const RevCarousel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-20'>
                        <div className='h-[560px] bg-deep-purple-700 w-[350px] mt-20 rounded-tr-[80px] px-4 py-8 pb-4'>

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
                        <div className='h-[560px] bg-deep-purple-700 w-[350px] mt-20 rounded-br-[80px] px-4 py-8 pb-4'>

                            <div className='flex justify-center gap-5 items-center py-16'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3I2bUo4Uj0dIR4jSTLyfio/5d985dbbf2dbaa49d0307c9c148e2e4f/student-lara.png?fm=webp&h=150&q=100&w=150" alt="" />
                                    </div>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-sm font-medium'>Lara Martin</h1>
                                    <p>Mobile QA</p>
                                    <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/4LG2ilYFHm4oSClB8V55qX/743b579461964b816e8d58cbf0ed2267/flixbus_logo.svg?fm=webp&q=100" alt="" className='mt-5' />

                                </div>

                            </div>

                            <hr className='border-b-[1px] border-blue-300' />
                            <div className='text-white flex flex-col justify-start items-start mt-8 gap-5'>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' /> Member of Women Techmakers in Berlin</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />First app she ever created won "Best App"</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Seeks to become a full-time Android Developer</p>
                            </div>
                        </div>
                        <div className='h-[560px] bg-deep-purple-700 w-[350px] mt-20 rounded-tl-[80px] px-4 py-8 pb-4'>

                            <div className='flex justify-center gap-5 items-center py-16'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/57fzg2HS0H4PCRChkpjVI3/912e82619379f548c22f4cdb2f2478b5/student-jose.png?fm=webp&h=150&q=100&w=150" alt="" />
                                    </div>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-sm font-medium'>Jose Nieto</h1>
                                    <p>Android Developer</p>
                                    <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/30QLoDJbskspL9qA5tLYiS/e5768aa249d084d9565eb5471386fcc3/logo-white-idscan.svg?fm=webp&q=100" alt="" className='mt-5' />

                                </div>

                            </div>

                            <hr className='border-b-[1px] border-blue-300' />
                            <div className='text-white flex flex-col justify-start items-start mt-8 gap-5'>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' /> Received PhD in Organic Chemistry</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Started out by building basic apps for fun</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Now full-time Android Developer</p>
                            </div>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center lg:flex-row justify-center gap-20'>
                        <div className='h-[560px] bg-deep-purple-700 w-[350px] mt-20 rounded-bl-[80px] px-4 py-8 pb-4'>

                            <div className='flex justify-center gap-5 items-center py-16'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/57fzg2HS0H4PCRChkpjVI3/912e82619379f548c22f4cdb2f2478b5/student-jose.png?fm=webp&h=150&q=100&w=150" alt="" />
                                    </div>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-sm font-medium'>Jose Nieto</h1>
                                    <p>Android Developer</p>
                                    <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/30QLoDJbskspL9qA5tLYiS/e5768aa249d084d9565eb5471386fcc3/logo-white-idscan.svg?fm=webp&q=100" alt="" className='mt-5' />

                                </div>

                            </div>

                            <hr className='border-b-[1px] border-blue-300' />
                            <div className='text-white flex flex-col justify-start items-start mt-8 gap-5'>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' /> Received PhD in Organic Chemistry</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Started out by building basic apps for fun</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Now full-time Android Developer</p>
                            </div>
                        </div>
                        <div className='h-[560px] bg-deep-purple-700 w-[350px] mt-20 rounded-tl-[80px] px-4 py-8 pb-4'>

                            <div className='flex justify-center gap-5 items-center py-16'>
                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/72pLAhXtVo1OaUUJxEPWK3/9ca8d96a344f48a1f14c42655fc3b037/student-joe.png?fm=webp&h=150&q=100&w=150" alt="" />
                                    </div>
                                </div>
                                <div className='text-white'>
                                    <h1 className='text-sm font-medium'>Joe Goodall</h1>
                                    <p>Mobile Developer</p>
                                    {/* <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/1slgmCtCos3fN8o7iNTV0P/718290ffd972dde4e06e0a4ccf4176e6/logo-white-badoo.svg?fm=webp&q=100" alt="" className='mt-5' /> */}

                                </div>

                            </div>

                            <hr className='border-b-[1px] border-blue-300' />
                            <div className='text-white flex flex-col justify-start items-start mt-8 gap-5'>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Formerly a personal trainer</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Self taught basic programmer</p>
                                <p className='flex items-center my-2'><GoPrimitiveDot className='text-blue-300 mr-4' />Now builds android apps in sports and health</p>
                            </div>
                        </div>
                        <div className='h-[560px] bg-deep-purple-700 w-[350px] mt-20 rounded-br-[80px] px-4 py-8 pb-4'>

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

                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default RevCarousel;


