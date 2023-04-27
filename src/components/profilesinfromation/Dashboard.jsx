import React, { useEffect } from 'react';
import vector1 from '../../assets/Vector.png';
import vector2 from '../../assets/Vector-1.png';
import { Link } from 'react-router-dom';
import Job from '../Job';
import { useState } from 'react';
import DashBoardJobs from './DashBoardJobs';
import { FolderPlusIcon } from "@heroicons/react/24/solid";
const Dashboard = () => {
    const [show, setShow] = useState(true)
    const [jobs, setJobs] =useState([])
    useEffect(()=>{
        fetch('/joblists.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="w-full mr-8">
            
        <div className=" bg-slate-100 flex items-center">
        <img className='w-32 md:w-64 lg:w-96' src={vector1} alt="" />
           <h1 className="mx-auto text-center text-2xl font-bold">DashBoard</h1>
           <img className='w-32 md:w-64 lg:w-96' src={vector2} alt="" />
       </div>
    
            <section className="bg-white search-part p-8 mt-10">
            <div className=" md:flex  ">
              <input
                type="text"
                name="title"     
                placeholder="Job Title"
                className="w-full my-4 md:mx-4 p-4 h-12 border border-purple-400 hover:border-orange-600 outline-none"
              />
              <input
                type="text"
                name="location" 
                placeholder="Location"
                className="w-full md:mx-4  my-4 p-4 block h-12 border border-purple-400 hover:border-orange-600 outline-none"
              />
              <button  className="h-12  p-3 md:my-4 bg-orange-600 text-white rounded-md font-bold hover:bg-orange-700 text-center">
                SEARCH
              </button>
            </div>

            
          </section>
          <div className="flex gap-4 bg-white mt-4 p-3">
            <Link to='/home'><p className="text-orange-500 hover:text-purple-300 hover:underline">Home</p></Link>
            <p className="text-gray-500"> / </p>
            <Link to=''><p className="text-orange-500">Recent Job Alert</p></Link>
            </div>
            
          <section className="mt-4 grid md:grid-cols-2 gap-4 border p-4">
          <div className="mt-4">
          <h1 className='font-bold text-2xl'>Most Recent Jobs</h1>
          <div className="mt-4 grid gap-4">
          {show ? jobs.slice(0,8).map((job) => (
            <DashBoardJobs job={job} key={job.id}></DashBoardJobs>))
            :
            jobs.map((job) => (
                <DashBoardJobs job={job} key={job.id}></DashBoardJobs>))
        }
        
        </div>
        <div className="mt-4 text-center">
       {
          show &&
        <button onClick={()=> setShow(false)} className="bg-purple-600  p-3 rounded-md text-white font-bold hover:bg-purple-700"> Load More Jobs</button>
       }
        </div>
          </div>
       
          <div  className="mt-16 bg-white shadow-md p-2">
         

           <div className="bg-white rounded-lg ">
           <div className="   flex ">
             <div className="flex justify-center items-center mt-16 ml-4 h-20 w-20 md:w-28 border border-gray-200 rounded-md p-2 ">
               <button className="bg-pink-300 w-10 h-10 rounded-full ">
                 <FolderPlusIcon className="w-5 ml-2"></FolderPlusIcon>
               </button>
             </div>
             <div className="card-body">
               <h2 className="text-xl">Amazon</h2>
               <p className="text-2xl font-bold">Financial Analyst</p>
               <p className="text-orange-500">General</p>
               <p className="">Seattle, WA</p>
             </div>
             <div className="p-4 text-white font-bold">
              <Link to='/'>
              <button className="bg-orange-600 lg:w-20 p-1 rounded-md hover:bg-orange-700">
              Apply
            </button>
              </Link>
             </div>
     
           </div>
           
           <h2 className='font-semibold text-xl'>Job Description</h2>
           <p>Seattle, WA</p>
           <p className='text-gray-500 mt-3'>Augmedix (Nasdaq: AUGX) delivers industry-leading, ambient medical documentation and data solutions to healthcare systems, physician practices, hospitals, and telemedicine practitioners. 
           </p>
        <p className='text-gray-500 mt-3'>Augmedix is on a mission to help clinicians and patients form a human connection at the point of care without the intrusion of technology. Augmedix’s solutions extract data from natural physician-patient conversations and convert it to medical notes in real time, which are seamlessly transferred to the EHR. To achieve this, the company’s Ambient Automation Platform uses Automated Speech Recognition and Natural Language Processing, supported by medical documentation specialists.</p>
        <p className='text-gray-500 mt-3'>Leveraging this platform, Augmedix’s solutions relieve clinicians of administrative burden, in turn, reducing burnout and increasing both clinician and patient satisfaction. Augmedix is also leading the revolution in leveraging point-of-care data by making connections between millions of physician-patient interactions and analyzing them to deliver actionable insights that elevate patient care.
        </p>
        <p className='text-gray-500 mt-3'>About the Role:</p>
        <p className='text-gray-500 mt-3'>Augmedix is looking for an experienced iOS Engineer for the position of Staff Software Engineer (iOS) with mobile app development experience and knowledge of the iOS platform. Your primary focus will be the development of iOS applications and their integration with back-end services. You will be working alongside other engineers and developers working on different layers of the infrastructure. Therefore, a commitment to collaborative problem-solving, sophisticated design, and the creation of quality products is essential.</p>
         </div>

         <ul className='list-disc text-gray-500 mt-3 bg-white '>
         <p>Responsibilities:</p>
         <div className="ml-20">
         <li>Design and build applications for the iOS platform</li>
         <li>Ensure the performance, quality, and responsiveness of applications</li>
         <li>Collaborate with a team to define, design, and ship new features</li>
         <li>dentify and correct bottlenecks and fix bugs</li>
         <li>Help maintain code quality, organization, and automatization</li>
         <li>Translate designs and wireframes into high-performance, reusable, and reliable code</li>
         <li>Process-oriented with the ability to work with different UI materials and rapid prototyping</li>
         <li> Document code consistently throughout the development process and perform peer code review</li>
         <li> Experience in communicating with both technical and non-technical overseas teams</li>
         <li>In addition to having excellent technical skills, you have to have a keen interest in the latest technologies and have a feel for a better user experience
         </li>
         </div>
        
         </ul>

         <ul className='list-disc text-gray-500 mt-3 bg-white'>
         <p>Requirements:</p>
         <div className="ml-20">
         <li>3 to 5 years of software development experience in the iOS Platform</li>
         <li>Proficient with Swift, SwiftUI, and Objective C</li>
         <li> Experience in working with Responsive/Reactive Frameworks i.e. RxSwift, Combine, etc.</li>
         <li>Identify and correct bottlenecks and fix bugs</li>
         <li>Experience with iOS frameworks such as Core Data, Core Animation, etc.</li>
         <li> Experience with offline storage, threading, and performance tuning</li>
         <li> Familiarity with RESTful APIs to connect iOS applications to back-end services</li>
         <li>Knowledge of other web technologies and UI/UX standards
         </li>
         <li> Experience in communicating with both technical and non-technical overseas teams</li>
         <li>Experience with the Crashlytics tool
         </li>
         <li>Familiarity with CI/CD pipeline
         </li>
         </div>
        
         </ul>

         <ul className='list-disc text-gray-500 mt-3 bg-white'>
         <p className='text-gray-500 mt-3 bg-white'>Nice to Have:</p>
         <div className="ml-20 text-gray-500 mt-3 bg-white">
         <li>Proficiency in speaking and writing English </li>
         <li> Knowledge of the Android/Kotlin platform will be considered as +</li>
         <li>  Knowledge of low-level C-based libraries is preferred</li>
         <li> Experience with performance and memory tuning with tools (such as Instruments and Shark)</li>
         <li>Familiarity with cloud message APIs and push notifications</li>
         <li> Experience with offline storage, threading, and performance tuning</li>
         <li> Experience in deploying apps in Apple Store</li>
         
         </div>
        
         </ul>
         <p className='text-gray-500 mt-3 bg-white'>Augmedix is an equal opportunity employer. We are committed to providing equal employment opportunities regardless of sex, gender identity, race, religious creed, color, ancestry, age, disability, marital status, sexual orientation including being transgender and/or any other protected bases.

         </p>
         <hr className='mt-4' />

         <div className="text-center mb-3 mt-3 flex justify-between ">
         <p className="bg-white p-4 shadow-lg text-purple-500 hover:text-gray-500 hover:underline">Report this job</p>
         <Link to='/'>
         <button className="bg-white  p-2 rounded-md hover:bg-orange-500 w-24 text-orange-400 font-bold outline-none border border-orange-500 hover:text-white">Apply</button>
         </Link>
         </div>
          </div>
          </section>
        </div>
    );
};

export default Dashboard;