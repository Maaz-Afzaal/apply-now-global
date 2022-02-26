import React,{useState} from 'react';

import Header from './Header';
import Footer from './Footer';
import HomeHeader from './subComponents/HomeHeader';
import Lines from './subComponents/Lines';
// import CarouselComponent from './subComponents/Carousel';
import CarouselComponent from './subComponents/CarouselComponent';


import computerScienceLogo from '../assets/images/home/computerScience.png';
import businessLogo from '../assets/images/home/businessLogo.png';
import socialLogo from '../assets/images/home/socialLogo.png';
import scienceLogo from '../assets/images/home/scienceLogo.png';
import healthLogo from '../assets/images/home/healthLogo.png';
import engineeringLogo from '../assets/images/home/engineeringLogo.png';
import expertChat1 from '../assets/images/home/expertChat1.png';
import expertChat2 from '../assets/images/home/expertChat2.png';
import expertBackground from '../assets/images/expertBackground.png';
import { useEffect } from 'react/cjs/react.development';
import { getData } from '../utilities';



const Home=()=>{
    const whatToStudyCardImages=[
        computerScienceLogo,businessLogo,socialLogo,scienceLogo,healthLogo,engineeringLogo
    ]
    // const [whatToStudy,setWhatToStudy]=useState([
    //     {
    //         logo:computerScienceLogo,
    //         heading:"Computer Science",
    //         courses:[
    //             "Computer Science","IT","Software","Multimedia"
    //         ]
    //     },
    //     {
    //         logo:businessLogo,
    //         heading:"Business",
    //         courses:[
    //             "Management","Business Studies","Accounting","Finance"
    //         ]
    //     },
    //     {
    //         logo:socialLogo,
    //         heading:"Social Studies",
    //         courses:[
    //             "Media","Social Work","Sociology","Economics"
    //         ]
    //     },
    //     {
    //         logo:scienceLogo,
    //         heading:"Science",
    //         courses:[
    //             "Biology","General Science","Environmental Science","Sports Science"
    //         ]
    //     },
    //     {
    //         logo:healthLogo,
    //         heading:"Health",
    //         courses:[
    //             "Medical","Psycology","Nursiing","Health Studies"
    //         ]
    //     },
    //     {
    //         logo:engineeringLogo,
    //         heading:"Engineering",
    //         courses:[
    //             "General Technology","Civil Engineering","Mechanical Engineering","Aerospace Engineering"
    //         ]
    //     },

    // ])
    const [pathwayProviders,setpathwayProviders]=useState([
        {
            image:require('../assets/images/home/Pathway1.png')
        },
        {
            image:require('../assets/images/home/Pathway2.png')
        },
        {
            image:require('../assets/images/home/Pathway3.png')
        },
        {
            image:require('../assets/images/home/Pathway4.png')
        },
        {
            image:require('../assets/images/home/Pathway5.png')
        },
        {
            image:require('../assets/images/home/Pathway6.png')
        },
        {
            image:require('../assets/images/home/Pathway7.png')
        },
    ])
    const [topRankedUniversities,setTopRankedUniversities]=useState([
        {
            image:require('../assets/images/home/TopUni1.png')
        },
        {
            image:require('../assets/images/home/TopUni2.png')
        },
        {
            image:require('../assets/images/home/TopUni3.png')
        },
        {
            image:require('../assets/images/home/TopUni4.png')
        },
        {
            image:require('../assets/images/home/TopUni5.png')
        },
        {
            image:require('../assets/images/home/TopUni6.png')
        },
        {
            image:require('../assets/images/home/TopUni7.png')
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/08.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/09.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/10.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/11.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/12.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/13.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/14.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/15.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/16.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/17.png"
        },
        {
            image:"https://www.hsconsultants.net/uploads/ranked-universities/18.png"
        }
        
    ])
    const [destinationData,setDestinationsData]=useState([
        {
            image:require('../assets/images/home/UKmap.png'),
            name:"UK"
        },
        {
            image:require('../assets/images/home/IrelandMap.png'),
            name:"Ireland"
        },
        {
            image:require('../assets/images/home/USAmap.png'),
            name:"USA"
        },
        {
            image:require('../assets/images/home/CanadaMap.png'),
            name:"Canada"
        },
        {
            image:require('../assets/images/home/NZmap.png'),
            name:"New Zealand"
        },
        {
            image:require('../assets/images/home/AustraliaMap.png'),
            name:"Australia"
        }
    ])
    const [whatToStudy,setWhatToStudy]=useState([])

    const getWhatToStudyCourses=async (tempArrayForDepart)=>{
        const {result,error}=await getData("/api/course/list")
            if(result){
                const tempArrayForCourse=[];
                const getObj=(logo,heading,courses)=>{
                    return {logo,heading,courses}
                }
                tempArrayForDepart.map((departName,idx)=>{
                    const tempArray=[]
                    result.body.map((course,index)=>{
                        if(course.departId.name==departName){
                            tempArray.push(course.title)
                        }
                       
                    });
                    tempArrayForCourse.push(getObj(whatToStudyCardImages[idx],departName,tempArray));
                })
                setWhatToStudy([...tempArrayForCourse]);
                console.log("what to stude",tempArrayForCourse)
                
            }
            else if(error){
                console.log("error while fetching subjects:",error);
            }
    }
    const getWhatToStudyData=async ()=>{
        const {result,error}=await getData("/api/course/department/list")
        if(result){
            const tempArrayForDepart=[];
            
            result.body.map((depart,index)=>{
                tempArrayForDepart.push(depart.name);    
            })
            getWhatToStudyCourses(tempArrayForDepart);
        }
        else if(error){
            console.log("error is",error)
        }
    }
    useEffect(()=>{
        getWhatToStudyData();
    })
    return(
        <div className='home'>
            <div className='header'>
                <Header home/>
                <HomeHeader/>
            </div>
            <div className='homeBody'>
                <div className='whatToStudy'>
                    <div className='whatToStudyCardBox'>
                    <div className='heading pt-5'>
                        <div className='text'>Unsure What To Study?</div>
                        <div className='smalltext'>HAVE A LOOK HERE...</div>
                        <div className='line'>
                            <Lines color={"purple"}/>
                        </div>
                    </div>
                    <div className='whatToStudyCard row'>
                        {whatToStudy.map((item,idx)=>{
                            return(
                                <>
                                <div className={`fullCard col-12 col-sm-6 col-lg-4 p-3 ${((idx%2)==0)?"":""}`} key={idx}>
                                    <div className={`${((idx%2)==0)?"yellowCard":"purpleCard"}`}>
                                    <div className='heading'>
                                        <div className='logo'>
                                            <img src={item.logo} alt={item.heading} className='img img-fluid'/>
                                        </div>
                                        <div className='text'>
                                            {item.heading}
                                        </div>
                                    </div>
                                    <div className='courses'>
                                        {item.courses.map((course,index)=>{
                                            if(index<4){
                                                return(
                                                    <ul>
                                                        <li>
                                                            {course}
                                                        </li>
                                                    </ul>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div className='viewAll pointer' onClick={()=>{alert("Coming soon.....")}}>
                                        View All &rarr;
                                    </div>
                                    </div>
                                </div>
                                
                                </>
                            )
                        })}
                    </div>
                    </div>
                    <div className='desitnations row'>
                        <div className='heading w-100'>
                            <div className='smallText'>
                                COUNTRIES WE OFFER SUPPORT
                            </div>
                            <div className='d-flex justify-content-between row'>
                                <div className=' text col-8 offset-2'>
                                        Favorite International Study Destinations
                                </div>
                                <div className='align-self-end col-2 ml-auto d-flex justify-content-end'>
                                <b className='pointer'  onClick={()=>{alert("Coming soon.....")}}> 
                                        See more <span style={{fontWeight:"1000",fontSize:"24px",alignSelf:"center"}}>
                                        &#8594;
                                            </span>
                                    </b>
                                </div>
                                
                            </div>
                            <div className='line'>
                                <Lines color={"purple"}/>
                            </div>
                            
                        </div>
                        <div className='destinationBody w-100'>
                                <CarouselComponent data={destinationData} itemsToShow={6} height={"200px"} color={"black"}/>
                                {/* <CarouselComponent items={destinationCarousel} image={socialLogo}/> */}
                        </div>
                    </div>
                    <div className='topRankedUniversities row'>
                        <div className='heading w-100'>
                        <div className='d-flex justify-content-between'>
                                <div className='text'>
                                    Top Ranked Universities
                                </div>
                                <div className='align-self-end'>
                                    <b className='pointer'  onClick={()=>{alert("Coming soon.....")}}> 
                                        See more <span style={{fontWeight:"1000",fontSize:"24px",alignSelf:"center"}}>
                                        &#8594;
                                            </span>
                                    </b>
                                </div>
                               
                            </div>
                            <div className='line'>
                                <Lines color={"yellow"} />
                            </div>
                        </div>
                        <div className='topRankedUniversitiesBody w-100'>
                            <CarouselComponent data={topRankedUniversities} itemsToShow={7} height={"200px"} color={"white"}/>
                        </div>
                    </div>
                    <div className='topPathwayProviders row'>
                        <div className='heading w-100'>
                            <div className='d-flex justify-content-between'>
                                <div className='text'>
                                    Top Education Pathway Providers
                                </div>
                                <div className='align-self-end'>
                                <b className='pointer'  onClick={()=>{alert("Coming soon.....")}}>  
                                        See more <span style={{fontWeight:"1000",fontSize:"24px",alignSelf:"center"}}>
                                        &#8594;
                                            </span>
                                    </b>
                                </div>
                               
                            </div>
                            <div className='line'>
                                <Lines color={"yellow"} />
                            </div>
                        </div>
                        <div className='topRankedUniversitiesBody w-100'>
                            <CarouselComponent data={pathwayProviders} itemsToShow={7} height={"100px"} color={"black"}/>
                        </div>
                    </div>
                    <div className='connectWithExpert'>
                        <div className='background pb-5'>
                            <img src={expertBackground} alt="background" className='img img-fluid backgroundimg'/>
                            <div className='other'>
                            <div className='heading'>
                            <div className='text pt-5'>
                                Connect With A Study Abroad Expert Now
                            </div>
                            <div className='line'>
                                <Lines color={"purple"}/>
                            </div>
                        </div>
                        <div className='body row d-flex justify-content-around mt-5' >
                            <div className='col-12 col-md-3 d-flex flex-column justify-content-start'>
                                <div className='image'>
                                    <img src={expertChat1} alt="chat with expert" className='img img-fluid'/>
                                </div>
                                <button className='gradientButton mb-2 mt-4 ml-4 mr-4' style={{height:'35px',fontWeight:'600',color:'white'}}>
                                    IN-PERSON COUNSELLING
                                </button>
                                <div className='text ml-3 mr-3 mt-1'>
                                    Setup a chat with one of our expert counselors closest to you.
                                </div>
                            </div>
                            <div className='col-12 col-md-3 d-flex flex-column justify-content-start'>
                                <div className='image'>
                                    <img src={expertChat2} alt="chat with expert" className='img img-fluid'/>
                                </div>
                                <button className='gradientButton mb-2 mt-4 ml-4 mr-4' style={{height:'35px',fontWeight:'600',color:'white'}} >
                                    ONLINE COUNSELLING
                                </button>
                                <div className='text ml-3 mr-3 mt-1'>
                                    Wherever you are,you can connect with an expert study abroad counsellor.
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;