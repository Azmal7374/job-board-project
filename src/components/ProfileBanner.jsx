import React from 'react';
import vector1 from '../assets/Vector.png';
import vector2 from '../assets/Vector-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import jobs from '../assets/41389-interview-get-ready-to-work-job-recruitment-isometric-hiring-process.json'

import  { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';


const ProfileBanner = () => {
  const data = [
    {
      name: 'Education',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Requirements',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Experience',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Quality',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Tencnique',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Status',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  
    return (
       <div>
       <div className='w-full sticky mr-4'>
       <div className=" bg-slate-100 flex justify-between items-center">
       <div>
       <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
       </div>
          <div>
          
          <div>
          <h1 className="mx-auto text-center text-2xl font-bold">Profile</h1>
          <hr className="border-2 w-10 border-orange-500 cursor-pointer mt-2  mx-auto" />
          </div>
          
           <div className='flex items-center gap-4 mt-3 mb-12'>
           <Link to= '/home' className="text-gray-500 hover:text-orange-500">Home</Link>
         <p className='text-gray-500'><FontAwesomeIcon icon={faGreaterThan} /></p>
           <p className="text-orange-500">Profile</p>
           </div>
           </div>
         <div>
         <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
         </div>
       </div>
        
      </div>
       <section className='mt-8 md:flex gap-10 justify-center items-center'>
       <div className=''>
       <Lottie className='w-96' animationData={jobs} loop={true} />
       </div>

       <div className='mt-8 md:mt-0 md:ml-20'>
       <h2 className='text-2xl font-bold'>Advance your career with <span className="text-purple-500">JobBoard</span></h2>
       <p className='mt-4 text-gray-500'> Create a free account, complete your profile, and get matched with your dream job.</p>
       <button className=" h-12 w-40 bg-orange-600  my-4 text-white rounded-md font-bold hover:bg-purple-700">
       Get Started
     </button>
       </div>
       </section>


       <section className='mt-10 md:flex gap-10 justify-center items-center'>
       <div style={{ width: '70%', height: 300 }}>
       <ResponsiveContainer>
         <ComposedChart
           width={500}
           height={400}
           data={data}
           margin={{
             top: 20,
             right: 20,
             bottom: 20,
             left: 20,
           }}
         >
           <CartesianGrid stroke="#f5f5f5" />
           <XAxis dataKey="name" scale="band" />
           <YAxis />
           <Tooltip />
           <Legend />
           <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
           <Bar dataKey="pv" barSize={20} fill="#413ea0" />
           <Line type="monotone" dataKey="uv" stroke="#ff7300" />
         </ComposedChart>
       </ResponsiveContainer>
     </div>
       <div className="mt-8 md:mt-0">
    
       <h1 className="text-2xl font-bold leading-tight">
         One Step  Closer To Your  
         <span className="text-purple-500"> Dream Job</span>
       </h1>
       <p className="mt-4 text-gray-600">
         Explore thousands of job opportunities with all the information you need its future.Come find it. Mange all your application from start to finish.
       </p>

       <button className="mt-5 h-12 p-4  bg-orange-600 mx-4  text-white rounded-md font-bold hover:bg-purple-700 ">
         Get Started
       </button>
     </div>

       </section>
       </div>
    
    );
};

export default ProfileBanner;