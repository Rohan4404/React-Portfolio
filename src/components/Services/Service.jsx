import React from "react";
import "./Service.css";
import theme_pattern from "../../assets/About_Me.svg";
import Services_Data from "../../assets/services_data";
// import arrow_icon from "../../assets/arrow_icon.png";

const Service = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((Service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{Service.s_no}</h3>
              <h2>{Service.s_name}</h2>
              <p>{Service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img
                  src="data:image/svg+xml,%3csvg%20width='33'%20height='24'%20viewBox='0%200%2033%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.0607%2013.0607C32.6464%2012.4749%2032.6464%2011.5251%2032.0607%2010.9393L22.5147%201.3934C21.9289%200.807611%2020.9792%200.807611%2020.3934%201.3934C19.8076%201.97919%2019.8076%202.92893%2020.3934%203.51472L28.8787%2012L20.3934%2020.4853C19.8076%2021.0711%2019.8076%2022.0208%2020.3934%2022.6066C20.9792%2023.1924%2021.9289%2023.1924%2022.5147%2022.6066L32.0607%2013.0607ZM0%2013.5H31V10.5H0V13.5Z'%20fill='white'/%3e%3c/svg%3e"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Service;
