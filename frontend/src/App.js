import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Intro from './components/layout/Intro';
import Sidebar from './components/layout/Sidebar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Network from './components/features/Network';
import Events from './components/features/Events';
import Features from './components/pages/Features';
import Mentorship from './components/features/Mentorship';
import Blogs from './components/features/featuresBlogs';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Calculator from './components/features/Calculator';
import Design from './components/features/Design';
import axiosConfig from './services/axiosConfig';

import SubjectDetail from './components/pages/SubjectDetail';

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
