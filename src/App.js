import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './views/AdminPage';
import FormularioTabla from './views/FormularioTabla';
import LoginPage from './views/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<AdminPage />}></Route>
                <Route path='/FormularioTabla' element={<FormularioTabla />}></Route>
                <Route path='/Login' element={<LoginPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;