import React from 'react';
import {Link, useLocation} from 'react-router-dom';


export function Home() {
    return (
        <div className="home">
            <h1>[Company website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div className="about">
            <h1>[About]</h1>
        </div>
    );
}

export function Events() {
    return (
        <div className="events">
            <h1>[Events]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div className="contact">
            <h1>[Contact]</h1>
        </div>
    );
}

export function Error404() {
    const loc = useLocation();
    return (
        <div className="error404">
            <h1>[The page {loc.pathname} doesn't exist!!!!]</h1>
        </div>
    );
}