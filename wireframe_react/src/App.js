import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import MainPage from './components/page/MainPage';
import Header from './components/layer/Header';

function App(props) {
  return (
    <div className="App">
     <BrowserRouter>
            <Header/> 
                <div>
                    <Routes>
                            <Route path="/" element={<MainPage/>} />
                            {/* <Route path="/" element={<LoginPage />} /> */}
                    </Routes>
                </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
