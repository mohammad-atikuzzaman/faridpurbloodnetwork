import React from 'react';
import Carocel from "../componetnts/carocel/Carocel"
import BloodReqest from '../componetnts/BloodReqest';
import UserStatistics from '../componetnts/UserStatistics';
import AdminContacts from '../componetnts/AdminContacts';
import JoinAsDonner from '../componetnts/join-as-donner/JoinAsDonner';

const Home = () => {
    return (
        <div>
            <Carocel/>
            <JoinAsDonner/>
            <UserStatistics/>
            <BloodReqest/>
            <AdminContacts/>
        </div>
    );
};

export default Home;