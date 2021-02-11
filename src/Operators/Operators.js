import React, {Component} from 'react';
import './Operators.css';

// WIP file, not in use.

export default class Operators extends Component {
    handleSearch = e => {
        e.preventDefault();
        const selectedOperator = e.target['op-search'].value
        console.log(selectedOperator)
        fetch('http://localhost:8000/operators')
            .then(res => 
                res.json())
            .then(res => 
                console.log(res))
            .then(res =>
                res.defender.find(operator => operator.constructor.name === selectedOperator))
    };

    render() {
        return (
            <div>
                <div className='DropdownBox'>
                    <form onSubmit={e => this.handleSearch(e)}>
                        <label htmlFor='op-search-bar'>
                            Search Operators
                        </label>
                        <input
                        type='text'
                        id='op-search-bar'
                        name='op-search'
                        />
                        <div>
                            <button type='submit'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <h2>Search For Operators</h2> 
                <p>This section will be for searching up operators, and</p>
                <p>all possible class setups. Lists all weapons, gadgets,</p>
                <p>attachments, and each operators special gadget.</p>
                <p>Useful for planning ahead class setups for each operator.</p>
            </div>
        )
    }
}
