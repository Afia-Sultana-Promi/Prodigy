import React from 'react';
import useProductsStore from '../../store/products';
import { StarIcon } from '@heroicons/react/20/solid'

const Product = () => {
    const productState = useProductsStore((state) => state.productState)
    const product = productState.select?.success?.data;
    console.log(product);
    const reviews = { href: '#', average: 4, totalCount: 117 }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h1 className="lg:text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl my-4">{product.name}</h1>
                    <h2 className="text-sm font-semibold tracking-tight text-gray-800 sm:text-4xl">Technical Specifications</h2>
                    <p className="mt-4 text-gray-800">
                        {product.description}
                    </p>

                    <h1 className="text-base font-semibold tracking-tight text-gray-900 sm:text-4xl mt-4">Circuit Board</h1>

                    <img
                        src={product.circuit}
                        alt=""
                        className="rounded-lg bg-gray-100"
                    />

                </div>
                <div className="">
                    <img
                        src={product.image}
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />

                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">{product.price} tk</p>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='flex w-full gap-8'>
                        <button

                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-deep-purple-400 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add to cart
                        </button>
                        <button

                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-deep-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Shop now
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Product;