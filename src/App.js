import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import {Login} from "./pages/Login";

const App = () => {
    return(
        <div className='overflow-hidden'>
            <Router>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path={'/home'} element={<Home/>}/>
                    <Route path={'/product/:id'} element={<ProductDetails/>}/>
                </Routes>
                <Sidebar/>
                <Footer/>
            </Router>
        </div>
    )
};

export default App;
