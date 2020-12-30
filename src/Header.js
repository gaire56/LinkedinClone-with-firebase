import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                alt="logo"/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder='Search' type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQElCI4ch4cgfg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=CttxrA3PEKMUS2PjtB22HWWWp3747WqNUo08MA0i6AU" title='me' />
            </div>
        </div>
    )
}

export default Header;
