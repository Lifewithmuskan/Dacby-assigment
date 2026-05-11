import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css"
import Nav from "./Nav";
function Home() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchStories = async () => {

  try {
    setLoading(true);
    const response = await axios.get(
      "https://dacby-assigment.onrender.com/api/stories"
    );
        await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    setStories(response.data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};
  useEffect(() => {
    fetchStories();
  }, []);

  const handleBookmark = async (story) => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );
  if(!user){
   navigate("/signup");
    return;
  }

  try {
    const response = await axios.post(
      "https://dacby-assigment.onrender.com/api/bookmark",
      {
        email: user.email,
        story,
      }
    );
    alert(response.data.message);

  } catch(error){
    console.log(error);

    alert(
      error.response.data.message
    );

  }

};
  // const fetchStories = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:5000/api/stories"
  //     );

  //     setStories(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//    const fetchAllStories = async () => {

//   try {

//     const response = await axios.get(
//       "http://localhost:5000/api/allstories"
//     );

//     setStories(response.data);

//   } catch (error) {

//     console.log(error);

//   }

// };
  return (
    <>
     <Nav
      fetchStories={fetchStories}
      loading={loading}
    />
     <div className="heading"><h1>Top Stories</h1>
     <p>lastest and tranding</p>
     <h3>Discover the most intersting stories from around the web</h3> </div>
       {
      loading && (
        <h2 className="loading">
          Loading latest stories...
        </h2>
      )
    } 
 { !loading && (
     
    <div className="container">

      

      {stories.map((story) => (
        <div className="card"
          key={story._id}
        > <a href={story.url} target="_blank">
            <h2 className="title">{story.title}</h2>
          </a>
          
         
        <div className="info">
          <p>
            <strong className="label">Author:</strong> {story.author}
          </p>

          <p>
            <strong  className="label">Points:</strong> {story.points}
          </p>

          <p>
            <strong  className="label">Posted:</strong> {story.postedAt}
          </p>
          </div>
          <a
      href={story.url}
      target="_blank"
      rel="noopener noreferrer"
      className="read"
    >
      Read More →
    </a>
        <button
  className="bookmark-btn"
  onClick={() =>
    handleBookmark(story)
  }
>
  🔰
</button>
        </div>
      ))}
    </div>)}
    </>
  );
}

export default Home;