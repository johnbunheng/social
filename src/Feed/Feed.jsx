import Post from "../Post/Post";
import Share from "../Share/Share";

const Feed = () => {
    return ( 
        <div className=" m-auto">
            <Share/>
            <Post/>
        </div>
     );
}
 
export default Feed;