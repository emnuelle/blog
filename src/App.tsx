import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
