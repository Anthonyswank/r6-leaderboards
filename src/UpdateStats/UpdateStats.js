import React, { Component } from 'react';
import Context from '../Context';
import './UpdateStats.css';

export default class UpdateStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: null,
        }
    }
    static defaultProps = {
        history: {
            push: () => { }
        },
    }
    static contextType = Context;

    handleSubmit = e => {
        e.preventDefault()
        const newMember = {
            name: e.target['member-name'].value,
            number: e.target['member-number'].value,
            last_modified: new Date(),
        }
        fetch('https://salty-woodland-49219.herokuapp.com/members', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMember),
        })
            .then(res => {
                if(!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
            })
            .then(member => {
                this.context.addMember(member)
                this.props.history.push('/')
            })
            .catch(error => {
                console.error({error})
            })
    }

    handleDelete = e => {
       e.preventDefault()
       const name = e.target['member-delete-name'].value
       fetch(`https://salty-woodland-49219.herokuapp.com/members/${name}`, {
           method: 'DELETE',
           headers: {
               'content-type': 'application/json'
           }
       })
       .then(res => {
           if(!res.ok) {
               return res.json().then(e => Promise.reject(e))
           }
           return;
       })
       .then(() => {
           this.context.deleteMember(name)
           this.props.history.push('/')
       })
       .catch(error => {
           console.error({error})
       })
    }

    updateName(name) {
        this.setState({name: name});
    };

    updateNumber(number) {
        this.setState({number: number});
    };

    render() {
        return (  
        <section>
        <section className='AddMember'>
            <h2>Add a member</h2>
            <form className="AddForm" onSubmit={e => this.handleSubmit(e)}>
                <div>
                    <label htmlFor='member-name-input'>
                        Member Name
                    </label>
                    <input 
                    type='text'
                    id='member-name-input'
                    name='member-name'
                    onChange={e => this.updateName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='member-number-input'>
                        Member Rank
                    </label>
                    <input
                    type='number'
                    id='member-number-input'
                    name='member-number'
                    onChange={e => this.updateNumber(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Add"></input>
                </div>
            </form>
        </section>
        <section className='DeleteMember'>
            <h2>Delete a member</h2>
            <form className="AddForm" onSubmit={e => this.handleDelete(e)}>
                <div>
                    <label htmlFor='member-delete-name-input'>
                        Member Name
                    </label>
                    <input 
                    type='text'
                    id='member-delete-name-input'
                    name='member-delete-name'
                    />
                </div>
                <div>
                    <input type="submit" value="Delete"></input>
                </div>
            </form>
        </section>
        </section>
        )
    }
}