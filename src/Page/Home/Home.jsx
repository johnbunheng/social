import Navbar from "../../Component/Navbar/Navbar";
import Feed from "../../Feed/Feed";
import Rightbar from "../../Rightbar/Rightbar";
import Saibar from "../../Saibar/Saibar";

const Home = () => {
    return ( 
        <>
        <Navbar/>
         <div className=" flex gap-96">
            <Saibar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
       
     );
}
 
export default Home;