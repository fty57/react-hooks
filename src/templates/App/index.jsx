import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css';

// App.jsx
function App() {
  return (
    <PostsProvider>
      <div>
        <h1>123</h1>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
