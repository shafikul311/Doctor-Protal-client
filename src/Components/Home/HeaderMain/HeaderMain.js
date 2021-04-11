import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
       <main style={{height:'600px'}}  className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color:'#3a4256'}}>Your New Smile <br/> Starts Here</h1>
               <small className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium odit velit enim! Consectetur cumque debitis earum odio eos sunt possimus eum aperiam libero sapiente, alias facere dolorem cupiditate temporibus, praesentium voluptatum illum perferendis, optio dignissimos! Accusantium assumenda, accusamus qui a magnam rerum id dolorum consequatur. Dolorum nostrum inventore itaque necessitatibus ipsam est vitae beatae, consequatur atque repellendus. Ipsum, minima cupiditate.F</small>
                <button className="btn btn-primary"> GET APPOINTMENT</button>
           </div>
           <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid"/>
           </div>


       </main>
    );
};

export default HeaderMain;