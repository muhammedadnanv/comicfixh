import React from 'react';

function Footer() {
  const handleSupportUsClick = () => {
    const gpayLink = "https://comicfixsupportspark.vercel.app/";
    window.location.href = gpayLink;
  };

  return (
    <footer className="bg-black border-t text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">ComicFix</h2>
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
        <div className="text-xl text-white">
          <a 
            className="hover:text-yellow-600 uppercase font-bold text-yellow-500 cursor-pointer underline"
            onClick={handleSupportUsClick}
          >
            Support us
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
