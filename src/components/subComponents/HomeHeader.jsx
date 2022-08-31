import React,{useState,useEffect,useMemo} from "react";

import homeHeaderImage from '../../assets/images/homeHeader.png';
import mbaLogo from '../../assets/images/mbaLogo.png';
import computerLogo from '../../assets/images/computerLogo.png';
import engineeringImage from '../../assets/images/engineeringImage.png';
import lifeImage from '../../assets/images/LifeImage.png';
import ArtImage from '../../assets/images/ArtImage.png';
import moreImage from '../../assets/images/moreImage.png';
import { getData } from "../../utilities";
import { useHistory } from "react-router-dom";




const HomeHeader=({filter,setFilter})=>{
    const [values,setValues]=useState({courses:true,level:'',country:'',selectCourse:filter?.course || null,selectUniversity:""});
    const [country,setCountry]=useState([]);
    const [universities,setUniversities]=useState([]);
    const [unFilteredUniversities,setUnFilteredUniversities]=useState([]);
    const [courseLeve,setCourseLevel]=useState([]);
    const [error,setError]=useState("")
    const history=useHistory(); 
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(values.courses){
           
                const tempObj={
                    filterApplied:true,
                    course:values.selectCourse,
                    level:values.level,
                    country:values.country,
                    filterBy:"course",
                    department:null,

                }
                setFilter({...tempObj});
                if(window.location.pathname!=="/courses"){
                    history.push("/courses")
                }

            }
        
            
       
        else if(!values.selectUniversity || unFilteredUniversities.indexOf(values.selectUniversity)===-1){
            setError("Please Enter a valid input");
        }
        else{
            let uniName=values.selectUniversity.toLowerCase();
                uniName=uniName.replace(/\s/gm, '');
                uniName=uniName.replace(/\./g,"");
                history.push(`/university/${uniName}`)
            }

    }
    const getCountryList=async ()=>{
        const {result,error}=await getData("/api/country/list");
        // console.log(result.body.country)
        if(result?.body?.country){
            const tempArray=[];
            result.body.country.map((item,index)=>{
                tempArray.push(item.name)
            })
            setCountry([...tempArray]);
        }
        // console.log(country,"asd")
    }
    const getCourseLevel=async ()=>{
        const {result,error}=await getData("/api/course/level-select");
        
        if(result?.body?.list?.length>0){
            setCourseLevel([...result.body.list]);
        }
        
        // console.log(courseLeve)
    }
    const getUniversities=async ()=>{
        const {result,error}=await getData("/api/university/list");
        if(result?.body?.university){
            const tempArray=[];
            result.body.university.map((item,index)=>{
                tempArray.push(item.name);
            })
            setUnFilteredUniversities([...tempArray]);
            setUniversities([...tempArray]);
        }
    }
    useMemo(()=>{
        if (country[0]) setValues({...values,country:country[0]});
    },[country]);
    useMemo(()=>{
        if (courseLeve[0]) setValues({...values,level:courseLeve[0]});
    },[courseLeve])
    useMemo(()=>{
        if(values.selectUniversity && unFilteredUniversities.length>0){
            const tempArray=[];
            unFilteredUniversities.map((item)=>{
                if(item.toLowerCase().includes(values.selectUniversity.toLowerCase())){
                    tempArray.push(item);
                }
            })
            setUniversities([...tempArray])
        }
    },[values.selectUniversity]);
    useEffect(()=>{
        getCountryList();
        getCourseLevel();
        getUniversities();
    },[])
    // useMemo(()=>{
    //     const tempObj={
    //         filterApplied:false,
    //         course:null,
    //         level:null,
    //         country:null,
    //         filterBy:null,
    //     }
    //     setFilter({...tempObj});
    //     setValues({...values,level:'',country:'',selectCourse:'',selectUniversity:""})
    // },[values.courses])
    return(
        <div className="homeHeader">
            <div className="image">
              
                    <img src={homeHeaderImage} alt="Students" className="img blurImage img-fluid"/>
             
                
                <div className="content">
                    <div className="courses d-none d-lg-flex">
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
                        <form className="searchForm w-100 pr-0 pr-lg-5" onSubmit={e=>handleSubmit(e)}>
                        <div className="radioButtons d-flex " style={{marginBottom:"0px"}}>
                            <div className="d-flex">
                            <input
                                name="filter"
                                value={values.courses}
                                type="radio"
                                onChange={e => {
                                    setError("");
                                    const tempObj={
                                        filterApplied:false,
                                        course:null,
                                        level:null,
                                        country:null,
                                        filterBy:null,
                                        department:null,
                                    }
                                    setFilter({...tempObj});
                                    setValues({...values,courses:true})
                                }}
                                id="radioInput1"
                                defaultChecked={true}
                            />
                            <label htmlFor="radioInput1" >Courses</label>
                            </div>
                            <div className="d-flex">
                            <input
                                name="filter"
                                value={values.courses}
                                type="radio"
                                onChange={e => {
                                    setError("");
                                    const tempObj={
                                        filterApplied:false,
                                        course:null,
                                        level:null,
                                        country:null,
                                        filterBy:null,
                                        department:null,
                                    }
                                    setFilter({...tempObj});
                                    setValues({...values,courses:false})
                                }}
                            
                                id="radioInput2"
                                defaultChecked={false}
                                
                            />
                            <label htmlFor="radioInput2">Universities</label>
                            </div>
                            
                           
                            </div>
                            <div className="row otherInputs ">
                                {
                                    values.courses && <>
                                        <div className="level col-10 col-lg-2 mt-3 mb-3">
                                    <select id="level" placeholder="Level" style={{padding:"0"}} onChange={(e)=>{
                                        setValues({...values,level:e.target.value})
                                    }}>
                                        {courseLeve.length>0 && courseLeve.map((item,index)=>{
                                            return(<>
                                                <option value={item}>{item}</option>
                                            </>)
                                        })}
                                        {!country[0] && <>
                                            <option >no data to select</option>
                                        </>}
                                        {/* <option value="Matric">Matric</option>
                                        <option value="Inter">Intermediate</option>
                                        <option value="Bachelors">Bachelors</option>
                                        <option value="Masters">Masters</option> */}
                                    </select>
                                </div>
                                <div className="level col-10 col-lg-2 mt-3 mb-3">
                                    <select name="country" id="cars" placeholder="Country" onChange={(e)=>{
                                        setValues({...values,country:e.target.value})
                                    }}>
                                        {country.length>0 && country.map((item,index)=>{
                                            return(<>
                                                <option value={item}>{item}</option>
                                            </>)
                                        })}
                                        {!country[0] && <>
                                            <option >no data to select</option>
                                        </>}
                                    </select>
                                </div>
                                <div className="searchCourseInput col-10 col-lg-6 mt-3 ">
                                    <input type="text" value={values.selectCourse}
                                    placeholder={"Select Courses..."}
                                    className=""
                                    onChange={(e)=>{
                                        setValues({...values,selectCourse:e.target.value})
                                    }}
                                    />
                                </div>
                                    </>
                                }
                                {
                                    !values.courses && <>
                                        <input type="text" value={values.selectUniversity}
                                    placeholder={"Select University..."}
                                    className="mt-3 ml-3"
                                    style={{position:"relative",height:"38px",width:"77%",marginRight:"5%"}}
                                    onChange={(e)=>{
                                        setError("")
                                        setValues({...values,selectUniversity:e.target.value})
                                    }}
                                    />
                                    
                                    {
                                        values.selectUniversity && <>
                                            <div className="text-left " style={{position:"absolute",background:"white",zIndex:99,top:"86%",left:"31pt",width:"74%",borderRadius:"4px"}}>
                                                {
                                                    universities.map((item)=>{
                                                        return(
                                                            <div className="m-1  pointer" onClick={()=>{
                                                                let uniName=item.toLowerCase();
                                                                    uniName=uniName.replace(/\s/gm, '');
                                                                    uniName=uniName.replace(/\./g,"");
                                                                history.push(`/university/${uniName}`)
                                                            }}>
                                                            {item}
                                                        </div>
                                                        )
                                                        
                                                    })
                                                }
                                            </div>
                                        </>
                                    }
                                    
                                    </>
                                }
                                <div className="formSubmit col-8 col-lg-2 mt-3 ">
                                    <button className="gradientButton" type="submit" value="Submit" onSubmit={e=>handleSubmit(e)}>Submit</button>
                                    <div className=" mt-3" style={{color:"red"}}>
                                {error}
                                </div>
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