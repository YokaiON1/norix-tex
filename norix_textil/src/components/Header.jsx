import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-purple-700 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">👕 Norix Textile</div>
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/register">Register</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
