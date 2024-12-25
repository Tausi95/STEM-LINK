import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Network from './components/Network';
import Events from './components/Events';
import Features from './components/Features';
import Mentorship from './components/Mentorship';
import Blogs from './components/Blogs';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Calculator from './components/Calculator';
import Design from './components/Design';

import SubjectDetail from './pages/SubjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/network" element={<Network />} />
            <Route path="/events" element={<Events />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/design" element={<Design />} />
            
            {/* Dynamic Route for Subjects */}
            <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
