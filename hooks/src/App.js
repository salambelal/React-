

import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Movie from './components/movie';
// import Film from './components/film';

import {BrowserRouter , Route, Router, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Nav />
      <Routes>

          <Route path="/"  element={<Home />} />
          <Route path="/:movie_id"  element={<Movie />} />
          <Route path="/about"  element={<About />} />
          {/* <Route path="/film/:id"  element={<Film />} /> */}
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
