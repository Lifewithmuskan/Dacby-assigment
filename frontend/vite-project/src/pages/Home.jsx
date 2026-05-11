// function Home() {
//   return (
//     <div>
//       <h1>Top Stories</h1>
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";
import axios from "axios";

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
    <div style={{ padding: "20px" }}>
      <h1>Top 10 Stories</h1>

      {stories.map((story) => (
        <div
          key={story._id}
          style={{
            border: "1px solid gray",
            marginBottom: "15px",
            padding: "15px",
          }}
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
  );
}

export default Home;