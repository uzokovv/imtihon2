import React from "react";
import Divan from "../assets/img/divan.png";
import svg from "../assets/Rocket single seater 1 (1).svg"
import Image from "../assets/img/kreslo.png"
import kichik from "../assets/img/table1.png"
import karavot2 from "../assets/img/kravat.png"
import stoll from "../assets/img/stol.png"
import stall from "../assets/img/stal.png"
import page1 from "../assets/img/page1.png";
import page2 from "../assets/img/page2.png";
import page3 from "../assets/img/page3.png";

const About = () => {
  const posts = [
    {
      title: 'Going all-in with millennial design',
      date: '12th Oct 2022',
      readTime: '5 min',
      image: page1,
    },
    {
      title: 'Going all-in with millennial design',
      date: '12th Oct 2022',
      readTime: '5 min',
      image: page2,
    },
    {
      title: 'Going all-in with millennial design',
      date: '12th Oct 2022',
      readTime: '5 min',
      image: page3,
    },
  ];

  return (
    <>
      <div className="Hero bg-[#FBEBB5]">
        <div className="container flex justify-between ">
          <div className="text">
            <h1 className="text-[40px] mb-6 mt-[90%]">
              Rocket single <br /> seater
            </h1>
            <button className="button-class tugma text-base">Shop Now</button>
          </div>
          <img src={svg} alt="" />
        </div>
      </div>
      <div className="bg-[#FEE2E2]">
        <div className="container flex items-center justify-between p-8 card-2 mt-10">
          <div className="container hero__box text-center flex flex-col p-5 mt-10">
            <img src={Image} className="mx-auto" alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <button className="button-class tugma text-base">
                View More
              </button>
            </div>
          </div>
          <div className="container hero__box flex flex-col text-center">
            <img src={karavot2} className="mx-auto" alt="" />
            <div className="text">
              <h1 className="text-5xl mb-6">Side Table</h1>
              <button className="button-class tugma text-base">
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="hero kreslo">
          <div className="container flex items-center justify-around">
            <div className="asgaard-sofa-image"></div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl text-center">Lorem ipsum dolor sit.</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid grid-cols-4 gap-4 text-center text-[20px] mt-10 mb-6">
          <div className="text-center">
            <img src={karavot2} className="mx-auto" />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
          <div>
            <img src={stoll} className="mx-auto" />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
          <div>
            <img src={kichik} className="mx-auto" />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
          <div>
            <img src={stall} className="mx-auto" />
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Rs. 25,000</p>
          </div>
        </div>
      </div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blogs</h1>
        <p className="text-gray-600">
          Find a bright ideal to suit your taste with our great selection
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {posts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={post.image}
              alt={post.title}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <a href="#" className="text-blue-500 hover:underline">
                Read More
              </a>
              <div className="flex items-center mt-4 text-gray-600 text-sm">
                <span className="mr-2">
                  <svg
                    className="inline-block w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                  </svg>
                  {post.readTime}
                </span>
                <span>
                  <svg
                    className="inline-block w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                  </svg>
                  {post.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-500 hover:underline">
          View All Post
        </a>
      </div>
      <div
        className="text-center bg-opacity-80 p-10 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url()`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl font-bold mb-4">Our Instagram</h1>
        <p className="text-lg mb-6">Follow our store on Instagram</p>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-6 rounded-full shadow hover:bg-blue-600 transition duration-300"
        >
          Follow Us
        </a>
      </div>
    </>
  );
};

export default About;
