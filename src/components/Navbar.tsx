import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Search, Bell, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8" />
              <span className="text-xl font-bold">JurisSecure</span>
            </Link>
          </div>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-indigo-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-indigo-600">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-indigo-600">
                <UserCircle className="h-5 w-5" />
              </button>
              <button 
                onClick={handleSignOut}
                className="p-2 rounded-full hover:bg-indigo-600"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-50"
              >
                Entrar
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}