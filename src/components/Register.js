import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "./Alert";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="card">
        {error && <Alert message={error} />}
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="text-sm block font-bold text-gray-400 my-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="tuemail@jj.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm block font-bold text-gray-400 my-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="******"
            />
          </div>
          <button className=" card w-full bg-blue-400 text-white hover:bg-blue-300 shadow-md rounded text-center py-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
