import React, { Component } from 'react';
import Member from '../Member/Member';
import sampleMembers from '../sampleMembers';
// import {NavLink, Link} from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sortTerm: 'asc',
            sortedMembers: sampleMembers
        };
    };

    // This is so that array is sorted automatically before any options are changed. Defaults to first option.
    componentDidMount() {
        const initialRender = [...this.state.sortedMembers].sort((a, b) => {
            return b.rank - a.rank;
        })
        this.setState({
            sortedMembers: initialRender
        })
    };

    // This is the sorting functionality of the leaderboard. Sorts by rank, name, and eventually last modified date.
    onSorting = e => {
        const term = e.target.value;
        let sortedMembers = this.state.sortedMembers;
        if (term === 'asc') {
            sortedMembers = [...sortedMembers].sort((a, b) => {
                return b.rank - a.rank;
            }); 
        } else if (term === 'desc') {
            sortedMembers = [...sortedMembers].sort((a, b) => {
                return a.rank - b.rank;
            });
        } else if (term === 'sortnameaz') {
            sortedMembers = [...sortedMembers].sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
        } else if (term === 'sortnameza') {
            sortedMembers = [...sortedMembers].sort((a, b) => {
                if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                return 0;
            });
        } else if (term === 'updated') {
            // Implement functionality later on when modified dates is added.
            sortedMembers = [...sortedMembers].sort((a, b) => {
                return a.last_modified - b.last_modified;
            });
        }
        this.setState({ sortTerm: term });
        this.setState({ sortedMembers: sortedMembers });
    };

    // renders leaderboard component to home page.
    render() {
        return (
        <div>
            <div className="DropdownBox">
                <form>
                    <select
                    value={this.state.sortTerm}
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
                    {this.state.sortedMembers.map(member => 
                        <li className="LeaderboardSpot" key={member.id}>
                            <Member
                                name={member.name}
                                rank={member.rank}
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