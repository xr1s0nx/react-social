import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ProfileContent from "./components/ProfileContent/ProfileContent";
import Diologs from "./components/Navigation/Diologs/Diologs";
import News from "./components/Navigation/News/News";
import Music from "./components/Navigation/Music/Music";
import Settings from "./components/Navigation/Settings/Settings";
import FriendsPage from "./components/Navigation/Friends/FriendsPage/FriendsPage";
import React from "react";
function App(props) {
   return (
      <div className="App">
         <Header />
         <main>
            <div className="container">
               <div className="grid-wrap">
                  <Navigation Friends={props.state.FriendsPage.BestFriends} />
                  <div className="content">
                     <Routes>
                        <Route path="/" element={<Navigate replace to="/Profile/My" />} />
                        <Route path="/Dialogs" element={<Diologs store={props.store} />} />
                        <Route path="/Profile/My" element={<ProfileContent store={props.store} />} />
                        <Route path="/News" element={<News />} />
                        <Route path="/Music" element={<Music />} />
                        <Route path="/Settings" element={<Settings />} />
                        <Route path="/Friends" element={<FriendsPage Friends={props.state.FriendsPage.AllFriends} />} />
                     </Routes>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}

export default App;
