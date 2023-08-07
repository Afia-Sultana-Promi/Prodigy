import React from 'react';
import { courses } from '../../data/data';
import Products from '../Products/Products';

const Ecommerce = () => {

    const allCourses = courses;

    return (
        <div>
            <Products products={allCourses[6].products}></Products>
        </div>
    );
};

export default Ecommerce;