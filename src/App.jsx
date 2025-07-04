import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ThemeProvider } from './themes/Provider';
import { AppBar } from './components/layout';
import { HomePage, ProductPage, CartPage } from './pages';

function App() {
    return (
        <>
            <ThemeProvider initialTheme={'light'}>
                <BrowserRouter>
                    <AppBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/product/:id/:variantId"
                            element={<ProductPage />}
                        />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
