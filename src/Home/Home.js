import React, { Component } from 'react';
import Member from '../Member/Member';
// import sampleMembers from '../sampleMembers';
// import {NavLink, Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {

    // This is the sorting functionality of the leaderboard. Sorts by rank, name, and eventually last modified date.
    onSorting = e => {
        const term = e.target.value;
        let unsortedMembers = this.props.members;
        let sortedMembers;
        if (term === 'asc') {
            sortedMembers = [...unsortedMembers].sort((a, b) => {
                return b.number - a.number;
            }); 
        } else if (term === 'desc') {
            sortedMembers = [...unsortedMembers].sort((a, b) => {
                return a.number - b.number;
            });
        } else if (term === 'sortnameaz') {
            sortedMembers = [...unsortedMembers].sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
        } else if (term === 'sortnameza') {
            sortedMembers = [...unsortedMembers].sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
            });
        } else if (term === 'updated') {
            // Implement functionality later on when modified dates is added.
            sortedMembers = [...unsortedMembers].sort((a, b) => {
                return a.last_modified - b.last_modified;
            });
        }
        this.props.handleSorting(sortedMembers);
    };

    // renders leaderboard component to home page.
    render() {
        return (
        <div>
            <div className="DropdownBox">
                <form>
                    <select
                    onChange={this.onSorting}
                    className="SearchBar">
                        <option value="asc">Sort by Rank(Highest to Lowest)</option>
                        <option value="desc">Sort by Rank(Lowest to Highest)</option>
                        <option value="sortnameaz">Sort by Name A - Z</option>
                        <option value="sortnameza">Sort by Name Z - A</option>
                        <option value="updated">Sort by Last Updated</option>
                    </select>
                </form>
            </div>
            <div className="Leaderboard">
                <ul>
                    {this.props.members.map(member => 
                        <li className="LeaderboardSpot" key={member.id}>
                            <Member
                                name={member.name}
                                number={member.number}
                                last_modified={member.last_modified}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
        )
    }
}