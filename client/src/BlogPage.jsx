import { Link, useParams,useNavigate } from "react-router-dom";
import axios from 'axios';


const BlogPage = ({data}) => {

const {id}=useParams()
const navigate=useNavigate();
const url="http://localhost:4000/delete"


const blog= data.filter((ele) => {
    return ele._id === id;})
    
const handleDelete=()=>{
    // Blog.findByIdAndDelete(id)
    axios.post(url,{id})
    navigate('/my-blogs')

}


    return (
        <>
        <Link to="/my-blogs"><button className="backbtn">Back</button></Link>
        <div className="blog-container">
           <h1 className="blog-title">{blog[0].title}</h1>
           <p className="blog-body">{blog[0].body}</p>
         </div> 
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
       </>
     );
}
 
export default BlogPage;
