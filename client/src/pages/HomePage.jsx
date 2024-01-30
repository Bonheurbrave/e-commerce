import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import youthpant from "../images/men/youthpant.jpg";
import graychocobelt from "../images/men/graychocobelt.jpg";
import italianemeet from "../images/men/italianemeet.jpg";
import womwed from "../images/women/womwed.jpg";
import umbro from "../images/football/umbro.jpg";
import nikephantom from "../images/football/nikephantom.jpg";
import jordankf0 from "../images/men/jordankf0.jpg";
import jordan13 from "../images/men/jordan13.jpg";

function HomePage() {
  const trendings = [
    {
      id: 1,
      name: 'gentle clothes',
      image: youthpant
    }
    ,
    {
      id: 2,
      name: "Best slim belts",
      image: graychocobelt
    }
    ,
    {
      id: 3,
      name: "Best italian shoes",
      image: italianemeet
    }
    ,
    {
      id: 4,
      name: "Modern women clothes",
      image: womwed
    }
    ,
    {
      id: 5,
      name: "Best sport kits",
      image: jordan13
    }

  ]
  return (<>

    <div className="firsthome h-screen pt-12 px-7">
      <h1 className=" font-bold text-4xl py-8 pt-6 text-slate-900 w-1/2 introhead max-sm:w-screen max-sm:pt-24 max-sm:text-fuchsia-600 max-sm:py-3">The best collection of clothes & shoes in the world of fashion</h1>
      <div>
        <h1 className=" w-1/2 text-xl text-slate-900 font-semibold py-10 max-sm:w-screen max-sm:font-bold">
          Now you can buy the trending clothes and shoes in this current world of fashioning and wearing
          without wasting your time for going in the supermarkets but only by click on this start shopping button
        </h1>

        <h1 className=" max-sm:w-screen max-sm:font-bold max-sm:text-cyan-600   font-semibold flex text-2xl text-slate-900 mb-12"> <MdOutlineVerified size={32} className="" />Buy now Save your time then</h1>
      </div>
      <div className=" pt-4">
        <button className=" px-10 py-2 max-sm:w-2/3 hover:bg-transparent border-2 border-slate-950 w-1/4 bg-green-900 ease-in-out duration-500 hover:border-white font-semibold rounded-lg">shop now</button>
      </div>
    </div>
    <div className=" pt-12 px-4">
      <div className="w-1/2 px-3 max-sm:w-screen max-sm:px-5">
        <h1 className=" font-bold text-slate-800 text-2xl">
          {" "}
          All trending clothes and shoes in  fashion
        </h1>
      </div>
    </div>

    <div className=" py-7 px-6" id="trends">
      <button className=" py-1 px-8 bg-red-500 text-white font-semibold rounded-md">Trending products</button>
    </div>
    <div className=" grid grid-cols-5 max-sm:block">
      {trendings.map((product) => {
        return (
          <div key={product.id} className=" shadow-md shadow-slate-700 ml-2 rounded-md max-sm:py-3">
            <img src={product.image} alt="no internet connection" className=" w-2/3 mx-auto h-2/3" />
            <h1 className=" text-center font-semibold">{product.name}</h1>

            <div className=" flex w-1/2 justify-between mx-auto py-1">
              < FaStar size={26} className=" text-yellow-500" />
              < FaStar size={26} className=" text-yellow-500" />
              < FaStar size={26} className=" text-yellow-500" />
              < FaStar size={26} className=" text-yellow-500" />
              < FaStar size={26} className=" text-slate-500" />
              {/* < FaStar className=" text-yellow-500"/> */}
            </div>
            <a href="/all-products"><button className="hover:bg-red-600 ease-in-out duration-500 border-2 rounded-md w-full border-red-600 hover:border-white font-semibold px-5 py-1">shop now</button></a>
          </div>
        )
      })}
    </div>
  </>
  );
}

export default HomePage;
