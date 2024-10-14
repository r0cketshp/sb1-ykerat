import React from 'react';
import { Link } from 'react-router-dom';
import { UserButton, SignInButton, useUser } from '@clerk/clerk-react';
import { Home, PlusCircle, List } from 'lucide-react';

const Header: React.FC = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Home className="mr-2" /> Holiday Homes
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link to="/" className="hover:text-blue-200">Home</Link>
            </li>
            {isSignedIn && (
              <>
                <li>
                  <Link to="/listings" className="hover:text-blue-200 flex items-center">
                    <List className="mr-1" /> My Listings
                  </Link>
                </li>
                <li>
                  <Link to="/create-listing" className="hover:text-blue-200 flex items-center">
                    <PlusCircle className="mr-1" /> Create Listing
                  </Link>
                </li>
              </>
            )}
            <li>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
                    Sign In
                  </button>
                </SignInButton>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;