import React from "react";
import { useParams } from "react-router-dom";
import Profile from './ProfileComponents/Profile';
import ProfileUpload from "./ProfileComponents/ProfileUpload";
import CreatePlayList from './../Components/AudioComponent/CreatePlayList';
import MusicHome from './../Components/AudioComponent/MusicHome';
import Audiodetails from './../Components/AudioComponent/Audiodetails';

const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <div className="UserrightBlock">
      {id === "profile" && <Profile />}
      {id === "upload_photo" && <ProfileUpload />}
      {id === "create-playlist" && <CreatePlayList />}
      {id === "music-Home" && <MusicHome />}
      <footer> <Audiodetails /></footer>
    </div>
  );
};

export default UserRightBlock;
