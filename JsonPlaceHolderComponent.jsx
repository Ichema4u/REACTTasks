import React, { useEffect, useState } from "react";

function JsonPlaceHolder() {
  const [data, setData] = useState(null);
  const [Posts, setPosts] = useState([]);
  const [Comments, setComments] = useState([]);
  const [Albums, setAlbums] = useState([]);
  const [Photos, setPhotos] = useState([]);
  const [Todos, setTodos] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate an API call
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="json-placeholder">
      <h1>JSON Placeholder</h1>
      <p>This is a placeholder component for JSON data.</p>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
      {Posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      {Comments.map((comment) => (
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </div>
      ))}
      {Albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
        </div>
      ))}
      {Photos.map((photo) => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
        </div>
      ))}
      {Todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
        </div>
      ))}
      {Users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </div>
  );
}
export default JsonPlaceHolder;
