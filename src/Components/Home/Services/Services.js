import React from 'react';
import florid from '../../../images/Florid.png';
import Cavity from '../../../images/Cavity.png';
import Whitening from '../../../images/whiteninng.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name:'Fluoride Treatment',
        img: florid ,
    },
    {
        name:'Cavity Filing',
        img: Cavity ,
    },
    {
        name:'Teath Whitening',
        img: Whitening,
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5 pt-5 pb-5">
           <div className="text-center pb-5">
           <h5 style={{color:'#1cc7c1'}}>Our Services</h5>
            <h2>Services We Provide</h2>
           </div>

           <div className="d-flex justify-content-center">
          <div className="w-75 row">
          {
                serviceData.map(service =><ServiceDetails service={service}></ServiceDetails> )
            }
          </div>
        </div>

        </section>
    );
};

export default Services;