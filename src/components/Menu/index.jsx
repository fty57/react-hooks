import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to="/">Home</Link>
      <a href="/">Home (A)</a>
      <Link to="/abc">Abc</Link>
      <a href="/abc">Abc (A)</a>
    </nav>
  );
};
