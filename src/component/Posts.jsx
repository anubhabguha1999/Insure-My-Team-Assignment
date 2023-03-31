import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

// component
import Post from "./Post";
import Pagination from "./Pagination";

const Posts = ({ searchKey }) => {
  const [posts, setPosts] = useState([]);
  const [tempPosts, setTempPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (searchKey !== "") {
      const filterPost = posts.filter((post) => {
        const words = post.title.split(" ");
        let isFound = false;
        words.forEach((word) => {
          if (word === searchKey) {
            isFound = true;
          }
        });
        return isFound;
      });
      setTempPosts(filterPost);
    } else {
      setTempPosts(posts);
    }
  }, [searchKey]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setTempPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = tempPosts.slice(indexFirstPost, indexLastPost);

  return (
    <>
      <Container className="d-flex flex-wrap">
        {currentPosts.map((post) => (
          <Post post={post} loading={loading} />
        ))}
      </Container>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={tempPosts.length}
        paginate={paginate}
      />
    </>
  );
};

export default Posts;
