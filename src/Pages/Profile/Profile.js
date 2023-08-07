import React, { useContext } from 'react';
import { AuthContext } from '../../../src/Context/Auth/AuthProvider';
import { FaRegUser } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'
import { AiTwotonePhone } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const Profile = () => {

    const { user } = useContext(AuthContext)




    console.log(user)


    return (
        <body className="bg-base-100 antialiased mt-20">
            <div className="container mx-auto my-20">
                <div>

                    <div className="bg-base-100 relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto mt-44">
                        <div className="flex justify-center">

                            {user.photoURL ?
                                <img src={user.photoURL} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" /> :
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskE_K0tR332USgjzlAjZNS53Y84Nl9O1wMg&usqp=CAU" alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                            }

                        </div>

                        <div className="mt-16">
                            <h1 className="font-bold text-center text-3xl">{user.displayName}</h1>
                            <p className="text-center text-sm font-medium mt-2">{user.email}</p>

                            <div className="w-full">
                                <h3 className="font-semibold text-left my-2 px-6">Personal details</h3>
                                <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                    <a href="/" className="w-full border-t border-gray-100 md:py-4 md:pl-6 md:pr-3 hover:bg-gray-100 transition duration-150 flex justify-center md:justify-start items-center">
                                        <FaRegUser className='inline mr-3 text-lg text-yellow-300 font-bold' />
                                        <span className="text-sm block">User name : </span>
                                        <span className="ml-2 text-base block">{user.displayName}</span>
                                    </a>

                                    {
                                        user.email ?
                                            <a href="/" className="w-full border-t border-gray-100 md:py-4 md:pl-6 md:pr-3 hover:bg-gray-100 transition duration-150 flex justify-center md:justify-start items-center">
                                                <FiMail className='inline mr-3 text-lg text-orange-500 font-bold' />
                                                <span className="text-sm block">User email : </span>
                                                <span className="ml-2 text-base block">{user.email}</span>
                                            </a> :
                                            ""

                                    }
                                    {
                                        user.road ?
                                            <a href="/" className="w-full border-t border-gray-100 md:py-4 md:pl-6 md:pr-3 hover:bg-gray-100 transition duration-150 flex justify-center md:justify-start items-center">
                                                <ImLocation2 className='inline mr-3 text-lg text-green-500 font-bold' />
                                                <span className="text-sm block">Address : </span>
                                                <span className="ml-2 text-sm block">Road: {user.road}, House: {user.house}, Area: {user.area}, Postal Code: {user.postal}</span>
                                            </a> :
                                            <a href="/" className="w-full border-t border-gray-100 md:py-4 md:pl-6 md:pr-3 hover:bg-gray-100 transition duration-150 flex justify-center md:justify-start items-center">
                                                <ImLocation2 className='inline mr-3 text-lg text-green-500 font-bold' />
                                                <span className="text-sm block">Address : </span>
                                                <span className="ml-2 text-base block text-red-500">No address set yet</span>
                                            </a>
                                    }
                                    {
                                        user.phone ?
                                            <a href="/" className="w-full border-t border-gray-100 md:py-4 md:pl-6 md:pr-3 hover:bg-gray-100 transition duration-150 flex justify-center md:justify-start items-center">
                                                <AiTwotonePhone className='inline mr-3 text-lg text-purple-500 font-bold' />
                                                <span className="text-sm block">Contact no. : </span>
                                                <span className="ml-2 text-base block">{user.phone}</span>
                                            </a> :
                                            <a href="/" className="w-full border-t border-gray-100 md:py-4 md:pl-6 md:pr-3 hover:bg-gray-100 transition duration-150 flex justify-center md:justify-start items-center">
                                                <AiTwotonePhone className='inline mr-3 text-lg text-purple-500 font-bold' />
                                                <span className="text-sm block">Contact no. : </span>
                                                <span className="ml-2 text-base block text-red-500">No contact no. set yet</span>
                                            </a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link to="/dashboard/update_profile">
                        <p className="flex justify-center py-2 mx-auto my-10 w-72 border-2 bg-deep-purple-400 border-deep-purple-400 text-white rounded-2xl hover:bg-base-100 hover:text-white hover:border-purple-400 text shadow-sm shadow-purple-400 hover:shadow-lg hover:shadow-purple-400 duration-300">Update profile</p>
                    </Link>
                </div>
            </div>
        </body>
    );
};

export default Profile;