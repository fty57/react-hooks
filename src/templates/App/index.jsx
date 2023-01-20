import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Posts } from '../../components/Posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

// App.jsx
function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <h1>123</h1>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
