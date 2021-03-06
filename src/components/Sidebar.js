import React from 'react';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import '../styles/Sidebar.css';
import { useSelector } from 'react-redux';

function Sidebar() {
  const { playlists } = useSelector((state) => state.data)

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="http://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo" />

      <SidebarOptions Icon={HomeIcon} title="Home" />
      <SidebarOptions Icon={SearchIcon} title="Search" />
      <SidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOptions title={playlist.name} />
      ))}




    </div>
  )
}

export default Sidebar;
