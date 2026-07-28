import './App.css';
import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { BusinessCard } from './BusinessCard/BusinessCard';
import { Projects } from './Projects/Projects';
import { WoodPage } from './Projects/Wood/WoodPage';
import { ZinesPage } from './Projects/Zines/ZinesPage';
import { BookRecsPage } from './Projects/BookRecs/BookRecsPage';
import { PhotoBlogPage } from './Projects/PhotoBlog/PhotoBlogPage';

const MainPage = () => (
  <>
    <BusinessCard />
    <Projects />
  </>
);

const App = () => {

  useEffect(() => {
    document.title = "victoria";
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <link rel="icon" href="/favicon.ico"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300i,400&amp;display=swap" rel="stylesheet"></link>
        </header>
        <div>
          <div className="App-text">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/2023-chair" element={<WoodPage />} />
              <Route path="/2023-slappy-slant-chapbooks" element={<ZinesPage />} />
              <Route path="/bookshelf" element={<BookRecsPage />} />
              <Route path="/photoblog" element={<PhotoBlogPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
