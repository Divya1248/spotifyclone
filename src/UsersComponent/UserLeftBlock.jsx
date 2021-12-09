import React from 'react'
import Logo from '../Pages/HeaderComponent/Logo'


const UserLeftBlock = () => {
    return (
      <div className="UserleftBlock">
        <Logo />
        <ul>
          <li>
            <a href="">
              <i class="fas fa-home-lg-alt"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fas fa-search"></i>
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="fal fa-books"></i>
              <span>Your library</span>
            </a>
          </li>
        </ul>
        <ul className="Menu2">
          <li>
            <a href="#">
              <i class="fas fa-plus-square"></i>
              <span>Create Playlist</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fal fa-heart-square"></i>
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      <hr></hr>
        <footer>
          <i class="fal fa-arrow-circle-down"></i> <span>Install App</span>
        </footer>
      </div>
    );
}

export default UserLeftBlock
