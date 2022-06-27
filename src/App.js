import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
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

            <Route  path='test' element={<Hero/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
