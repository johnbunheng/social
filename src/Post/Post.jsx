import { MdMacroOff } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import html from "../img/html-structure.png"
import { AiFillLike } from "react-icons/ai";
import { IoHeartCircleSharp } from "react-icons/io5";
import { FaShare } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { useState } from "react";

import Heng from "../img/heng5.jpg"
import Seth from "../img/seth.jpg"
import Hong from "../img/hong.jpg"
import Hour from "../img/Hour.jpg"

import pos1 from "../img/Screenshot 2025-05-11 220912.png"
import pos2 from "../img/Screenshot 2025-05-12 223016.png"
import pos3 from "../img/Screenshot 2025-05-14 170037.png"
import pos4 from "../img/Screenshot 2025-05-14 170045.png"

const Post = () => {
    const [userpost,SetUserpost] = useState([
        {
            id:1,
            acc:"Moa Menghour",
            title:"Coder hashahaha",
            imgpf:Hour,
            imgps:pos1,
            min:"10"
        },
        {
            id:2,
            acc:"Khim Piseth",
            title:"Good Morning Guys",
            imgpf:Seth,
            imgps:pos2,
            min:"7"
        },
        {
            id:3,
            acc:"Hong Hong",
            title:"Hi guys",
            imgpf:Hong,
            imgps:pos3,
            min:"8"
        },
        {
            id:4,
            acc:"Heng",
            title:"Hello Everyone",
            imgpf:Heng,
            imgps:pos4,
            min:"15"
        },
    ])

    // handle in ++
    const [like,setLike] = useState(0)
    const handbleIn = () =>{
        setLike( like + 1)
    }
    return ( 
        <div className="mx-auto">
            {
                userpost.map((item)=>(
                    <div key={item.id} className="bg-gray-300 w-96 sm:w-[730px] sm:-mx-[360px] py-2 my-5 rounded-md shadow-lg">
                        {/* Header + pf */}
                        <div className="flex justify-between px-5 py-3">
                            <div className="flex text-center items-center gap-2">
                                <img src={item.imgpf} alt="" 
                                className="w-12 rounded-full border-2 border-pink-800"/>
                                <h1 className=" font-semibold">{item.acc}</h1>
                                <p className="text-sm mx-2">{item.min} mins ago</p>
                            </div>
                            <div>
                                <IoMdMore className="text-xl"/>
                            </div>
                        </div>
                        {/* Title + img */}
                        <div className="px-5 ">
                            <h1 className="">{item.title}</h1>
                            <img src={item.imgps} alt="" 
                            className="w-[680px] my-1 rounded-md object-contain"/>
                        </div>
                        {/* lower post */}
                        <div className="mx-5 flex justify-between my-2 py-1">
                        
                            <ul className="flex text-center items-center gap-1">
                                <li onClick={handbleIn}><AiFillLike className="text-xl text-sky-900 cursor-pointer"/></li>
                                <li onClick={handbleIn}><IoHeartCircleSharp className="text-xl text-red-700 cursor-pointer"/></li>
                                <li><p>{like} Like and love</p></li>
                            </ul>
                        
                            <div>
                                <a href=""><FaComment className="inline-block text-sky-900"/> Commment</a>
                            </div>
                            <div>
                                <a href=""><FaShare className="inline-block text-sky-900"/> Share </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Post;