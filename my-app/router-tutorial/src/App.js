import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import About from './About';
import Article from './Article';
import Articles from './Articles';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;