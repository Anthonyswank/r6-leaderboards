import React, {Component} from 'react';
import {format} from 'date-fns';
import Context from '../Context';
import c4 from '../Assets/rank1.svg';
import c3 from '../Assets/rank2.svg';
import c2 from '../Assets/rank3.svg';
import c1 from '../Assets/rank4.svg';
import b4 from '../Assets/rank5.svg';
import b3 from '../Assets/rank6.svg';
import b2 from '../Assets/rank7.svg';
import b1 from '../Assets/rank8.svg';
import s4 from '../Assets/rank9.svg';
import s3 from '../Assets/rank10.svg';
import s2 from '../Assets/rank11.svg';
import s1 from '../Assets/rank12.svg';
import g3 from '../Assets/rank14.svg';
import g2 from '../Assets/rank15.svg';
import g1 from '../Assets/rank16.svg';
import p3 from '../Assets/rank17.svg';
import p2 from '../Assets/rank18.svg';
import p1 from '../Assets/rank19.svg';
import d1 from '../Assets/rank20.svg';
import blank from '../Assets/rank99.svg';
import './Member.css'

class Member extends Component {
    static contextType = Context;
    getRankPicture = number => {
        let image;
        if(number > 1 && number < 1300) {
            image = c4;
        }
        if(number < 1400 && number >= 1300) {
            image = c3;
        }
        if(number < 1500 && number >= 1400) {
            image = c2;
        }
        if(number < 1600 && number >= 1500) {
            image = c1;
        }
        if(number < 1800 && number >= 1600) {
            image = b4;
        }
        if(number < 1900 && number >= 1800) {
            image = b3;
        }
        if(number < 2000 && number >= 1900) {
            image = b2;
        }
        if(number < 2100 && number >= 2000) {
            image = b1;
        }
        if(number < 2300 && number >= 2100) {
            image = s4;
        }
        if(number < 2400 && number >= 2300) {
            image = s3;
        }
        if(number < 2500 && number >= 2400) {
            image = s2;
        }
        if(number < 2600 && number >= 2500) {
            image = s1;
        }
        if(number < 2800 && number >= 2600) {
            image = g3;
        }
        if(number < 3000 && number >= 2800) {
            image = g2;
        }
        if(number < 3200 && number >= 3000) {
            image = g1;
        }
        if(number < 3600 && number >= 3200) {
            image = p3;
        }
        if(number < 4000 && number >= 3600) {
            image = p2;
        }
        if(number < 4400 && number >= 4000) {
            image = p1;
        }
        if(number < 5000 && number >= 4400) {
            image = d1;
        }
        if(number >= 5000) {
            image = blank;
        }
        return image;
    }
    render() {
        const {name, number, last_modified} = this.props
        return (
            <div className="Member">
                <div className="Info">
                    <h2>Name: {name}</h2>
                    <h3>Rank: {number}</h3>
                    <h3>Added: {format(last_modified, 'Do MMM YYYY')}</h3>
                </div>
                <div className="Picture">
                    <img src={this.getRankPicture(number)} alt="rank" />
                </div>
            </div>
        )            
    }
}

export default Member