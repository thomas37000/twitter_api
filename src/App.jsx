import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './component/Card';

const App = () => {
  const [posts, setPosts] = useState([]);
  
  const API_URL = "https://slideyour.net/api.php";
  const params = {
    s: 'thomas4',
    t: 'ddf1f0d7ee779ed42772231fa903a43b',
    object: 'post',
    type: 'get',
    network: 'twitter',
    per_page: 30,
  };

  useEffect(() => {
    axios
      .get(`${API_URL}`, { params })
      .then((res) => res.data)
      .then((data) => {
        setPosts(data);
        console.log("twitter posts", data);
      })
      .catch((error) => {
        let message;
        if (error) {
          message = "vous n' avez pas accès à cette page";
        } else {
          message = error.response.data.errorMessage;
          console.log(message);
          console.log(error);
        }
      });
  }, []);

  return (
    <div className="galerie">
      {posts.map((post) => (
        <Card key={post.pub_id} post={post} session={post.session_id} />
      ))}
    </div>
  );
};

export default App;
