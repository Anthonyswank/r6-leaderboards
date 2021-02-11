import React, {Component} from 'react';
import {format} from 'date-fns';
import Context from '../Context';
import './Member.css'

class Member extends Component {
    static contextType = Context;
    render() {
        const {name, number, last_modified} = this.props
        return (
            <div className="Member">
                <h2>{name}</h2>
                <h3>{number}</h3>
                <h3>Last Updated: {format(last_modified, 'Do MMM YYYY')}</h3>
            </div>
        )            
    }
}

export default Member