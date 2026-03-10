import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default MainLayout;