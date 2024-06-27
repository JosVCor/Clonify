import React from 'react';
import './Login.css';

const Login = () => {

    const handleLogin = () => {
        const clientId = "3a38c62eb67e4a45b67061fe045a53e4"
        const redirectUrl = "http://localhost:3000/"
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    }

    return (
        <div className="login_container">
            <button className="login_button" onClick={handleLogin}>Connect to Spotify</button>
        </div>
    );
};

export default Login;