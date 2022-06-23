import Nav from './component/nav';
import Home from './component/home';
import Contact from './component/contact us';
import About from './component/about us';
import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';

function App() {
  return (


    <div className="App">

      <BrowserRouter>


        <Nav />


        <div className="App">
          
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={<Contact />}></Route>
            <Route exact path='/about' element={< About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div >
  );
}

export default App;
