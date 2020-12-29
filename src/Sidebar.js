import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://i.pinimg.com/originals/94/fd/df/94fddf4ba6b4ffcb2cc5d7bfb59b15c0.jpg"
                alt=""
                />
                <Avatar className="sidebar__avatar" />
                <h2>Anant Gaire</h2>
                <h4>56.gaire@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,589</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,618</p>
                </div>
            </div>

            <div className="sidebar__buttom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;
