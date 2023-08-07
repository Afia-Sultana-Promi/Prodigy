import React from 'react';
import { Link } from 'react-router-dom';
import useProductsStore from '../../store/products';

const Products = ({ products }) => {
    const selectProduct = useProductsStore((state) => state.selectProduct);

    return (
        <div>
            <div className="relative overflow-hidden bg-white mt-16">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Arduino Chips are finally here
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                This year, our new summer collection of arduino chip set is available in
                                <span className='text-purple-400 font-bold ml-2'>Future Prodigy</span>
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/A000005_03.front_2c44e4db-5d01-45ec-9b14-78b6df214913_804x603.jpg?v=1628695116"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/ABX00021_03.front_89330d8b-5527-448c-b227-e297a159eba3_1000x750.jpg?v=1626444977"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/A000067_03.unbox_804x603.jpg?v=1637830354"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/ABX00073_03.front_1c63265b-b8ef-4113-9ae9-9e9e880f9185_412x309.jpg?v=1673531014"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/A000056_03.front_412x309.jpg?v=1626444755"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/ABX00050_03.front_412x309.jpg?v=1631089821"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <img
                                                        src="https://store-usa.arduino.cc/cdn/shop/products/A000005_05.box_804x603.jpg?v=1628695116"
                                                        alt=""
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <a
                                    href="/"
                                    className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                                >
                                    Browse Collection
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className='text-3xl font-semibold'>Browse our products</h1>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {products.map((product, i) => (
                        <Link key={i} to='/product' className="group" onClick={() => selectProduct(product)}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.image}
                                    alt={product.image}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-green-800">{product.price}৳ </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;