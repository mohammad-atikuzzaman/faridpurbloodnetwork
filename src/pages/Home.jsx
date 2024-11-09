import React from 'react';
import Carocel from "../componetnts/carocel/Carocel"
import BloodReqest from '../componetnts/BloodReqest';
import UserStatistics from '../componetnts/UserStatistics';
import AdminContacts from '../componetnts/AdminContacts';

const Home = () => {
    return (
        <div>
            <Carocel/>
            <UserStatistics/>
            <BloodReqest/>
            <AdminContacts/>
        </div>
    );
};

export default Home;