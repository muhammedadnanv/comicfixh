import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDonateClick = () => {
    const gpayLink = "upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&cu=INR&tn=Donation";
    window.location.href = gpayLink;
  };

  return (
    <header className="fixed top-0 w-full h-15 bg-opacity-50 backdrop-blur-md align-middle px-4 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white">
              ComicFix
            </a>
          </div>

          <nav className="hidden md:flex space-x-4 text-white">
            <a href="#jc" className="py-2">
              Join community
            </a>

            <a href="#ep" className="py-2">
              Explore Projects
            </a>

            <a href="#jc" className="py-2">
              Contact Us
            </a>

            <button 
              onClick={handleDonateClick} 
              className="inline-block px-2 py-2 text-yellow-500 underline font-bold rounded-md"
            >
              Donate
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="backdrop-blur md:hidden w-screen text-white">
          <a href="#jc" className="block px-4 py-2">
            Join community
          </a>

          <a href="#ep" className="block px-4 py-2">
            Explore Projects
          </a>

          <a href="#jc" className="block px-4 py-2">
            Contact Us
          </a>

          <button
            onClick={handleDonateClick}
            className="block px-4 py-2 font-bold"
          >
            Donate
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;
