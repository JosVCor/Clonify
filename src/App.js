import React,{useEffect} from 'react';
import Login from "./components/login/Login";
import {reducerCases} from "./utils/constants";
import {useStateProvider} from "./utils/StateProvider";
import Spotify from "./components/main/Spotify";

function App() {

    const [{token}, dispatch] = useStateProvider();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash){
            const token = hash.substring(1).split("&")[0].split("=")[1];
            console.log(token);
            dispatch({ type: reducerCases.SET_TOKEN, token});
        }
    }, [token, dispatch]);

  return (
    <div className="App">
          {token ? <Spotify/> : <Login/>}
    </div>
  );
}

export default App;
