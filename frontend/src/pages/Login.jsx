import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userService from '@/services/userService';
import { useAuth } from '@/store/auth';
import '@/assets/css/Login.css';

export default function Login (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn, setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await userService.login(email, password);
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      setIsLoggedIn(true);
      setUser(data.user);
      navigate('/');
    } catch (error) {
      alert(error.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/logo.webp" alt="Stem-Link" className="h-18 w-18 size-10 rounded-full ring-2 ring-white" />
        </div>
        <p className="font-bold mb-6">Login to get started</p>
        <form onSubmit={ handleSubmit }>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={ email }
              onChange={ evt => setEmail(evt.target.value) }
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={ evt => setPassword(evt.target.value) }
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        {/* Sign Up Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have account?{' '} 
            <Link to="/signup" className='text-blue-400 hover:text-blue-400'>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

