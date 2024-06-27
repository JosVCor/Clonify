import React from 'react';
import './Spotify.css';
import Body from './Body';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Spotify = () => {
    return (
        <div className="spotify_container">
            <div className="spotify_body">
                <Sidebar/>
                <div className="body">
                    <Navbar/>
                    <div className="body_contents"></div>
                    <Body/>
                </div>
            </div>
            <div className="spotify_footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Spotify;