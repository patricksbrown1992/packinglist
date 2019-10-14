import React from 'react';
import SplashHeader from './splashHeader';
import { Link } from 'react-router-dom';

const splashForm = () => (
    <div className="splash-form">
        <SplashHeader />
        <div className="splash-body">
                <div className ='splash-left'>
                    <h1>Know Exactly What to Pack</h1>
                </div>
                <div className='splash-right'>
                    <h2>For any trip. Cold. Hot. Business. Pleasure. Fleeing in-laws. Save the free world</h2>
                    <Link to='/signup'>Free Demo or Sign Up</Link>

                </div>
        </div>
    </div>
);

export default splashForm;