import React,{useState} from "react";

import homeHeaderImage from '../../assets/images/homeHeader.png';
import mbaLogo from '../../assets/images/mbaLogo.png';
import computerLogo from '../../assets/images/computerLogo.png';
import engineeringImage from '../../assets/images/engineeringImage.png';
import lifeImage from '../../assets/images/LifeImage.png';
import ArtImage from '../../assets/images/ArtImage.png';
import moreImage from '../../assets/images/moreImage.png';


const HomeHeader=()=>{
    const [values,setValues]=useState({courses:true,level:'',country:'',selectCourse:''});

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
    }
    return(
        <div className="homeHeader">
            <div className="image">
              
                    <img src={homeHeaderImage} alt="Students" className="img blurImage img-fluid"/>
             
                
                <div className="content">
                    <div className="courses">
                        <div className="one d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={mbaLogo} alt="MBA" className="img img-fluid"/>
                            </div>
                            <div className="text">
                                MBA & Business
                            </div>
                        </div>
                        <div className="one d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={computerLogo} alt="MBA" className="img img-fluid"/>
                            </div>
                            <div className="text">
                                Computer Science
                            </div>
                        </div>
                        <div className="one d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={engineeringImage} alt="MBA" className="img img-fluid"/>
                            </div>
                            <div className="text">
                                Engineering
                            </div>
                        </div>
                        <div className="one d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={lifeImage} alt="MBA" className="img img-fluid"/>
                            </div>
                            <div className="text">
                                Life Sciences
                            </div>
                        </div>
                        <div className="one d-flex flex-column justify-content-center">
                            <div className="logo">
                                <img src={ArtImage} alt="MBA" className="img img-fluid"/>
                            </div>
                            <div className="text">
                                Art {'&'} Design
                            </div>
                        </div>
                        <div className="one d-flex flex-column justify-content-center">
                            <div className="more">
                                <img src={moreImage} alt="MBA" className="img img-fluid"/>
                            </div>
                            <div className="text">
                                More
                            </div>
                        </div>
                        
                    </div>
                    <div className="searchBox">
                        <form className="searchForm" onSubmit={e=>handleSubmit(e)}>
                        <div className="radioButtons d-flex">
                            <div className="d-flex">
                            <input
                                name="filter"
                                value={true}
                                type="radio"
                                onChange={e => {
                                    console.log(e.target.value)
                                    setValues({...values,courses:e.target.value})
                                }}
                                id="radioInput1"
                                defaultChecked={true}
                            />
                            <label htmlFor="radioInput1" >Courses</label>
                            </div>
                            <div className="d-flex">
                            <input
                                name="filter"
                                value={false}
                                type="radio"
                                onChange={e => {
                                    console.log(e.target.value)
                                    setValues({...values,courses:e.target.value})
                             
                                }}
                            
                                id="radioInput2"
                                defaultChecked={false}
                                
                            />
                            <label htmlFor="radioInput2">Universities</label>
                            </div>
                            
                           
                            </div>
                            <div className="row otherInputs m-3">
                                <div className="level mr-3">
                                    <select id="level" placeholder="Level" onChange={(e)=>{
                                        setValues({...values,level:e.target.value})
                                    }}>
                                        <option value="Matric">Matric</option>
                                        <option value="Inter">Intermediate</option>
                                        <option value="Bachelors">Bachelors</option>
                                        <option value="Masters">Masters</option>
                                    </select>
                                </div>
                                <div className="level">
                                    <select name="country" id="cars" placeholder="Country" onChange={(e)=>{
                                        setValues({...values,country:e.target.value})
                                    }}>
                                        <option value="Pk">Pakistan</option>
                                        <option value="Ch">China</option>
                                        <option value="Du">Dubai</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>
                                <div className="searchCourseInput">
                                    <input type="text" value={values.selectCourse}
                                    placeholder="Search Course..."
                                    onChange={(e)=>{
                                        setValues({...values,selectCourse:e.target.value})
                                    }}/>
                                </div>
                                <div className="formSubmit">
                                    <button className="gradientButton" type="submit" value="Submit" onSubmit={e=>handleSubmit(e)}>Submit</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default HomeHeader;