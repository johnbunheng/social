import Pf from "../img/heng5.jpg"
import { TbPhotoFilled } from "react-icons/tb";
import { FaTags } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";
const Share = () => {
    return ( 
        <div className="bg-gray-300 w-96 sm:w-[730px] -mx-[397px] sm:-mx-[360px] my-5 rounded-md shadow-lg">
            {/* top Share */}
            <div className="flex py-5 px-5 items-center gap-2">
                <img src={Pf} alt="" 
                 className="w-14 rounded-full"/>
                <input type="text"
                placeholder="What's on your mind?"
                className="w-[60%] h-10 outline-none bg-transparent"/>
            </div>
            <hr className="boder-2 w-[90%] m-auto border-pink-800"/>
            {/* lower Share */}
            <div className="flex justify-between py-5 px-9">
                <ul className="flex text-center text-[12px] md:lg items-center sm:gap-8 gap-1 text-pink-800 ">
                    <li><a href="">Photos & Video <TbPhotoFilled className=" inline-block text-blue-950"/></a></li>
                    <li><a href="">Tag <FaTags className=" inline-block text-yellow-600"/></a></li>
                    <li><a href="">Location <FaLocationDot className=" inline-block text-green-500 "/></a></li>
                    <li><a href="">Felling <MdEmojiEmotions className=" inline-block text-yellow-500"/></a></li>
                </ul>
                <button className=" text-sm px-4 bg-pink-800 rounded-md font-semibold text-white sm:btn">Share</button>
            </div>
        </div>
     );
}
 
export default Share;