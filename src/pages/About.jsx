import React from "react";
import Divan from "../assets/img/kotta devan.png";
import Kreslo from "../assets/img/image.png"
import svg from "../assets/Rocket single seater 1 (1).svg"
import Image from "../assets/xx.png"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="Hero bg-orange-400">
        <div className="container hero__box flex items-center justify-between ">
          <div className="text">
            <h1 className="text-[40px] mb-6 " >
              Rocket single <br /> seater
            </h1>
            <Link to={"/shop"}>
              <button className="button-class tugma text-base">Shop Now</button>
            </Link>
          </div>
          <img src={svg} alt="" />
        </div>
      </div>
      <div className=" bg-red-100">
        <div className="container flex  justify-between p-8 card-2 mt-10">
          <div className="container hero__box flex flex-col p-5 mt-10">
            <img src={Image} className="w-56 " alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <>

                <button className="button-class tugma text-base">
                  Wiew More
                </button>
              </>
            </div>
          </div>
          <div className="container hero__box flex flex-col ">
            <img src={Divan} className="w-56 " alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <>
                {" "}
                <button className="button-class tugma text-base">
                  Wiew More
                </button>
              </>
            </div>
          </div>
        </div>
      <div className="hero kreslo">
      <div className="container  flex items-center justify-around">
          <div className="asgaard-sofa-image">
            <img src={Kreslo} alt="Asgaard sofa" />
          </div>
          <div className="asgaard-sofa-content text-center">
            <h2 className="text-5xl mb-6">New Arrivals</h2>
            <h1 className="text-5xl mb-6 font-bold">Asgaard sofa</h1>
            <button className="order-now-button tugma-3">Order Now</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;