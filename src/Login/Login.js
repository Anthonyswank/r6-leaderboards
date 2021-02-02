import React, { Component } from 'react';
// import {NavLink, Link} from 'react-router-dom';
import './Login.css';

export default class Login extends Component {

    handleChange(e) {
        const username = e.target.username.value;
        const password = e.target.password.value;
        e.preventDefault();
        this.props.handleLogin(username, password);
    };

    render() {
        return (
        <div className="Logpage">
            <p>This will be the login/logout page.</p>
            <form onSubmit={this.handleChange.bind(this)}>
                <div>
                    username
                    <input type="text" name="username" />
                </div>
                <div>
                    password
                    <input type="password" name="password" />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
        )
    }
}