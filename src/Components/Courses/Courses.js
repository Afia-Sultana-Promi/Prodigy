import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { courses } from '../../data/data';
import useCourseStore from '../../store/courses';
import { Link } from 'react-router-dom';

const Courses = () => {


    const allCourses = courses;
    const selectCourse = useCourseStore((state) => state.selectCourse);


    return (
        <div className='max-w-7xl mx-auto my-32'>

            <h1 className='text-3xl font-bold text-center'>Checkout our courses</h1>
            <div className='grid grid-col-1 md:grid-cols-3 mt-10 gap-10 '>
                {allCourses.map((course, i) =>
                    <Link key={i} to='/course'>
                        <div className="rounded overflow-hidden shadow-lg hover:scale-110 duration-700 hover:bg-deep-purple-400 hover:text-white hover:cursor-pointer"
                            onClick={() => selectCourse(course)}>
                            <Player
                                src={course.image}
                                className="player"
                                loop
                                autoplay
                                style={{ height: '300px', width: '300px' }}
                            />


                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-center">{course.name}</div>

                            </div>
                            <div className="px-6 pt-4 pb-2 flex justify-center">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{course.courses} courses</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{course.workshops} workshops</span>

                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Courses;

