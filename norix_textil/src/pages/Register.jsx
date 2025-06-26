import React from 'react';

export default function Register() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md" />
        <button className="bg-purple-700 text-white w-full py-2 rounded-md hover:bg-purple-800">Register</button>
      </form>
    </div>
  );
}
