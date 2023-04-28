import React, { useEffect, useState } from 'react';
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link} from 'react-router-dom';
import Job from "./Job";

const Jobs = () => {
  const [jobs, setJobs] =useState([])
  const [show, setShow] = useState(true)
  useEffect( () =>{
    fetch('joblists.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[])
    return (
        <div className="my-container">
        <div className=" bg-slate-100 flex justify-between items-center">
        <div>
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
        </div>
           <div>
           
           <div>
           <h1 className="mx-auto text-center text-2xl font-bold">All Jobs</h1>
           <hr className="border-2 w-10 border-orange-500 cursor-pointer mt-2  mx-auto" />
           </div>
           
            <div className='flex items-center gap-4 mt-3 mb-12'>
            <Link to= '/home' className="text-gray-500 hover:text-orange-500">Home</Link>
          <p className='text-gray-500'><FontAwesomeIcon icon={faGreaterThan} /></p>
            <p className="text-orange-500">All Jobs</p>
            </div>
            </div>
          <div>
          <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
          </div>
        </div>

       <section className=" search-part bg-slate-400 p-16 mt-10">
       <h1 className="text-center font-bold text-3xl">
         We offers <span className="text-purple-700 ">Thusands</span> of Jobs
       </h1>
       <div className=" md:flex lg:p-8">
         <input
           type="text"
           name="title"
           placeholder="Job Title"
           className="mx-4 my-4 w-50% p-4 w-full h-12"
         />
         <input
           type="text"
           name="location"
           placeholder="Location"
           className=" w-full mx-4 my-4 p-4 block h-12"
         />
         <button className=" h-12 w-64 md:w-96 bg-orange-600 mx-4 my-4 text-white rounded-md font-bold hover:bg-orange-700">
           SEARCH
         </button>
       </div>
       <h1 className="mx-4 md:mx-5 lg:mx-12">
         Browse job offers by Category or Location
       </h1>
     </section>

     <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
     { 
      show ?
     jobs.slice(0,5).map(job => <Job job={job} key={job.id}></Job>)
     :
     jobs.map(job => <Job job={job} key={job.id}></Job>)

     }
     </div>
   
     <div className='text-center'>
    { 
      show &&  <button onClick={() => setShow(false)} className=" h-12 w-40 bg-orange-600  my-4 text-white rounded-md font-bold hover:bg-purple-700">
      Get Started
    </button>
    }
     </div>
        </div>
    );
};

export default Jobs;