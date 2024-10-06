import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Oursocials() {
  return (
    <div id='jc' className="bg-black text-white py-6">
      <h2 className="text-center text-3xl font-bold mb-4">Join community</h2>
      <div className="flex justify-center space-x-10 text-4xl mt-6">
       
        <a href="https://www.youtube.com/@comicfixxx" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.linkedin.com/company/comicfix-com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/comicfix.in/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://x.com/comicfixin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="mailto:comicfixxx@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faEnvelope} /> 
        </a>
      </div>
    </div>
  );
}

export default Oursocials;
