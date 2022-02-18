import React,{useState} from "react";

import uniLogo from '../../assets/images/uniLogo.png';
import locationLogo from '../../assets/images/locationLogo.png';

const CoursesCard=(props)=>{
    return(
        <div className="coursesCard">
            {props.coursesData.map((item,index)=>{
                return(
                    <>
                        <div className="fullCard">
                            <div className="imageBox">
                                <img src={item.image} alt="univeristy logo" className="img img-fluid"/>
                            </div>
                            <div className="restCard">
                                <div className="top">
                                    <div className="col-12 col-sm-6 d-flex justify-content-start flex-column">
                                        <div className="courseName">
                                            {item.courseName}
                                        </div>
                                        <div className="d-flex">
                                     
                                                <div className="location d-flex align-items-center">
                                                    <img src={uniLogo} alt="" className="img img-fluid"/>
                                                    <span>{item.universityName}</span>
                                                </div>
                                            
                                            <div className="location">
                                                <img src={locationLogo} alt="" className="img img-fluid "/>
                                                <span>{item.countryName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mt-2 mt-md-0 mb-2 mb-lg-0 d-flex justify-content-end">
                                        <button className="blackButton">
                                            Entry Requirement
                                        </button>
                                        <button className="gradientButton">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                                <div className="bot">
                                    <div className="d-flex flex-column justify-content-start">
                                        <div className="text">
                                            TUTION FEE
                                        </div>
                                        <div className="value">
                                            {item.tutionFee}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start">
                                        <div className="text">
                                            APPLICATION FEE
                                        </div>
                                        <div className="value">
                                            {item.applicationFee}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start">
                                        <div className="text">
                                            IN TAKE
                                        </div>
                                        <div className="value">
                                            {item.inTake}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start">
                                        <div className="text">
                                            DURATION
                                        </div>
                                        <div className="value">
                                            {item.duration}
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start">
                                        <div className="text">
                                            ETS
                                        </div>
                                        <div className="value">
                                            {item.ETS}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default CoursesCard;