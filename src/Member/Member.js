import React, {Component} from 'react';
import Context from '../Context';
import './Member.css'

class Member extends Component {
    static contextType = Context;
    render() {
        const {name, rank, last_modified} = this.props
        return (
            <div className="Member">
                <h2>{name}</h2>
                <h3>{rank}</h3>
                <h3>Last Updated: {last_modified}</h3>
            </div>
        )            
    }
}

export default Member