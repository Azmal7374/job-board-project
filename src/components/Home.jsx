import React, { useEffect, useState } from "react";
import Job from "./Job";
import banner from "../assets/banner.png";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import JobList from "./JobList";
import Marquee from "react-fast-marquee";
import cocacola from "../assets/cocacola.png";
import microsoft from "../assets/microsoft.avif";
import ebay from "../assets/ebay.png";
import amazon from "../assets/amazon.jpg";
import ups from '../assets/ups.png'
import georgia from "../assets/georgia.png";
import penstate from "../assets/penstate.png";
import guardian from "../assets/theguardian.png";
import huffpost from "../assets/huffpost.png";
import firbes from "../assets/forbes.webp";
import { Link } from "react-router-dom";
import { Children } from "react";
import { useReducer } from "react";
import LatestNews from "./LatestNews";
import Dashboard from "./profilesinfromation/Dashboard";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const [input1data,setinput1data] = useState();
  const [input2data,setinput2data] = useState();

  useEffect(() => {
    fetch("joblists.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("/categorylist.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);


  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
    .then((res) => res.json())
    .then((data) => setNews(data));
  },[])

  const handleinput1 = (event) =>{
    setinput1data((event.target.value));

  };
  const handleinput2 = (event) =>{
    setinput2data((event.target.value));

  };

  const handleSearch = () =>{
    const data = jobs.map((job) =>{
       if(job.job_title === input1data && job.location === input2data){
        setJobs(job);
        console.log(job);
      //  console.log('hello');
       } 
       else{
      
        // console.log('not found');
       }
      })
      
  }
   console.log(jobs.length);
   console.log(typeof jobs);
  return (
    <div className="my-container">
      <section className="banner-section   bg-slate-100 md:flex justify-between items-center">
        <div className="">
          <h1 className="text-3xl font-bold leading-tight">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-purple-500">Dream Job</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need its future.Come find it. Mange all <br /> your
            application from start to finish.
          </p>

          <button className="mt-5 h-12 p-4  bg-orange-600 mx-4  text-white rounded-md font-bold hover:bg-orange-700 ">
            Get Started
          </button>
        </div>

        <div>
          <img
            className="mt-5 object-fill h-full w-96 md:mr-4 lg:mr-10"
            src={banner}
            alt=""
          />
        </div>
      </section>

      <section className=" search-part bg-slate-400 p-16 mt-10">
        <h1 className="text-center font-bold text-3xl">
          We offers <span className="text-purple-700 ">Thusands</span> of Jobs
        </h1>
        <div className=" md:flex lg:p-8">
          <input
            type="text"
            name="title"   value={input1data} onChange={handleinput1}
            placeholder="Job Title"
            className="mx-4 my-4 w-50% p-4 w-full h-12"
          />
          <input
            type="text"
            name="location"  value={input2data} onChange={handleinput2}
            placeholder="Location"
            className=" w-full mx-4 my-4 p-4 block h-12"
          />
          <button onClick={handleSearch} className=" h-12 w-64 md:w-96 bg-orange-600 mx-4 my-4 text-white rounded-md font-bold hover:bg-orange-700">
            SEARCH
          </button>
        </div>
        <h1 className="mx-4 md:mx-5 lg:mx-12">
          Browse job offers by Category or Location
        </h1>
      </section>

      <section className="job-category-list-section  my-10">
        <h1 className="text-3xl font-bold text-black text-center">
          Find the right job Sectors
        </h1>

        <Marquee className="text-gray-600" direction="left" speed={100}>
          <p className="mt-4 text-gray-600 text-center">
            Explore thousands of job opportunities with all the information you
            need its your future
          </p>
        </Marquee>
        <div className=" mt-4  my-container grid  grid-cols-2 lg:grid-cols-4 justify-center gap-8">
          {lists.map((list) => (
            <JobList list={list} key={list.jobs}></JobList>
          ))}
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-2 md:gap-10">
        <div className="">
          <img className="rounded-md" src={banner2} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">
            Advance your career with JobBoard
          </h1>
          <p className="mt-2 text-gray-600">
            Create a free account, complete your profile, and get matched with
            your dream job.
          </p>
          <button className=" h-12 w-40 bg-orange-600  my-4 text-white rounded-md font-bold hover:bg-orange-700">
            Get Started
          </button>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold">Get seen by employers</h2>
              <p className="mt-2 text-gray-600">
                With a complete profile, your applications and profile are
                promoted to top employers, so you stand out.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                Get access to top jobs first
              </h2>
              <p className="mt-2 text-gray-600">
                Sign up for job alerts and be first in line for the latest jobs
                that match your profile.
              </p>
            </div>
          </div>
        </div>

        <div></div>
      </section>

      <section className="jobs-listing mt-10">
        <h2 className="text-center font-bold text-3xl">Recent listing</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {jobs.length > 0 && jobs.map((job) => (
            <Job job={job} key={job.id}></Job>
            
          ))}
        
        </div>
      </section>

      <section className="mt-10 grid md:grid-cols-2 md:gap-10">
        <div>
          <img className="rounded-md" src={banner3} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Instant Job Finder</h1>
          <p className="mt-2 text-gray-600">
            At JobBoard our job finder system updates the database every 5
            minutes so you are rest assured you will be getting you Dream Job
          </p>

          <h1 className="text-2xl font-semibold">
            Get access to top jobs first
          </h1>
          <p className="mt-2 text-gray-600">
            Sign up for job alerts and be first in line for the latest jobs that
            match your profile.
          </p>
          <button className=" h-12 w-40 bg-orange-600  my-4 text-white rounded-md font-bold hover:bg-orange-700">
            Get Started
          </button>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <p className=" text-orange-600 font-semibold">LATEST NEWS</p>
          <h1 className="mt-2 text-3xl font-bold">Our Latest Articles</h1>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {
          news.map( nw =>  <LatestNews nw={nw} key={nw.id}></LatestNews>)
        }
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <p className=" text-orange-600 font-semibold">COMPANYS</p>
          <h1 className="mt-2 text-3xl font-bold">Our Top Recruiters</h1>
        </div>
        <div className="mt-16  grid grid-cols-2 md:grid-cols-5 gap-10 ">
          <div className="bg-gray-200 p-4 rounded-md flex items-center">
            <Link to='https://www.coca-colacompany.com/'>
            <img className="w-15 " src={cocacola} alt="" />
            </Link>  
          </div>
          <div className="bg-gray-200 p-4 rounded-md flex items-center ">
         <Link to='https://www.microsoft.com/en-us/?ql=4'> <img className="w-15 " src={microsoft} alt="" /></Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md flex items-center ">
         <Link to='https://www.ebay.com/'>
         <img className="w-15 " src={ebay} alt="" />
         </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md  flex items-center">
         <Link to='https://www.amazon.com/'>
         <img className="w-15 " src={amazon} alt="" />
         </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md  flex items-center">
         <Link to='https://www.ups.com/bd/en/Home.page'>
         <img className="w-15 " src={ups} alt="" />
         </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md  flex items-center">
        <Link to='https://www.georgiapower.com/'>
        <img className="w-15 " src={georgia} alt="" />
        </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md flex items-center">
       <Link to='https://www.psu.edu/business-and-industry/'>
       <img className="w-15 " src={penstate} alt="" />
       </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md flex items-center ">
         <Link to='https://www.theguardian.com/uk'>
         <img className="w-15 " src={guardian} alt="" />
         </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md  flex items-center">
         <Link to='https://www.huffpost.com/'>
         <img className="w-15 " src={huffpost} alt="" />
         </Link>
          </div>
          <div className="bg-gray-200 p-4 rounded-md flex items-center ">
          <Link to='https://www.forbesmarshall.com/India'>
          <img className="w-15 " src={firbes} alt="" />
          </Link>
          </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
