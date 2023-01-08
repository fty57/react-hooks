import P from 'prop-types';
import { useState, useEffect, useMemo, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  return (
    <div className="post" key={post.id}>
      <h1 style={{ fontSize: '18px' }} onClick={() => handleClick(post.title)}>
        {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  const contadorRef = useRef(0);

  const handleClick = (value) => {
    setValue(value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, [value]);

  useEffect(() => {
    contadorRef.current++;
  });

  return (
    <div className="App">
      <h1>Renderizou: {contadorRef.current}x</h1>
      <p>
        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => (
            <Post post={post} key={post.id} handleClick={handleClick} />
          ))
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
