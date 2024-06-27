import React from 'react';
import './Sidebar.css';
import {IoLibrary} from "react-icons/io5";
import {MdHomeFilled, MdSearch} from "react-icons/md";
import Playlists from "./Playlists";

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="top_links">
                <div className="sidebar_logo">
                </div>
                <ul className="sidebar_list">
                    <li>
                        <MdHomeFilled/>
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch/>
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary/>
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>
            <Playlists/>
        </div>
    );
};

export default Sidebar;