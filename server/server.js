const express=require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Blog=require('./models/blog')
const mongoURI="mongodb+srv://fares22:fares22base@myblogs.owfjhqn.mongodb.net/?retryWrites=true&w=majority"

const app=express()

//! CONNECTING TO MONGODB   
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB Atlas:', err);
    });

//!  MIDDLEWARE
app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());





const port = process.env.PORT || 4000;
app.use(cors(
  {
      origin: ["*"],
      methods: ["POST", "GET"],
      credentials: true
  }
  ));

  

  
  
  
  app.get('/api', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
      .then((blogs) => {
        res.json(blogs);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  
app.post("/added",(req,res)=>{
  const blog = new Blog(req.body.formData);
  console.log(blog)
  blog.save()
    .then(console.log("BLOG SAVED"))
    .catch(err => {
      console.log(err);
    });
res.status(200).json({ message: 'succesful' });
})


app.post("/delete",(req,res)=>{

  let id=req.body.id
  Blog.findByIdAndDelete(id)
  .then(
    console.log("BLOG DELETED SUCCESEFULLY")
  ).catch(err=>console.log(err))
})
  



app.listen(port, () => {
    console.log(`Server is Runin `);
  });
