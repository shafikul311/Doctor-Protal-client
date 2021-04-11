import React from 'react';
import DentalCare from '../DentalCare/DentalCare';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div>
           <Header></Header>
           <Services></Services>
           <DentalCare></DentalCare>
          <MakeAppointment></MakeAppointment>
          <Testimonial></Testimonial>
         
        </div>
    );
};

export default Home;