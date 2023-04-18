import PropTypes from "prop-types";
import "./BlogPosts.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const config = {
    headers: {
      accept: "application/vnd.forem.api-v1+json",
    },
  };

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=juliegladden", config)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="blog" className="container h-75">
      <h2>Blog</h2>

      <div className="row justify-content-center">
        <div className="col-md-8 ">
          <Carousel className="carousel ">
            {posts.map((article) => (
              <Carousel.Item>
                <a href={article.canonical_url} target="_blank">
                <img src={article.social_image} alt="new" className="social-image" />
                </a>
                <Carousel.Caption >
                  <h3 className="blog-title">{article.title}</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

BlogPosts.propTypes = {};

BlogPosts.defaultProps = {};

export default BlogPosts;
