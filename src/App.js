import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* Agrega aquí otros componentes y contenido */}
      <Footer />
    </div>
  );
}

export default App;