import React from "react";
import DentalC from "../../../images/DentalCare.png";

const DentalCare = () => {
  return (
    <div className="d-flex justify-content-center pt-5 pb-5">
            <div className="col-md-4 offset-md-1">
                <img style={{ width: "100%", height: "500px" }} src={DentalC} alt="" />
            </div>

            
            <div className="col-md-6  justify-content-center">
                <h1 className="text-secondary">
                Exceptional Dental Care <br /> On Your Terms
                </h1>
                <p className="text-secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
                facilis aspernatur delectus suscipit, reprehenderit, odio repudiandae,
                assumenda vel fugiat esse quod illo magnam aliquid magni praesentium
                obcaecati velit aperiam officia illum! Modi eius, non vero esse cumque
                sapiente laudantium! Molestias sint quisquam ratione quibusdam
                incidunt adipisci suscipit tempore rerum id Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Blanditiis dignissimos fuga adipisci,
                consectetur voluptates deleniti. Dolor beatae officia voluptate
                excepturi architecto, obcaecati quidem totam perspiciatis facere eos
                atque assumenda accusantium..
                </p>
                <button className="btn btn-primary mt-5">Learn More</button>
            </div>
    </div>
  );
};

export default DentalCare;
