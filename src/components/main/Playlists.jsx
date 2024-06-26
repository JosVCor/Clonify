import React, {useEffect} from 'react';
import {useStateProvider} from "../../utils/StateProvider";
import axios from "axios";
import {reducerCases} from "../../utils/constants";
import './Playlists.css';

const Playlists = () => {

        const [{token, playlists}, dispatch] = useStateProvider();

        useEffect(() => {
            const getPlaylistData = async () => {
                const response = await axios.get(
                    "https://api.spotify.com/v1/me/playlists",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const {items} = response.data;
                const playlists = items.map(({name, id}) => {
                    return {name, id};
                })
                dispatch({type: reducerCases.SET_PLAYLISTS, playlists});
            };
            getPlaylistData().then(r => console.log(r));
        }, [token, dispatch]);

        return (
            <div className="playlist_container">
                <ul className="playlist_list">
                    {
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }{
                        playlists.map(({name,id})=>{
                            return(
                              <li key={id}>
                                  {name}
                              </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
;

export default Playlists;