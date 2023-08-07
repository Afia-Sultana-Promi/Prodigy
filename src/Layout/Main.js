import React from 'react';
import { Outlet } from 'react-router-dom';
import TestNav from '../Components/TestNav/TestNav';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TestNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;