import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddBlog = () => {
    
   
const url="http://localhost:4000/added"  
const [formData,setformData]=useState({
    title:"",
    snippet:"",
    body:""
});

const navigate = useNavigate();

const handleInput =(event)=>{
    setformData({...formData,[event.target.name]:event.target.value})
}

const handleSubmit=(event)=>{
event.preventDefault();


axios.post(url,{formData})
.then(res=>console.log(res)
)
.catch(err=>console.log(err))

navigate('/my-blogs');
}

    return (  
        <>
        <form  onSubmit={(e)=>handleSubmit(e)} className="myform">
            <h1>What's On Your Mind ?</h1>
            <input id="title" onChange={(e)=>handleInput(e)} type="text" placeholder="Title" name="title"/>
            <input id="snippet" onChange={(e)=>handleInput(e)} type="text" placeholder="Snippet" name="snippet"/>
            <input id="body" onChange={(e)=>handleInput(e)} type="text" placeholder="Body" name="body" />   
            <button className="sbmt-btn" type="submit">  Add </button>   
        </form>
        </>
    );
}

export default AddBlog;