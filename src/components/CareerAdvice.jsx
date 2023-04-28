import React from 'react';
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png';
import { useState } from 'react';
import { useEffect } from 'react';
import CareeedAdviceData from './CareeedAdviceData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import PopularPost from './PopularPost';
import RecentPosts from './RecentPosts';
import CareeerCategories from './CareeerCategories';
const CareerAdvice = () => {
    const [advice, setAdvice] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setAdvice(data))
    },[])

    useEffect(() => {
        fetch('sectors.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='my-container'>
        <div className="my-container bg-slate-100 flex items-center">
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
           <h1 className="mx-auto text-center text-2xl font-bold">Carrier Advice</h1>
           <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
       </div>


       <div className='mt-10 md:flex gap-10' >
       
       <div className='w-full md:w-2/5 grid md:grid-cols-2 gap-5' >
       {
        advice.map(ad => <CareeedAdviceData ad={ad} id={ad.id}></CareeedAdviceData>)
       }
       </div>

       <div className="w-full md:w-2/5 mt-10 md:mt-0 " >
        <div className="flex">
        <input type="text" placeholder="Search" className="p-4 w-full outline-none" />
       <button className="bg-orange-500 p-4 hover:bg-orange-700  "><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
        </div>
        <div className="">
        <h2 className="text-xl mt-10 font-bold">Popular Posts</h2>
        <div className="flex mt-4 ">
        <hr className="border w-10 border-orange-500 cursor-pointer " />
        <hr className=" w-full border-gray-300  cursor-pointer " />
        </div>
        <div className="mt-4">
        {
         advice.map(ad => <PopularPost ad={ad} key={ad.key}></PopularPost>)
        }
        </div>

        <div className="">
        <h2 className="text-xl mt-10 font-bold">Recent Posts</h2>
        <div className="flex mt-4">
        <hr className="border w-10 border-orange-500 cursor-pointer " />
        <hr className=" w-full border-gray-300  cursor-pointer " />
        </div>
        <div className="mt-4">
        {
         advice.map(ad => <RecentPosts ad={ad} key={ad.id}></RecentPosts>)   
        }
        </div>
        </div>

        <div className="categories">
        <h3 className="text-xl mt-10 font-bold">Categories</h3>
        <div className="flex mt-4">
        <hr className="border w-10 border-orange-500 cursor-pointer " />
        <hr className=" w-full border-gray-300  cursor-pointer " />
        </div>

        <div className="">
        {
         category.slice(0,10).map(ct => <CareeerCategories ct={ct} key={ct.id}></CareeerCategories>)
        }
        </div>
        </div>


        </div>
       </div>
        
       </div>
        </div>
    );
};

export default CareerAdvice;