import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import angLogo from '../assets/images/angLogo.png';
import email from '../assets/images/email.png';
import fixAppointment from '../assets/images/fixAppointmentLogo.png';
import liveChat from '../assets/images/liveChatLogo.png';
import CountryDropDown from './CountryList';

const Header=(props)=>{
    const [dropdownOpen,setDropDownOpen]=useState(false);
    return (
        <div className='header'>
            <div className='navBar w-100 d-flex justify-content-between pl-5 pr-5'>
                <div className='logo'>
                    <img src={angLogo} className='img img-fluid' alt='Apply now global logo'/>
                </div>
                <div className='d-flex '>
                    <div className='d-flex otherLogo'>
                        <img src={liveChat} alt='Live Chat' className='img img-fluid' /> 
                        <div> Live Chat</div>
                    </div>
                    <div className='verticalLine h-50'>

                    </div>
                    <div className='d-flex otherLogo'>
                        <img src={fixAppointment} alt='Appointment' className='img img-fluid' /> 
                        <div>Fix Appointment</div>
                    </div>
                    <div className='verticalLine h-50'>

                    </div>
                    <div className='d-flex otherLogo'>
                        <img src={email} alt='email' className='img img-fluid' /> 
                        <div>Email</div>
                    </div>
                </div>
            </div>
            <div className='navBarItems'>
                <div className={`link ${(props.home)?"active":""}`}>
                    <Link to="/" style={{textDecoration:"none"}} className='link'>
                        HOME
                    </Link>
                </div>
                <div className={`link ${(props.story)?"active":""}`}>
                    OUR STORY
                </div>
                <div className={`link ${(props.events)?"active":""}`}>
                    <Link to="/events" style={{textDecoration:"none"}} className='link'>
                        NEWS/EVENTS
                    </Link>
                </div>
                <div className={`link ${(props.blog)?"active":""}`}>
                    <Link to="/blogs" style={{textDecoration:"none"}} className='link'>
                        BLOG
                    </Link>
                   
                </div>
                <div className={`link ${(props.guidance)?"active":""}`}>
                    GUIDANCE
                </div>
                <div className={`link ${(props.opportunity)?"active":""}`}>
                    OPPORTUNITY
                </div>
                <div className={`link ${(props.country)?"active":""}`}>
                    
                    <CountryDropDown setDropDownOpen={setDropDownOpen} dropdownOpen={dropdownOpen} />
                </div>
            </div>
        </div>
    )
}

export default Header;