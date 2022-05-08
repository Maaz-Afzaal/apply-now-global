import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import angLogo from '../assets/images/angLogo.png';
import email from '../assets/images/email.png';
import fixAppointment from '../assets/images/fixAppointmentLogo.png';
import liveChat from '../assets/images/liveChatLogo.png';
import CountryDropDown from './CountryList';

const Header=(props)=>{
    const [navbarOpen,setNavbarOpen]=useState(false);
    const [dropdownOpen,setDropDownOpen]=useState(false);

    const toggle=()=>{
        setNavbarOpen(!navbarOpen);
    }
    return (
        <div className='header'>
            <div className='navBar w-100 d-md-flex justify-content-between pl-5 pr-5'>
                <div className='logo'>
                    <img src={angLogo} className='img img-fluid' alt='Apply now global logo'/>
                </div>
                <div className='d-none d-lg-flex '>
                    <div className='d-flex otherLogo pointer'>
                        <img src={liveChat} alt='Live Chat' className='img img-fluid' /> 
                        <div onClick={()=>{
                            alert("Coming Soon...")
                        }}> Live Chat</div>
                    </div>
                    <div className='verticalLine h-50'>

                    </div>
                    <div className='d-flex otherLogo pointer'>
                        <img src={fixAppointment} alt='Appointment' className='img img-fluid' /> 
                        <div onClick={()=>{
                            alert("Coming Soon...")
                        }}>Fix Appointment</div>
                    </div>
                    <div className='verticalLine h-50'>

                    </div>
                    <div className='d-flex otherLogo pointer' >
                        <img src={email} alt='email' className='img img-fluid' /> 
                        <a href="mailto:support@applynowglobal.com" style={{color:"black",textDecoration:"none"}}>Email</a>
                    </div>
                </div>
            </div>
            {/* <div className='navBarItems'>
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
            </div> */}

            <div className='navBarItems'>
            <Navbar light expand="md" className='navBarFull col-12 col-lg-8 offset-lg-2'>
          <NavbarToggler onClick={toggle} className='ml-auto'/>
          <Collapse isOpen={navbarOpen} navbar>
                    <Nav navbar className="links">
                    <NavItem>
                        <NavLink href="/" className={`textLink ${props.home?"activeNavbarItem":""}`}>HOME</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink href="/university/harvarduniversity" className={`textLink ${props.university?"activeNavbarItem":""}`}>UNIVERSITY</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink href="/events" className={`textLink ${props.events?"activeNavbarItem":""}`}>NEWS/EVENTS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/blogs" className={`textLink ${props.blogs?"activeNavbarItem":""}`}>BLOG</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/aboutus" className={`textLink ${props.aboutus?"activeNavbarItem":""}`}>About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/courses" className={`textLink ${props.courses?"activeNavbarItem":""}`}>COURSES</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/faqs/" className={`textLink ${props.faqs?"activeNavbarItem":""}`}>FAQs</NavLink>
                    </NavItem>
                    <NavItem className='d-flex align-items-center'>
                        <CountryDropDown setDropDownOpen={setDropDownOpen} dropdownOpen={dropdownOpen} country={props.country}/>
                    </NavItem>
                    </Nav>
                </Collapse>
               
                </Navbar>
            </div>
        </div>
    )
}

export default Header;