import { useState } from "react";
import { MdFeed } from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";

import Heng from "../img/heng5.jpg"
import Seth from "../img/seth.jpg"
import Hong from "../img/hong.jpg"
import Hour from "../img/hour.jpg"

const Saibar = () => {
    const [list,Setlist] = useState([
        {
            id:1,
            title:"Feed",
            icon:<MdFeed />
        },
        {
            id:2,
            title:"Chats",
            icon:<IoChatbubbleEllipses/>
        },
        {
            id:3,
            title:"Video",
            icon:<MdOndemandVideo/>
        },
        {
            id:4,
            title:"Group",
            icon:<HiMiniUserGroup/>
        },
        {
            id:5,
            title:"Games",
            icon:<IoGameController/>
        },
        {
            id:6,
            title:"Jobs",
            icon:<MdWork/>
        },
        {
            id:7,
            title:"Events",
            icon:<MdEmojiEvents/>
        },
        {
            id:8,
            title:"Courses",
            icon:<FaBookOpen/>
        },
        {
            id:9,
            title:"Report",
            icon:<TbMessageReportFilled/>
        },
    ]);
    const [users,SetUsers] = useState([
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
        <div className="scr w-[20%] h-[90vh] bg-gray-300 my-2 mx-2 py-5 rounded-md overflow-y-scroll
         ">
            <div>
                <ul className="py-2 px-6 space-y-6">
                    {
                        list.map((item)=>(
                            <li key={item.id} className="flex text-center items-center gap-4 ">
                                <span className="">{item.icon}</span>
                                <a href="">
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <button className="btn mx-5 my-2">Show More</button>
                <hr className=" border border-pink-800 w-[90%] my-5 mx-5"/>
                {/* profile */}
                    {
                        users.map((user)=>(
                            <div key={user.id} className="flex my-5 mx-5 text-center items-center gap-5">
                                <img src={user.img} alt="" 
                                className=" relative w-16 rounded-full border-2 border-pink-800 shadow-2xl"/>
                                <p className=" font-poppins text-sm">{user.name}</p>
                              
                            </div>
                        ))
                    }
               
            </div>
        </div>
     );
}
 
export default Saibar;