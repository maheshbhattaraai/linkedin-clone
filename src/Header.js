import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import ChatIcon from '@material-ui/icons/Chat';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from './features/userSlice';
import {auth} from './firebase';

function Header() {
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notification' />
                <HeaderOption onClick={logoutOfApp} title='me' avatar="test" />
            </div>
        </div>
    )
}

export default Header
