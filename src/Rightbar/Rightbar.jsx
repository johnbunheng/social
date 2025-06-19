import { FaGift } from "react-icons/fa6";
import drink from "../img/drink.jpg"
import { useState } from "react";

import Heng from "../img/heng5.jpg"
import Seth from "../img/seth.jpg"
import Hong from "../img/hong.jpg"
import Hour from "../img/Hour.jpg"

const Rightbar = () => {
       const [online,SetOnline] = useState([
            {
                id:1,
                name:"John Bunheng",
                img: Heng
            },
            {
                id:2,
                name:"Moa Menghour",
                img: Hour
            },
            {
                id:3,
                name:"Por Sivhong",
                img: Hong
            },
            {
                id:4,
                name:"Khim Piseth",
                img: Seth
            }
        ]);
    return ( 
        <div className="bg-gray-300 h-[100vh] my-2 rounded-md w-[27%]">
            {/* Text */}
            <div className="p-4 flex text-center items-center gap-2">
                <FaGift className=" text-4xl text-pink-800"/><strong className=" font-poppins">John Bunheng</strong>
                <p>and<strong className=" font-poppins"> 3 other friend</strong> HBD</p>
            </div>
            {/* Banner */}
            <div>
                <img src={drink} alt="" 
                className="w-[90%] m-auto rounded-md"/>
            </div>
            {/* online friend */}
            <div className="p-5">
                <h1 className="font-semibold">Online friend</h1>
                    <ul className="my-5 space-y-6">
                        {
                            online.map((item)=>(
                                <li key={item.id} className="flex gap-2 items-center">
                                    <img src={item.img} alt="" 
                                    className=" relative w-14 border-[3px] border-green-600 rounded-full"/>
                                    <p>{item.name}</p>
                                    <span className=" absolute w-3 h-3 rounded-full -mt-12 mx-10 border-2 border-white bg-green-600"></span>
                                </li>
                            ))
                        }
                    </ul>
                
            </div>
        </div>
     );
}
 
export default Rightbar;