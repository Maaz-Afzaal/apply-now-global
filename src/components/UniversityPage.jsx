import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import header1 from '../assets/images/header1.png'
import Header from './Header';
import Footer from './Footer';
import {getData} from '../utilities';
import Card from './subComponents/CardUniversity';
import ADELPHI_UNIVERSITY_LOGO from '../assets/images/adelphiUniversityLogo.png';
import USA from '../assets/images/USAFlag.png';

const UniversityPage=()=>{
    const param=useParams();
    // const [universityHeader,setUniversityHeader]=useState(
    //     {image:ADELPHI_UNIVERSITY_LOGO,
    //     name:"Adelphi University",
    //     flag:USA,
    //     courses:"courses"
    // }
    // )
    const [universityDetails,setUniversityDetails]=useState([
        {content:["Adelphi University is a highly awarded, nationally ranked, powerfully connected doctoral research university offering exceptional liberal arts and sciences programs and professional training with particular strength in its Core Four—Arts and Humanities, STEM and Social Sciences, the Business and Education Professions, and Health and Wellness. Adelphi is dedicated to transforming students’ lives through small classes, hands-on learning and innovative ways to support student success.",
    "Founded in Brooklyn in 1896, Adelphi is Long Island’s oldest private coeducational university. Today Adelphi serves more than 8,100 students at its beautiful main campus in Garden City, New York—just 23 miles from New York City’s cultural and internship opportunities—and at dynamic learning hubs in Manhattan, the Hudson Valley and Suffolk County, and online."
    ,"More than 115,000 Adelphi graduates have gained the skills to thrive professionally as active, caring citizens, making their mark on the University, their communities and the world."
],
    isList:false,
    heading:"Overview",
},
{
    content:["Adelphi University’s Manhattan Center is located in the SoHo neighborhood of Manhattan, at 75 Varick Street at the intersection of Varick and Canal Streets, where art and trade converge. The Center is easily accessible from Wall Street and Midtown and is well served by subways connecting students, faculty and administrators to Brooklyn, Queens and the Bronx."],
    isList:false,
    heading:"Location",
},
    {content:[
        "Chris Armas – professional soccer player, Chicago Fire of Major League Soccer and current women’s soccer coach at Adelphi.",
        "Michael Balboni – Deputy Secretary for Public Safety for the State of New York.",
        "Ron Bruder – American entrepreneur who runs Middle East education non-profts, named on the Time 100 Melanie.",
        "Chartoff-actress and comedienne."
    ],
    isList:false,
    heading:"Alumni",
},
    {content:[
        "It is the oldest institution of higher education in suburban Long Island"
    ],
    isList:false,
    heading:"Fun Facts",
},
    {content:[
        "It is the oldest institution of higher education in suburban Long Island."
    ],
    isList:false,  
    heading:"Public or Private",  
},
    {
        content:[
            "It is the oldest institution of higher education in suburban Long Island"
        ],
        isList:false,
        heading:"University Campuses",
    },
    {
        content:[
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy magna aliquam erat volutpat.",
            "Lorem ipsum dconsectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        ],
        isList:true,
        heading:"Entry Requirements",
    },
    {
        content:[
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy  erat volutpat.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam .",
            "Lorem ipsum dolor  consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        ],
        isList:true,
        heading:"Accomodation",
    },{
        content:[
            "It is the oldest institution of higher education in suburban Long Island"
        ],
        isList:false,
        heading:"Scholarship Opportunity",
    }
    ])
    const [isUniFound,setIsUniFound]=useState(false);
    const [universityHeader,setUniversityHeader]=useState([]);
    const getUniversityName=async ()=>{
        const {result,error}=await getData("/api/university/list");
        if(result){
            const tempArray=[];
            const getObj=(image,name,flag)=>{
                return {image,name,flag}
            }
            console.log("params are",result);
            
            result.body.university.map((item,index)=>{
                let uniName=item.name.toLowerCase();
                uniName=uniName.replace(/\s/gm, '');
                uniName=uniName.replace(/\./g,"");
                if(uniName===param.universityname){
                    // console.log("uniname is",uniName)
                    setIsUniFound(true)
                    tempArray.push(getObj(item.logo,item.name,item.countryId.flag));
                } 
            })
            // console.log("temp array is",tempArray)
            setUniversityHeader(...tempArray);
            // console.log("temp array is",universityHeader)
        }
        else if(error){
            console.log("error to get university data ",error)
        }
    }
    useEffect(()=>{
        if(universityHeader){
            getUniversityName();
        }
        
    },[])
    return(
        <div className="universityPage">
            <div className="header">
                <Header university/>
            </div>
            <div className="body">
                <div className="header">
                    <div className="imgContainer">
                        <img src={header1} alt="university" className="headerImage img img-fluid blurImage"></img>
                    </div>
                    {
                        isUniFound && <>
                             <div className="universityHeading">
                                <div className="d-flex flex-column flex-md-row w-100">
                                    <div className="pl-3 pr-3">
                                        <img src={universityHeader.image} alt={universityHeader.name} className="img img fluid uniLogoImage"/>
                                    </div>
                                    <div className="verticalLine h-75 d-none d-md-inline">

                                    </div>
                                    <div className="uni p-3">
                                        <div className="name d-flex align-items-center mb-3 h-50">
                                            {universityHeader.name}
                                        </div>
                                        <div className="mt-auto h-50 align-items-center d-flex">
                                            <img src={universityHeader.flag} alt={universityHeader.flag} className="img img-fluid flag"/>
                                        </div>
                                    </div>
                                    <div className="buttons ml-auto  w-100">
                                        <div className="h-50 align-items-center d-flex w-100">
                                            <button className="normal btn btn-md">
                                                View Courses
                                            </button>
                                        </div>
                                        <div className="w-100">
                                            <button className="btn btn-md gradientButton">
                                                Apply Now
                                            </button>
                                            
                                        </div>
                                    </div>
                                </div>
                       
                    </div>
                        </>
                    }
                   
                </div>
                {
                    isUniFound && <>
                    <div className="body">
                    {universityDetails.map((item)=>{
                        return(
                            (!item.isList)?
                            <>
                                <Card type={"text"} heading={item.heading} content={item.content}/>
                            </>
                        :
                            <>
                                <Card type={"list"} heading={item.heading} content={item.content}/>
                            </>
                        )
                        
                        
                    })}
                </div>
                </>
                }
                {
                    !isUniFound && <>
                        <div style={{height:"300px"}} className="d-flex align-items-center justify-content-center">
                            <h1>No data found for this University</h1>
                        </div>
                    </>
                }
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )

}

export default UniversityPage;