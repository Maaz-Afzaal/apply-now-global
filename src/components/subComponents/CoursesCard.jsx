import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import uniLogo from '../../assets/images/uniLogo.png';
import locationLogo from '../../assets/images/locationLogo.png';

const CoursesCard=(props)=>{
    const history=useHistory();
    const universityPageLink=(universityName)=>{
        let uniName=universityName.toLowerCase();
            uniName=uniName.replace(/\s/gm, '');
            uniName=uniName.replace(/\./g,"");
            return uniName;
    }
    return(
        <div className="coursesCard">
            {props.coursesData.length>0 && props.coursesData.map((item,index)=>{
                return(
                    <>
                        <div className="fullCard">
                            <div className="imageBox">
                                <img src={item.image} alt="univeristy logo" className="img img-fluid pointer" onClick={()=>{
                                                        history.push(`/university/${universityPageLink(item.universityName)}`)
                                                    }}/>
                            </div>
                            <div className="restCard">
                                <div className="top">
                                    <div className="col-12 col-sm-6 d-flex justify-content-start flex-column">
                                        <div className="courseName">
                                            {item.courseName}
                                        </div>
                                        <div className="d-flex">
                                                <a href={item.url} target="_blank" style={{textDecoration:"none",color:"black"}}>
                                                <div className="location d-flex align-items-center pointer">
                                                    <img src={uniLogo} alt="" className="img img-fluid" />
                                                    <span>{item.universityName}</span>
                                                </div>
                                                </a>
                                            <div className="location">
                                                <img src={locationLogo} alt="" className="img img-fluid "/>
                                                <span>{item.countryName}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 mt-2 mt-md-0 mb-2  d-flex justify-content-end">
                                        <button className="blackButton">
                                            Entry Requirement
                                        </button>
                                        <button className="gradientButton">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                                <div className="bot mt-2">
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
            {
                props.coursesData.length===0 && <>
                    <h1>No Data to Show</h1>
                </>
            }
        </div>
    )
}

export default CoursesCard;