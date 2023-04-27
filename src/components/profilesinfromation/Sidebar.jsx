import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import suitcase from "../../assets/suitcase.png";
import blog from "../../assets/blog.png";
import feedback from "../../assets/comment.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faTachometer, faBlog } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
   <div className="h-screen ">
   <div className="md:w-64  fixed left-0 top-30  h-screen bg-white ">
   <div className="flex flex-col gap-8 p-4 ">
     {user && (
       <div className="flex gap-3  items-center">
         <img
           className="h-10 w-10 rounded-full"
           src="https://cdn-icons-png.flaticon.com/512/727/727399.png?w=740&t=st=1681989723~exp=1681990323~hmac=b9c1799b4afcf293ecd014e767c27bbd94e20c518553d4b5bc7cb24fa784ebe1"
         />
         <p>{user.displayName}</p>
       </div>
     )}
    <div className="hover:bg-orange-500 p-2 rounded-md">
    <Link to="/dashboard">
    <FontAwesomeIcon className="mr-2" icon={faTachometer} />
    DashBoard
  </Link>
    </div>
     <hr />
    <div className="hover:bg-orange-500 p-2 rounded-md">
    <Link to="/community">
    <FontAwesomeIcon className="mr-2" icon={faUsers} />
    Community
  </Link>
    </div>
     <hr />
     <div className="flex hover:bg-orange-500 p-2 rounded-md">
     <img className="w-5 mr-2" src={suitcase}></img>
       <Link to="/jobalert">
        Job Alert
       </Link>
     </div>
     <hr />
     <div className="flex hover:bg-orange-500 p-2 rounded-md">
     <img className="w-5 mr-2" src={blog}></img>
       <Link to="/blog">
        Blog
       </Link>
     </div>
     <hr />
     <div className="flex hover:bg-orange-500 p-2 rounded-md">
     <img className="w-5 mr-2" src={feedback}></img>
       <Link to="/feedback">
        Feedback
       </Link>
     </div>
     
   </div>
 </div>
   </div>
  );
};

export default Sidebar;
