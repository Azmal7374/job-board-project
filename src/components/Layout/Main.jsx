import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;