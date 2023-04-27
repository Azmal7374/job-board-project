 import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import ProfileCommon from '../ProfileCommon';
import { AuthContext } from '../../providers/AuthProvider';
import ProfileFooter from '../profilesinfromation/ProfileFooter';
import Sidebar from '../profilesinfromation/Sidebar';
 
 const ProfilesNav = () => {
    const {user} = useContext(AuthContext)
    console.log(user?.displayName ? user.displayName : '');
   if(user?.displayName){
     <Navigate to ='/'></Navigate>
   }
   else{
   return <Navigate to ='/home'></Navigate>
   }
    return (
        <div>
        <ProfileCommon></ProfileCommon>
        <div className="profile flex  justify-center gap-96 mr-10  md:mr-8">
        <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
          
           <ProfileFooter></ProfileFooter>
        </div>
    );
 };
 
 export default ProfilesNav; 