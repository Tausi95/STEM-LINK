import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/store/auth';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from '@/components/inputs/InputField';
import showToast from '../utils/toast';

export default function LoginPage (){

  const { navigate } = useNavigate();
  const { login } = useAuth()
  
  const user = {
    email: '',
    password: '',
    rememberMe: false
  }

  const validations = Yup.object({
    email: Yup.string().email("Invalid email address").required(),
    password: Yup.string().required()
  })

  const handleSubmit = async (user) => {
    try {
      await login(user);
      showToast('Login successful', 'success');
      navigate('/');
    } catch (error) {
      showToast(error.message || 'An error occurred. Please try again.', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/logo.webp" alt="Stem-Link" className="h-18 w-18 size-10 rounded-full ring-2 ring-white" />
        </div>
        <p className="font-bold mb-6">Login to get started</p>

        <Formik initialValues={user} validationSchema={validations} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <InputField
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email address"
              />

              <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name='rememberMe'
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
            </Form>
          )}
        </Formik>

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

