import React from 'react';
import { Link } from 'react-router-dom';


class NeedsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            business: false,
            swim: false,
            rainy: false,
            cold: false,
            hot: false,
            snowy: false,
            international: false,
            new_money: false,
            num_days: null,
            camping: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();

    }
    



    render() {
        // debugger
        return (
            <div className="needs-form">
            <h1>Here is what you need:</h1>
                <button onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                <div className = 'two-lists'>
                    <div className='needs-outline'>

                    <ul>
                        <h1>Carry on</h1>
                        <li>Headphones</li>
                        <li>Pillow</li>
                        <li>Glasses/Contacts</li>
                        <li>Phone</li>
                        <li>Charger</li>
                        <li>ID</li>
                        

                    </ul>
                    </div>
                    <div className='needs-outline'>

                        <ul>
                            <h1>Packed Bag</h1>
                            <li>Meds</li>
                            <li>Toiletries</li>
                            <li>Camera</li>
                            <li>Day Bag</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }

};

export default NeedsForm;