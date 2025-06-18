import { FaUserFriends } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import Heng from "../../img/heng5.jpg"
const Navbar = () => {

    return ( 
        <nav>
           <div className="flex justify-between bg-gray-300">
                {/* Logo and name */}
                <div className="my-4 mx-2">
                    <h1 className=" text-2xl font-poppins font-semibold bg-gradient-to-r from-pink-950 to-pink-500 text-transparent inline-block bg-clip-text ">Duckgo</h1>
                </div>
                {/* Search */}
                <div className="relative mx-5">
                    <input type="text"
                    className="my-4 sm:w-56 md:w-72 lg:w-80 xl:w-96 -mx-5 px-2 py-1 ouline-none rounded-full
                    focus:outline-none "
                    placeholder="Search"
                    />
                    <span className="absolute top-6 -mx-1"><IoSearch/></span>
                </div>
                {/* notification */}
                <div className="flex mx-5 gap-4 items-center ">
                    <div className="relative">
                        <FaUserFriends className="text-2xl"/><span className=" absolute -top-3 w-4 h-4 text-center text-[0.650rem] left-3 bg-red-600
                        text-white rounded-full">1</span>
                    </div>
                    <div className="relative">
                        <IoChatbubbleEllipsesSharp className="text-2xl"/><span className=" absolute -top-3 w-4 h-4 text-center text-[0.650rem] left-3 bg-red-600
                        text-white rounded-full">2</span>
                    </div>
                    <div className="relative">
                        <IoNotifications className="text-2xl"/><span className=" absolute -top-3 w-4 h-4 text-center text-[0.650rem] left-3 bg-red-600
                        text-white rounded-full">3</span>
                    </div>
                    
                </div>
                {/* profile */}
                <div>
                    <a href="">
                        <img src={Heng} alt="" 
                        className="w-10 sm:mx-36 my-2 mx-2 rounded-full"
                    />
                    </a>
                </div>
           </div>
        </nav>
     );
}
 
export default Navbar;