import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"
import Nav from "./Nav";
function Home() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/stories"
      );

      setStories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <Nav fetchStories={fetchStories} />
     <div className="heading"><h1>Top Stories</h1>
     <p>lastest and tranding</p>
     <h3>Discover the most intersting stories from around the web</h3> </div>
    <div className="container">
     
      

      {stories.map((story) => (
        <div className="card"
          key={story._id}
        >
           <a href={story.url} target="_blank">
            <h2 className="title">{story.title}</h2>
          </a>
         

          <p>
            <strong>Author:</strong> {story.author}
          </p>

          <p>
            <strong>Points:</strong> {story.points}
          </p>

          <p>
            <strong>Posted:</strong> {story.postedAt}
          </p>

          <a href={story.url} target="_blank">
            Read More
          </a>
        </div>
      ))}
    </div>
    </>
  );
}

export default Home;