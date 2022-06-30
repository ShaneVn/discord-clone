import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>

          
            <Route exact path='/' element={<><Header/><Hero/></>}/>

            <Route exact path='/channels' element={<Home/>}/>

            <Route exact path='/channels/:id' element={<Home/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
