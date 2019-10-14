import React from 'react';
import SplashHeader from './splashHeader';
import { Link } from 'react-router-dom';

const splashForm = () => (
    <div className="splash-form">
        <SplashHeader />
        <div className="splash-body">
                <h1>Know Exactly what to pack</h1>
                <h2>For any trip. Cold. Hot. Business. Pleasure. Fleeing in-laws</h2>
                <Link to='/signup'>Free Demo or Sign Up</Link>
        </div>
    </div>
);

export default splashForm;