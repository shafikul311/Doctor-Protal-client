import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center mt-4">
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className=" mb-3 mt-3 text-secondary ">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorum numquam. Impedit magnam eius distinctio harum illum qui ipsa voluptatum, eaque tempora voluptas veniam, quos amet, reiciendis repellendus neque in?</p>
            
        </div>
    );
};

export default ServiceDetails;