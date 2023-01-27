import React from 'react'
import './App.css';
import { HashRouter , Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AllCountries from './components/AllCountries';
import CountryInfo from './components/CountryInfo';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <AllCountries />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
    </HashRouter>
  )
}

export default App
