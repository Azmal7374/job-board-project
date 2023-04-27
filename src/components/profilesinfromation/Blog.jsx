import React, { useEffect, useState } from 'react';
import vector1 from '../../assets/Vector.png';
import vector2 from '../../assets/Vector-1.png';
import LatestNews from '../LatestNews';
const Blog = () => {
    const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
    .then((res) => res.json())
    .then((data) => setNews(data));
  },[])
    return (
        <div className='w-full mr-8'>
                <div className=" bg-slate-100 flex items-center">
                <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
                   <h1 className="mx-auto text-center text-2xl font-bold">Blog</h1>
                   <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
               </div>

               <section className="bg-white   search-part p-4 mt-10">
               <div className=" md:flex  ">
                 <input
                   type="text"
                   name="title"     
                   placeholder="Search Post"
                   className="w-full my-4 md:mx-4 p-4 h-12 border border-purple-400 hover:border-orange-600 outline-none"
                 />
               
                 <button  className="h-12  p-3 md:my-4 bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 text-center">
                   SEARCH
                 </button>
               </div>
   
               <section className="mt-10">
              
       
               <div className="mt-10 grid md:grid-cols-2  gap-4 justify-center">
               {
                 news.map( nw =>  <LatestNews nw={nw} key={nw.id}></LatestNews>)
               }
               </div>
             </section>
       
             </section>
        </div>
    );
};

export default Blog;