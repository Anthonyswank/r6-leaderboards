import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
        <div className="Navigation">
            <ul className="NavList">
                <li className="ListItem">
                <NavLink className="NavLink" to="/">Leaderboard</NavLink>
                </li>
                <li className="ListItem">
                <NavLink className="NavLink" to="/update">Add / Delete</NavLink>               
                </li>
                <li className="ListItem">
                <NavLink className="NavLink" to="/about">About</NavLink>               
                </li>
                {/*<li className="ListItem">
                <NavLink className="NavLink" to="/operators">Operators</NavLink>               
                </li>*/}
                {/*<li className="ListItem">
                <NavLink className="NavLink" to="/login">Login/Logout</NavLink>               
                </li> */}
            </ul>
        </div>
        )
    }
}