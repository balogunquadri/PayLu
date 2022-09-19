import React from 'react'
// import { object } from 'prop-types';
import requests from "../utils/requests"
import { useRouter } from 'next/router';

function Nav() {
    const router = useRouter();
    // var i = requests
    // console.log(i)
    return (
        <nav className="relative">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-default ">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} onClick={() => router.push(`/?genre=${key}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-black active:text-red-500">{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0  h-10 w-1/12" />
        </nav>
    );
}

export default Nav
