import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "@/store/auth";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import InputField from "@/components/inputs/InputField";
import SelectField from "../components/inputs/SelectField";
import showToast from "../utils/toast";
import { mapToOptions } from "../utils/options";

export default function SignupPage() {
  const { register } = useAuth();

  const user = {
    email: "",
    password: "",
    confirm_password: "",
    username: "",
    role: "",
  };

  const validations = Yup.object({
    email: Yup.string().email("Invalid email address").required(),
    username: Yup.string().required(),
    role: Yup.string().required().oneOf(["student", "mentor"]),
    password: Yup.string()
      .required()
      .min(6)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
        "Password must contain at least one letter, one number and one special character"
      ),

    confirm_password: Yup.string().equals(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const handleSubmit = async (user) => {
    try {
      await register(user);
      showToast("Registered successful", "success");
      return <Navigate to="/" />;
    } catch (error) {
      showToast(
        error.message || "An error occurred. Please try again.",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img
            src="/logo.webp"
            alt="Stem-Link"
            className="h-18 w-18 size-10 rounded-full ring-2 ring-white"
          />
        </div>
        <p className="font-bold mb-6">Complete the following details to register</p>

        <Formik
          initialValues={user}
          validationSchema={validations}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <InputField
                name="username"
                label="Username"
                type="text"
                placeholder="Enter your username"
              />
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

              <InputField
                name="confirm_password"
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
              />

              <SelectField 
                name="role" 
                label="Role"
                placeholder="Select your role"
                options={ mapToOptions([
                  "student",
                  "mentor"
                ])} 
              />

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline block w-full"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* Sign In Section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-400">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
