import React from 'react';
import './About.css';

function About() {
    return (
        <section className="AboutSection">
            <h3>Welcome to my Rainbow Six Siege Leaderboards App!</h3>
            <p>
                I made this app with the intent of using it for me and a group
                of friends. We all play and enjoy this game alot and can be very
                competitive, and this app is a way of comparing and striving to get
                to the top.
            </p>
            <p>
                This pulls in the inputs of player's data (Information and ranking) and
                displays it on a leaderboard with everyone else's data. The leaderboard can
                be sorted by rank, alphabetical, and more! Theres plans in the future of adding
                more functionality and turning it into a full fledged Rainbow Six utility application.
            </p>
            <p>
                My name is Anthony Swank, and this is a solo project for now, but that could change in the future.
                Let me know how you like the application, and if there are any changes you would like to see!
            </p>
            <h3>Message Me</h3>
            <p>You can leave me a message below, and I will respond to it ASAP.</p>
            <form className="FeedbackForm" action="https://formspree.io/f/mwkwzgno" method="POST">
                <div className="Name">
                <label htmlFor="name">Name:</label>
                <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    required
                />
                </div>
                <div className="Email">
                <label htmlFor="email">Email:</label>
                <input 
                    id="email" 
                    type="email" 
                    name="_replyto" 
                    required
                />
                </div>
                <div className="Message">
                <label htmlFor="form-message">Message:</label>
                <textarea
                    id="form-message" 
                    name="message" 
                    maxLength="200" 
                    minLength="10"
                    required
                >
                </textarea>
                </div>
                <input className="Submit" type="submit" value="Send Message"></input>
            </form>
        </section>
    )
};

export default About