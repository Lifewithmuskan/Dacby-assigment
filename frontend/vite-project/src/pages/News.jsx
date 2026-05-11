import { useEffect, useState } from "react";
import axios from "axios";

import Nav from "./Nav.jsx";

import "./News.css";

function News() {

  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllStories();
  }, []);

  const fetchAllStories = async () => {

    try {

      const response = await axios.get(
        "https://dacby-assigment.onrender.com/api/allstories"
      );

      setStories(response.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      <Nav />

      <div className="news-heading">

        <h1>All News</h1>

        <p>
          Explore every story saved in the database
        </p>

      </div>

      {loading ? (

        <h2 className="loading">
          Loading stories...
        </h2>

      ) : (

        <div className="news-container">

          {stories.map((story) => (

            <div
              className="news-card"
              key={story._id}
            >

              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="news-title">
                  {story.title}
                </h2>
              </a>

              <div className="news-info">

                <div className="info-box">
                  <span className="label">
                    Author
                  </span>

                  <span>
                    {story.author}
                  </span>
                </div>

                <div className="info-box">
                  <span className="label">
                    Points
                  </span>

                  <span>
                    {story.points}
                  </span>
                </div>

                <div className="info-box">
                  <span className="label">
                    Posted
                  </span>

                  <span>
                    {story.postedAt}
                  </span>
                </div>

              </div>

              <a
                href={story.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-btn"
              >
                Read More →
              </a>

            </div>

          ))}

        </div>

      )}

    </>
  );
}

export default News;