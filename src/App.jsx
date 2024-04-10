// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoicesList from './InvoicesList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoices" element={<InvoicesList />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
