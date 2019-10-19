import React from 'react';
import { Link } from 'react-router-dom';


class NeedsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            business: false,
            swim: false,
            cold: false,
            hot: false,
            international: false,
            days: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.props.getUser(this.props.user).then(() => this.setState({business: this.props.user.business, swim: this.props.user.swim, hot: this.props.user.hot, cold: this.props.user.cold, international: this.props.user.international, days: this.props.user.days}));
    }

   
    handleSubmit(e) {
        e.preventDefault();
        this.props.clearBusiness();
        this.props.clearHot();
        this.props.clearCold();
        this.props.clearInternational();
        this.props.clearSwim();
        this.props.logout();
    }
    handleClick(e){
        if (e.target.classList[0] == 'uncrossed'){
            // debugger
            e.target.classList.remove('uncrossed');
            e.target.classList.add('crossed');
        } else {
            // debugger
            e.target.classList.remove('crossed');
            e.target.classList.add('uncrossed');
        }
    }


    
    render() {
        // debugger
        let business_items;
        let cold_items;
        let hot_items;
        let international_items;
        let swim_items;

        let num;
        if (this.state.days <= 5) {
            num = 3
        } else {
            num = 5
        }

     
        if (this.state.business){
           
            business_items = 
            
            <ul>
                <li onClick={this.handleClick} className="uncrossed">2 pairs of Dress Shoes</li>
                <li onClick={this.handleClick} className="uncrossed">{num} Business Tops/Shirts</li>
                <li onClick={this.handleClick} className="uncrossed">{num} Business Bottoms/Pants</li>
                <li onClick={this.handleClick} className="uncrossed">{num} Ties</li>
                <li onClick={this.handleClick} className="uncrossed">2 Suit Jackets</li>
            </ul>
        } else {
            business_items = ''
        }
        if (this.state.hot){
            hot_items = 
            <ul>
                <li onClick={this.handleClick} className="uncrossed">Sunscreen</li>
                <li onClick={this.handleClick} className="uncrossed">Scandals</li>
            </ul>
        } else {
            hot_items = ''
        }

        if(this.state.swim){
            swim_items = 
            <ul>
                <li onClick={this.handleClick} className="uncrossed">Swim Suit</li>
                <li onClick={this.handleClick} className="uncrossed">2 Towels</li>
            </ul>
        } else {
            swim_items = '';
        }

        if (this.state.cold){
            cold_items = 
            <ul>
                <li onClick={this.handleClick} className="uncrossed">Jacket</li>
                <li onClick={this.handleClick} className="uncrossed">Hat</li>
                <li onClick={this.handleClick} className="uncrossed">Gloves</li>
                <li onClick={this.handleClick} className="uncrossed">Boots</li>
                <li onClick={this.handleClick} className="uncrossed">Chapstick</li>
            </ul>
        } else {
            cold_items = '';
        }

        if (this.state.international){

            international_items = 
            <ul>
                <li onClick={this.handleClick} className="uncrossed">Passport</li>
                <li onClick={this.handleClick} className="uncrossed">Money Belt</li>
                <li onClick={this.handleClick} className="uncrossed">Local Currency</li>
                <li onClick={this.handleClick} className="uncrossed">Outlet Converter</li>
            </ul>

        } else {
            international_items = '';
        }

        
        
        return (
            <div className="needs-form">
            <h1>Here is what you need:</h1>
                <div className='logout-button-div'>
                    <button className='logout-button' onClick={this.handleSubmit} type='submit'>Sign Out {this.props.user.email}</button>
                </div>   
                <div className = 'two-lists'>
                    <div className='needs-outline'>

                        <ul>
                            <h1>Carry on</h1>
                            <li onClick={this.handleClick} className = "uncrossed">Headphones</li>
                            <li onClick={this.handleClick} className="uncrossed">Pillow</li>
                            <li onClick={this.handleClick} className="uncrossed">Glasses/Contacts</li>
                            <li onClick={this.handleClick} className="uncrossed">Phone</li>
                            <li onClick={this.handleClick} className="uncrossed">Charger</li>
                            <li onClick={this.handleClick} className="uncrossed">ID</li>
                            <li onClick={this.handleClick} className="uncrossed">Book</li>
                            <li onClick={this.handleClick} className="uncrossed">Meds</li>

                        </ul>
                    </div>
                    <div className='needs-outline'>

                        <ul>
                            <h1>Packed Bag</h1>
                            <li onClick={this.handleClick} className="uncrossed">Toothbrush</li>
                            <li onClick={this.handleClick} className="uncrossed">Tooth paste</li>
                            <li onClick={this.handleClick} className="uncrossed">Hair brush/comb</li>
                            <li onClick={this.handleClick} className="uncrossed">Shampoo</li>
                            <li onClick={this.handleClick} className="uncrossed">Soap</li>
                            <li onClick={this.handleClick} className="uncrossed">Razor</li>
                            <li onClick={this.handleClick} className="uncrossed">Shaving Cream</li>
                            <li onClick={this.handleClick} className="uncrossed">Deodorant</li>
                            <li onClick={this.handleClick} className="uncrossed">Camera</li>
                            <li onClick={this.handleClick} className="uncrossed">Day Bag</li>
                            <li onClick={this.handleClick} className="uncrossed">{this.state.days + 2} pairs of underwear</li>
                            <li onClick={this.handleClick} className="uncrossed">{this.state.days} Shirts</li>
                            <li onClick={this.handleClick} className="uncrossed">{num} pairs of jeans</li>
                            <li onClick={this.handleClick} className="uncrossed">{num} pairs of shorts</li>
                            <li onClick={this.handleClick} className="uncrossed">{this.state.days + 2} pairs of socks</li>
                            <li onClick={this.handleClick} className="uncrossed">2 pairs of shoes</li>
                            {swim_items}
                            {cold_items}
                            {international_items}
                            {hot_items}
                            {business_items}

                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }

};

export default NeedsForm;