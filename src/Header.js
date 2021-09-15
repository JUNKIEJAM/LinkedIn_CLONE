import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
//     import LinkedInIcon from '@material-ui/icons/LinkedIn';

import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import Notifications from '@material-ui/icons/Notifications';
import fast from './fast.png';
console.log(fast);

function Header() {
    return (
        <div className='header'>
       
        <div className="header__left">
         <img src={fast} alt="" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" placeholder="Search">

                </input>
            </div>
 
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
            <HeaderOption Icon={ChatIcon} title="Chat" />
            <HeaderOption Icon={Notifications} title="Notifications" />
            <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFB3GvXIeKLEg/profile-displayphoto-shrink_800_800/0/1595042190720?e=1637193600&v=beta&t=8BBYFdk8gzXWCNPK9nvyNBKIUmWX-L_AVrEBgYl9K28"
             title="me" />
              
        </div>


        </div>
    )
}

export default Header
