import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const JoinNow = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between mb-6 border-b pb-2">
              <button
                className={`w-1/2 text-lg font-semibold pb-2 cursor-pointer ${
                  isLogin ? "border-b-4 border-sky-600 text-sky-600" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>

              <button
                className={`w-1/2 text-lg font-semibold pb-2 cursor-pointer ${
                  !isLogin ? "border-b-4 border-sky-600 text-sky-600" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>

            {isLogin ? (
              <form className="space-y-4">
                <div>
                  <label className="text-gray-600 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="Enter password"
                  />
                </div>

                <button className="w-full cursor-pointer bg-sky-600 text-white py-2 rounded-lg shadow hover:bg-sky-700 transition">
                  Login
                </button>

                <p className="text-center text-sm text-gray-600">
                  Forgot password?
                  <span className="text-sky-600 ml-1 cursor-pointer">Reset</span>
                </p>
              </form>
            ) : (

              <form className="space-y-4">
                <div>
                  <label className="text-gray-600 text-sm">Full Name</label>
                  <input
                    type="text"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="+234 000 0000"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm">Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="******"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-sm">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-500"
                    placeholder="******"
                  />
                </div>

                <button className="w-full cursor-pointer bg-sky-600 text-white py-2 rounded-lg shadow hover:bg-sky-700 transition">
                  Create Account
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default JoinNow;
