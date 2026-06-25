import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Working from './sections/Working';
import Disclaimer from './sections/Disclaimer';

import AdminLogin from './sections/AdminLogin';
import Dashboard from './sections/Dashboard';
import ProtectedRoute from './sections/ProtectedRoute'; // NEW: import the ProtectedRoute component

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Working />
      <Disclaimer />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminLogin />} />

      {/* NEW: Dashboard is now wrapped in ProtectedRoute — only logged in admins can access it */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;