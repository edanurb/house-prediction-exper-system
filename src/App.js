import * as React from 'react';
import './App.css';
import ResponsiveAppBar from './ReponsiveAppBar';
import Rule from './AdminPanel/Rule';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home/home';


function App() {

    // const theme = {
    //   spacing: 8,
    // }
    return (
        <div>

            <ResponsiveAppBar/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/AdminPanel" element={<Rule/>}/>

                </Routes>
            </BrowserRouter>
            <ToastContainer/>

        </div>
    );


}


export default App;

