import Navbar from "../../src/Component/Navbar/Navbar";
import Feed from "../Feed/Feed";
import Rightbar from "../Rightbar/Rightbar";
import Saibar from "../Saibar/Saibar";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSchool } from "react-icons/io";
import { useState } from "react";

import Heng from "../img/heng5.jpg"
import Seth from "../img/seth.jpg"
import Hong from "../img/hong.jpg"
import Hour from "../img/Hour.jpg"

import profile1 from "../img/heng5.jpg"
import CV from "../img/Screenshot 2025-05-12 223016.png"
const Profile = () => {
           const [user1,SetUser1] = useState([
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
        <>
             <Navbar/>
         <div className=" flex gap-56">
            <Saibar/>
            <div className="pfright">
                <div className="profile -mx-52 mt-2">
                    {/* cover */}
                    <div>
                        <img src={CV} alt="" 
                        className="h-96 w-[100%] border-2 border-pink-800 object-cover rounded-md"/>
                    </div>
                    {/* pf */}
                    <div className="flex justify-center z-[40] -mt-36 ">
                       <div>
                         <img src={profile1} alt="" 
                        className="w-56 rounded-full border-[4px] border-pink-800"/>
                        <h1 className="mx-8 my-4 font-poppins font-semibold text-2xl">
                            John Bunheng
                        </h1>
                       </div>
                    </div>
                    {/* info */}
                    <div className="font-poppins bg-gray-300 sm:flex justify-between px-4 py-5 rounded-md ">
                       <div>
                            <h1 className="text-xl font-semibold">User Details</h1>
                            <p><FaLocationDot className=" inline-block"/> From Prey Veng</p>
                            <p><IoIosSchool className=" inline-block"/> Went to <strong>Bak Touk Hight School</strong></p>
                            <a href="">... See your About info</a>
                       </div>
                       {/* friend */}
                       <div>
                            <h1 className="text-xl font-semibold">User Friends</h1>
                            <div className=" grid grid-cols-3 p-2 rounded-md border border-pink-800">
                                    {
                                        user1.map((item) =>(
                                            <div key={item.id} >
                                                <img src={item.img} alt="" 
                                                className="w-20 h-20"/>
                                                <p>{item.name}</p>
                                            </div>
                                        ))
                                    }
                            </div>
                       </div>
                    </div>

                </div>
                {/* Krom Profile */}
                <div className="bttprofile flex sm:w-[1200px] sm:-mx-56">
                    <Feed/>
                    <Rightbar/>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Profile;