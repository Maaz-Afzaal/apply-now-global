import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import partner from '../assets/images/partner.png'
const Footer=()=>{
    const [topUniversities,setTopUniversities]=useState([
        "Queen Mary University",
        "Newscastle University",
        "University of Wollongong",
        "Heriot Watt University",
        "University of South Florida"
    ]);
    const [topCourses,setTopCourses]=useState([
        "Business Analytics",
        "Data science & Analytics",
        "Mineral & Mining",
        "Engineering",
        "Electrical & Electronics"
    ])
    return (
        <>
            <div className='footer w-100'>
                <div className='top row d-none d-md-flex'>
                    <div className='col-3'>
                        <div className='h3'>
                            STUDY ABROAD WITH APPLY NOW GLOBAL
                        </div>
                        <div>
                            Get the facility of mock interview, and get all the other important tips and techniques to successfuly complete the process of visa.
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='bold'>
                            Top Universities
                        </div>
                        {topUniversities.map((topU)=>{
                            return(
                                <div className='mt-2'>{topU}</div>
                            )
                            
                        })}
                    </div>
                    <div className='col-3'>
                        <div className='bold'>
                            Top Courses
                        </div>
                        {topCourses.map((topC)=>{
                            return(
                                <div className='mt-2'>
                                {topC}
                            </div>
                            )
                            
                        })}
                    </div>
                    <div className='col-3 text-start'>
                        <div className='bold'>
                            About Us
                        </div>
                        <div className='links'>
                        <Link to="#" className='d-block mt-2'>
                            Company Profile
                        </Link>
                        <Link to="#" className='d-block mt-2'>
                            Vision
                        </Link>
                        <Link to="#" className='d-block mt-2'>
                            Director Message
                        </Link>
                        <Link to="#" className='d-block mt-2'>
                            Awards & Certifications
                        </Link>
                        <Link to="#" className='d-block mt-2'>
                            NTN Number:123456789
                        </Link>
                        </div>
                        
                    </div>
                </div>
                <div className='top row d-none d-md-flex'>
                    <div className='col-3'>
                        <div className='h3'>
                            FOLLOW US
                        </div>
                        <div>
                        <img src="https://www.freeiconspng.com/uploads/facebook-transparent-logo-png-0.png" alt="facebook from free icons png" className='social img img-fluid'/>
                        <img src="https://www.freeiconspng.com/uploads/twitter-icon-9.png" alt="Twitter free icons png" className='social img img-fluid' />
                        <img src="https://www.freeiconspng.com/uploads/youtube-logo-21.png" alt="YouTube from free icons png" className='social img img-fluid'/>
                        <img src="https://www.freeiconspng.com/uploads/--in-blow-to-crafty-brand-odes-instagram-adopts-minimalist-new-logo-16.jpg" alt="Instagram from freeiconspng" className='social img img-fluid'/>
                        </div>
                    </div>
                    {/* <div className='col-9'>
                        <div className='row w-85 ml-2'>
                        <div className='line col-5'>
                            <hr className=''/>
                        </div>
                        <div className='text col-2'>
                            Our Partners
                        </div>
                        <div className='line col-5'>
                            <hr/>
                        </div>
                        </div>
                        <div className='row w-85 d-flex justify-content-around '>
                            <img src={partner} className="img img-fluid mt-2"/>
                            <img src={partner} className="img img-fluid mt-2"/>
                            <img src={partner} className="img img-fluid mt-2"/>
                            <img src={partner} className="img img-fluid mt-2"/>
                            <img src={partner} className="img img-fluid mt-2"/>
                        </div>
                    </div> */}
                </div>
                <div className='bot row border border-light'>
                        <div className='col-12 col-md-6 text-left mb-3 mb-md-0'>
                        &#169;Copyright 2022 ApplyNowGlobal | Developed by <a href="https://www.extensasol.com/" target="_blank" style={{textDecoration:"none",color:"white"}}>EXTENSASOL</a>
                        </div>
                        <div className='col-12 col-md-6 d-none d-md-flex'>
                            <div className='d-flex w-100 justify-content-end row'>
                            <div style={{borderRight:"1px solid white",}} className=' col-12 col-md-3 text-left text-md-right'>
                                Disclaimer
                            </div>
                            
                            <div style={{borderRight:"1px solid white",maxWidth:"fit-content"}} className='  col-12 col-md-3 text-left text-md-center'>
                                Privacy Policy
                            </div>
                            
                            <div style={{borderRight:"1px solid white",maxWidth:"fit-content"}} className='col-12 col-md-3 text-left text-md-center'> 
                                Terms of Use
                            </div>
                           
                            <div style={{borderRight:"0px solid white",}} className='col-12 col-md-3 text-left  pl-3'>
                                Blog
                            </div>
                            </div>
                            
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer;