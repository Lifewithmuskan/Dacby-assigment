import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"
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
     <div className="heading"><h1>Top 10 Stories</h1></div>
    <div className="container">
     
      

      {stories.map((story) => (
        <div className="card"
          key={story._id}
        >
          <h2>{story.title}</h2>

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