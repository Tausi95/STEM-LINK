import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './layout/public/Intro';
import Sidebar from './layout/public/Sidebar';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Network from './components/features/Network';
import Events from './components/features/Events';
import Features from './pages/Features';
import Mentorship from './components/features/Mentorship';
import Blogs from './components/features/featuresBlogs';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Calculator from './components/features/Calculator';
import Design from './components/features/Design';
import StudentDashboard from './components/features/dashboard/StudentDashboard';
import MentorDashboard from './components/features/dashboard/MentorDashboard';
import SubjectDetail from './pages/SubjectDetail';
import PublicLayout from './layout/public';
import AdminLayout from './layout/admin';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Public pages with common layout */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/subjects/:subjectId" element={<SubjectDetail />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<AdminLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/network" element={<Network />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/mentordashboard" element={<MentorDashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/design" element={<Design />} />
        </Route>        
      </Routes>
    </Router>
  );
}
