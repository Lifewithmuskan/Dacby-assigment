import { useEffect, useState } from "react";

import axios from "axios";

import Nav from "./Nav";

import "./Bookmarks.css";

function Bookmarks() {

  const [bookmarks, setBookmarks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {

    fetchBookmarks();

  }, []);

  const fetchBookmarks = async () => {

    try {

      const response = await axios.get(

        `http://localhost:5000/api/bookmarks/${user.email}`

      );

      setBookmarks(response.data);

    } catch(error){

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  return (
    <>

      <Nav />

      <div className="bookmark-heading">

        <h1>
          Your Bookmarks
        </h1>

      </div>

      {
        loading ? (

          <h2 className="loading">
            Loading bookmarks...
          </h2>

        ) : (

          <div className="bookmark-container">

            {
              bookmarks.map((story, index) => (

                <div
                  className="bookmark-card"
                  key={index}
                >

                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <h2>
                      {story.title}
                    </h2>

                  </a>

                  <p>
                    <strong>
                      Author:
                    </strong>

                    {" "}
                    {story.author}
                  </p>

                  <p>
                    <strong>
                      Points:
                    </strong>

                    {" "}
                    {story.points}
                  </p>

                  <p>
                    <strong>
                      Posted:
                    </strong>

                    {" "}
                    {story.postedAt}
                  </p>
                <a
      href={story.url}
      target="_blank"
      rel="noopener noreferrer"
      className="read"
    >
      Read More →
    </a>
                </div>

              ))
            }

          </div>

        )
      }

    </>
  );
}

export default Bookmarks;