import React,{useState} from 'react';

import Header from './Header';
import Footer from './Footer';
import HomeHeader from './subComponents/HomeHeader';
import Lines from './subComponents/Lines';
// import CarouselComponent from './subComponents/Carousel';
import News from './subComponents/CarouselComponent';


import computerScienceLogo from '../assets/images/home/computerScience.png';
import businessLogo from '../assets/images/home/businessLogo.png';
import socialLogo from '../assets/images/home/socialLogo.png';
import scienceLogo from '../assets/images/home/scienceLogo.png';
import healthLogo from '../assets/images/home/healthLogo.png';
import engineeringLogo from '../assets/images/home/engineeringLogo.png';
import expertChat1 from '../assets/images/home/expertChat1.png';
import expertChat2 from '../assets/images/home/expertChat2.png';
import expertBackground from '../assets/images/expertBackground.png';



const Home=()=>{
    const [whatToStudy,setWhatToStudy]=useState([
        {
            logo:computerScienceLogo,
            heading:"Computer Science",
            courses:[
                "Computer Science","IT","Software","Multimedia"
            ]
        },
        {
            logo:businessLogo,
            heading:"Business",
            courses:[
                "Management","Business Studies","Accounting","Finance"
            ]
        },
        {
            logo:socialLogo,
            heading:"Social Studies",
            courses:[
                "Media","Social Work","Sociology","Economics"
            ]
        },
        {
            logo:scienceLogo,
            heading:"Science",
            courses:[
                "Biology","General Science","Environmental Science","Sports Science"
            ]
        },
        {
            logo:healthLogo,
            heading:"Health",
            courses:[
                "Medical","Psycology","Nursiing","Health Studies"
            ]
        },
        {
            logo:engineeringLogo,
            heading:"Engineering",
            courses:[
                "General Technology","Civil Engineering","Mechanical Engineering","Aerospace Engineering"
            ]
        },

    ])
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
    return(
        <div className='home'>
            <div className='header'>
                <Header home={true}/>
                <HomeHeader/>
            </div>
            <div className='homeBody'>
                <div className='whatToStudy'>
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
                                <div className={`fullCard ${((idx%2)==0)?"yellowCard":"purpleCard"}`} key={idx}>
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
                                    <div className='viewAll'>
                                        View All &rarr;
                                    </div>
                                </div>
                                
                                </>
                            )
                        })}
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
                                    <b>
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
                                <News data={destinationData} itemsToShow={6} height={"200px"}/>
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
                                    <b>
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
                            <News data={topRankedUniversities} itemsToShow={7} height={"200px"}/>
                        </div>
                    </div>
                    <div className='topPathwayProviders row'>
                        <div className='heading w-100'>
                            <div className='d-flex justify-content-between'>
                                <div className='text'>
                                    Top Education Pathway Providers
                                </div>
                                <div className='align-self-end'>
                                    <b>
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
                            <News data={pathwayProviders} itemsToShow={7} height={"100px"}/>
                        </div>
                    </div>
                    <div className='connectWithExpert'>
                        <div className='background'>
                            <img src={expertBackground} alt="background" className='img img-fluid'/>
                            <div className='other'>
                            <div className='heading'>
                            <div className='text'>
                                Connect With A Study Abroad Expert Now
                            </div>
                            <div className='line'>
                                <Lines color={"purple"}/>
                            </div>
                        </div>
                        <div className='body row d-flex justify-content-around mt-5' >
                            <div className='col-3 d-flex flex-column justify-content-start'>
                                <div className='image'>
                                    <img src={expertChat1} alt="chat with expert" className='img img-fluid'/>
                                </div>
                                <button className='gradientButton mb-1 mt-3 ml-4 mr-4' style={{height:'35px',fontWeight:'600',color:'white'}}>
                                    IN-PERSON COUNSELLING
                                </button>
                                <div className='text ml-3 mr-3 mt-1'>
                                    Setup a chat with one of our expert counselors closest to you.
                                </div>
                            </div>
                            <div className='col-3 d-flex flex-column justify-content-start'>
                                <div className='image'>
                                    <img src={expertChat2} alt="chat with expert" className='img img-fluid'/>
                                </div>
                                <button className='gradientButton mb-1 mt-3 ml-4 mr-4' style={{height:'35px',fontWeight:'600',color:'white'}} >
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