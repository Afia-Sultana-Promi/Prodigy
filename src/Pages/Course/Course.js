import React from 'react';
import useCourseStore from '../../store/courses';
import Products from '../../Components/Products/Products';


const Course = () => {

    const courseState = useCourseStore((state) => state.courseState)
    const data = courseState.select?.success?.data;
    console.log(data.products)

    return (
        <div className='max-w-6xl mx-auto mt-14'>
            <div className='flex gap-4 items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png" alt="" className='h-20 w-20' />
                <h1 className='text-4xl font-bold'>{data.name} course</h1>
            </div>
            <p className='text-xl font-semibold mt-4 text-gray-800' >Learn {data.name} and build your career</p>

            <div className='flex items-center gap-2 mt-12'>
                <img src="https://cdn.ostad.app//public/upload/2023-05-23T12-42-32.470Z-image%2019.png" alt="" />
                <h1 className='text-xl font-semibold'>Live course and workshops</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {data?.details?.courses?.map((c, i) =>
                    <div className="rounded overflow-hidden shadow-lg hover:scale-105 duration-700 max-w-xl hover:cursor-pointer"
                    >
                        <img src={c.thumbnail} alt="" />


                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">{c.name}</div>

                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-extrabold text-gray-900 mr-2 mb-2">৳ </span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-bold text-gray-900 mr-2 mb-2">{c.price}</span>

                        </div>
                    </div>)}
            </div>

            <div className='mt-16'>
                <div className='flex gap-4 items-center mb-8'>
                    <img src="https://cdn.ostad.app//public/upload/2023-05-02T07-32-06.981Z-image25.svg" alt="" />
                    <h1 className='text-3xl font-bold'>Course Instructor</h1>
                </div>




                <div className="rounded overflow-hidden shadow-lg w-[240px] hover:cursor-pointer"
                >
                    <img src={data?.details?.instructor?.image} alt="" className='max-w-[280px]' />

                    <div className="px-6 pt-4 pb-2 flex flex-col justify-center">
                        <h1 className='text-lg font-semibold'>{data?.details?.instructor?.name}</h1>
                        <p className='text-sm'>{data?.details?.instructor?.details}</p>
                    </div>
                </div>

                {data?.products ?
                    <Products products={data.products}></Products>
                    :
                    ""}

            </div>
        </div>
    );
};

export default Course;