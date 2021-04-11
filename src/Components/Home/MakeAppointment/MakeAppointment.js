import React from "react";
import Doctor from "../../../images/doctor.png";
import "./MakeAppointment.css";

const MakeAppointment = () => {
  return (
   <section>
        <div className="doctor-bg ">
      <div className="d-flex justify-content-center pb-5 mt-5">
        <div className="col-md-4 offset-md-1">
          <img style={{ width: "100%" }} src={Doctor} alt="" />
        </div>

        <div className="col-md-6  justify-content-center mt-5">
          <h1 className="text-secondary">
            Exceptional Dental Care <br /> On Your Terms
          </h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            facilis aspernatur delectus suscipit, reprehenderit, odio
            repudiandae, assumenda vel fugiat esse quod illo magnam aliquid
            magni praesentium obcaecati velit aperiam officia illum! Modi eius,
            non vero esse cumque sapiente laudantium! Molestias sint quisquam
            ratione quibusdam incidunt adipisci suscipit tempore rerum id Lorem
            ipsum dolor sit amet
          </p>
          <button className="btn btn-primary mt-5">Learn More</button>
        </div>
      </div>
    </div>
   </section>
  );
};

export default MakeAppointment;
