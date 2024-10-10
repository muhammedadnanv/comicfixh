import React, { useState } from 'react';
import './SpotifyWidget.css'; // Import the CSS file

const SpotifyWidget = () => {
    const [isWidgetVisible, setWidgetVisible] = useState(false);

    // Function to toggle Spotify widget visibility
    const toggleSpotifyWidget = () => {
        setWidgetVisible(!isWidgetVisible);
    };

    return (
        <div>
            {/* Spotify Icon Button */}
            <div className="spotify-button" onClick={toggleSpotifyWidget}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                    alt="Spotify Icon"
                />
            </div>

            {/* Spotify Widget */}
            {isWidgetVisible && (
                <div className="spotify-widget">
                    <iframe
                        src="https://open.spotify.com/embed/episode/147AXKFEUZqTlN11Y3Ntpw?utm_source=generator"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
            )}
        </div>
    );
};

export default SpotifyWidget;
