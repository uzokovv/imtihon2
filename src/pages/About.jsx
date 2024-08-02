import React from "react";
import Divan from "../assets/img/kotta devan.png";
import svg from "../assets/Rocket single seater 1 (1).svg"
import Image from "../assets/asab.jpg"
import kichik from "../assets/img/image.png"

const About = () => {
  return (
    <>
      <div className="Hero bg-[#FBEBB5]">
        <div className="container  flex justify-between ">
          <div className="text">
            <h1 className="text-[40px] mb-6 mt-[90%]" >
              Rocket single <br /> seater
            </h1>
            <button className="button-class tugma text-base">Shop Now</button>
          </div>
          <img src={svg} alt="" />
        </div>
      </div>
      <div className=" bg-[#FEE2E2]">
        <div className="container flex items-center justify-between p-8 card-2 mt-10">
          <div className="container hero__box text-center flex flex-col p-5 mt-10">
            <img src={Image} className="w-56 mx-auto" alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <>

                <button className="button-class tugma text-base">
                  Wiew More
                </button>
              </>
            </div>
          </div>
          <div className="container hero__box flex flex-col text-center">
            <img src={Divan} className="w-56 mx-auto" alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <>
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
            </div>

          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl text-center">Lorem ipsum dolor sit.</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div class="grid grid-cols-4 gap-4 text-center text-[20px] mt-10 mb-6">
          <div className='text-center'>
            <img src={kichik} className='mx-auto' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
          <div>
            <img src={kichik} className='mx-auto' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
          <div>
            <img src={kichik} className='mx-auto' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
          <div>
            <img src={kichik} className='mx-auto' />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;