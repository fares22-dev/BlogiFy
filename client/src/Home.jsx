import Footer from './Footer.jsx';

const Home  = () => {
    return ( 
        <div className="main">
            <div className="row-container">
            <div className="row-context">
                <h1>Share Your Thoughts</h1>
                <p> Feel free to share your thoughts Generate meaningful content for your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </p>
            </div>
            <img className="home-img" src="./images/illustration-mockups.svg" alt="" />
            </div>
            <div className="row-container">
            <img className="home-img" src="./images/illustration-your-users.svg" alt="" />
            <div className="row-context row-context-2">
                <h1>Grow Together</h1>
                <p>Sharing blogs fosters learning and community, while also boosting personal branding and networking opportunities.</p>
            </div>
            </div>

            <div className="row-container row-container-last">
            <img className="home-img" src="./images/illustration-flowing-conversation.svg" alt="" />
            <div className="row-context">
                <h1>Flowing Conversations</h1>
                <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow.</p>
            </div>
            </div>
      <Footer/>
        </div>
     );
}
 
export default Home ;