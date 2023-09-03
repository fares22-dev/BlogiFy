import { useState ,useEffect} from 'react'
import NavBar from './NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Blogs.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import AddBlog from './AddBlog.jsx';
import About from './About.jsx';
import BlogPage from './BlogPage.jsx';


function App() {

  const [data, setData] = useState(null);
  const [isloading,setIsloading]=useState(true)


  useEffect(()=>{
    fetch("http://localhost:4000/api")
    .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data)
        setIsloading(false)
    
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
    },[data])
   
    return (
      <div>
        <NavBar/>
      <Router> 
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/my-blogs" element={<Blogs data={data} isloading={isloading}/>}/>
        <Route path ="/add-blog" element={<AddBlog/>} />
        <Route path ="/my-blogs/:id" element={<BlogPage data={data}/>} />
        <Route path ="/about-us" element={<About/>} />
        </Routes>
      </Router>  
      </div>  
    );
  }
export default App
