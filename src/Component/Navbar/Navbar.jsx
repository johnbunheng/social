import { FaUserPlus } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

import Heng from "../../img/heng5.jpg"
const Navbar = () => {

    return ( 
        <nav className=" sticky top-0 z-[9999]">
           <div className="flex justify-between bg-gray-300">
                {/* Logo and name */}
                <div className="my-4 mx-2 sm:mx-14">
                    <h1 className="text-lg sm:text-2xl md:text-4xl font-poppins font-semibold bg-gradient-to-r from-pink-950 to-pink-500 text-transparent inline-block bg-clip-text ">Duckgo</h1>
                </div>
                {/* Search */}
                <div className="relative mx-10">
                    <input type="text"
                    className="my-4 w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 -mx-10 px-2 py-1 ouline-none rounded-full
                    focus:outline-none "
                    placeholder="Search"
                    />
                    <span className="absolute top-6 mx-4 "><IoSearch/></span>
                </div>
                 {/* link */}
                <div className="sm:py-5 sm:hidden mx-5 items-center text-pink-800 font-semibold
                 hidden lg:inline-block lg:items-center lg:text-center ">
                    <a href="" className="mx-2 ">Homepage</a>
                    <a href="">Timeline</a>
                </div>
                {/* notification */}
                <div className="flex sm:mx-5 gap-3 sm:gap-4 items-center ">
                    <div className="relative">
                        <FaUserPlus className="sm:text-2xl"/><span className=" absolute -top-3 w-4 h-4 text-center text-[0.650rem] left-3 bg-pink-800
                        text-white rounded-full">1</span>
                    </div>
                    <div className="relative">
                        <IoChatbubbleEllipsesSharp className="sm:text-2xl"/><span className=" absolute -top-3 w-4 h-4 text-center text-[0.650rem] left-3 bg-pink-800
                        text-white rounded-full">2</span>
                    </div>
                    <div className="relative">
                        <IoNotifications className="sm:text-2xl"/><span className=" absolute -top-3 w-4 h-4 text-center text-[0.650rem] left-3 bg-pink-800
                        text-white rounded-full">3</span>
                    </div>
                    
                </div>
               
                {/* profile */}
                <div>
                    <a href="">
                        <img src={Heng} alt="" 
                        className="w-10 mx-2 sm:mx-12 my-2 rounded-full"
                    />
                    </a>
                </div>
           </div>
        </nav>
     );
}
 
export default Navbar;