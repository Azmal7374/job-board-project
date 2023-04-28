import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
const LatestNews = ({nw}) => {
    const {id, cvTitle, by,image,  date, details} = nw 
        return (
        <div className="hover:scale-y-105 delay-75 transition-shadow">
            
            <div className="card   h-4/3 bg-base-100 shadow-xl">
  <figure><img src=
  {image} alt="Shoes" className='h-96 hover:scale-y-105 delay-75 transition-shadow ' /></figure>
  <div className='flex ml-10 gap-3 mt-2 text-gray-500 hover:hidden'>
  <p>By: <span className="text-orange-400">{by}</span></p>
  <p> /</p>
  <p>{date}</p>
  </div>
  <div className="p-4 hover:scale-y-105">
    <h1 className='text-orange-600 font-bold text-xl'>{cvTitle}</h1>
    <p className="text-gray-500 mt-2">{details.slice(0,250)}...</p>
    <Link className=" hover:block"><p className='text-orange-500'>Read more <FontAwesomeIcon icon={faArrowRight} className='ml-2' /></p></Link>
  </div>
</div>
        </div>
    );
};

export default LatestNews;