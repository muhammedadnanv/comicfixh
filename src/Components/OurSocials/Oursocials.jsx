import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faYoutube, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Oursocials() {
  return (
    <div id='jc' className="bg-black text-white py-6">
      <h2 className="text-center text-3xl font-bold mb-4">Join community</h2>
      <div className="flex justify-center space-x-10 text-4xl mt-6">
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FontAwesomeIcon icon={faEnvelope} /> 
        </a>
      </div>
    </div>
  );
}

export default Oursocials;
