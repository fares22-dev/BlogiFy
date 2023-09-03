import {Link} from 'react-router-dom';
import Loader from './Loader.jsx';

const Blogs = ({data,isloading}) => {
  
    
    
    return (
    <>
    {isloading && <Loader/>}
    <h1 className="title">My Blogs</h1>
    <div className="blogsContainer">

            {data && <div>
        {data.map((item, index) => (
          <div key={index}>
            <Link to={"/my-blogs/"+item._id}><h2 className="blog-title">{item.title}</h2></Link>
            <p className="blog-snippet">{item.snippet}</p>
          </div>
        ))}
      </div>}
        </div>

       <a href="/add-blog"> <button className="add-btn"><img src="images/plus.png"/></button></a>
        </>
      );



    }
export default Blogs;
