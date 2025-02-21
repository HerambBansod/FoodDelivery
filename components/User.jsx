'use client';

import React, { useState } from "react";

const User = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
                {/* Tab Switcher */}
                <div className="flex justify-between mb-6 gap-4 ">
                    <button
                        className={`w-1/2 text-center py-2 rounded-lg font-semibold transition ${isLogin ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
                            }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                    <button
                        className={`w-1/2 text-center py-2 rounded-lg font-semibold transition ${!isLogin ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600"
                            }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Signup
                    </button>
                </div>

                {/* Form */}
                <form>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm mb-2">Full Name</label>
                            <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your name" />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">Email</label>
                        <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm mb-2">Password</label>
                        <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Enter your password" />
                    </div>
                    <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                        {isLogin ? "Login" : "Signup"}
                    </button>
                </form>

                {/* Extra Options */}
                {isLogin && (
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don't have an account? <span className="text-orange-500 cursor-pointer" onClick={() => setIsLogin(false)}>Sign up</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default User;
