import React,{useEffect, useState,useMemo} from "react";

import Header from "./Header";
import Footer from "./Footer";
import SubPages from "./subComponents/SubPages";

import faqImage from '../assets/images/faqImage.png';
import blog_1 from '../assets/images/blog_1.png';
import blog_2 from '../assets/images/blog_2.png';
import blog_3 from '../assets/images/blog_3.png';
import blog_4 from '../assets/images/blog_4.png';
import blog_5 from '../assets/images/blog_5.png';
import blog_6 from '../assets/images/blog_6.png';
import searchIcon from '../assets/images/searchIcon.png';
import calender from '../assets/images/calender.png';
import watch from '../assets/images/watch.png';
import location from '../assets/images/location.png';


const Events=()=>{
    const [EventsToShow,setEventsToShow]=useState(null);
    const [pages,setPages]=useState(null)
    const [currentPage,setCurrentPage]=useState(1);
    const [search,setSearch]=useState('');
    const [searchedArray,setSearchedArray]=useState([]);
    const [latest,setLatest]=useState(true);
    const [categories,setCategories]=useState([
        {name:"Advice",latest:true,trending:false},
        {name:"Australia",latest:false,trending:true},
        {name:"Canada",latest:false,trending:true},
        {name:"Fairs",latest:true,trending:false},
        {name:"India",latest:true,trending:true},
        {name:"Inforgraphic",latest:true,trending:true},
        {name:"Ireland",latest:true,trending:false},
        {name:"Latest Events",latest:true,trending:false},
        {name:"New zealands",latest:true,trending:false},
        {name:"News & events",latest:true,trending:false},
        {name:"Past Events",latest:true,trending:false},
        {name:"Uk",latest:true,trending:false},
        {name:"Uncategorized",latest:true,trending:false},
        {name:"USA",latest:true,trending:false},
        
    ])
    const [events,setEvents]=useState([
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad1",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test2",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad3",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university4",
            description:"British University Fair",
            img:blog_4,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad5",
            description:"British University Fair",
            img:blog_5,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university6",
            description:"British University Fair",
            img:blog_6,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad7",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test8",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad9",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_4,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_5,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university10",
            description:"British University Fair",
            img:blog_6,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad18",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_4,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_5,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_6,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_4,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university10",
            description:"British University Fair",
            img:blog_6,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad18",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_4,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university10",
            description:"British University Fair",
            img:blog_6,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad18",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_4,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university10",
            description:"British University Fair",
            img:blog_6,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad18",
            description:"British University Fair",
            img:blog_1,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Graduate Schemes and preparing for test",
            description:"British University Fair",
            img:blog_2,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"How to prepare for studying abroad",
            description:"British University Fair",
            img:blog_3,
        },
        {
            date:"Feburary 5,2020",
time:"10Am - 7PM",
location:"USA",
            title:"Tips for deaf students at university",
            description:"British University Fair",
            img:blog_4,
        },
    ])
    const searchedCategories=(value)=>{
        if(value){
            const tmpArray=[];
            categories.map((item)=>{
                if(item.latest){
                    tmpArray.push(item)
                }
            })
            setSearchedArray([...tmpArray])
            console.log(searchedArray)
        }
        else{
            const tmpArray=[];
            categories.map((item)=>{
                if(item.trending){
                    tmpArray.push(item);
                }
            })
            setSearchedArray([...tmpArray]);
        }
    }
    useEffect(()=>{
        searchedCategories(latest);
    },[latest])
    useEffect(()=>{
        if((events.length/6)%1==0){
            setPages(events.length/6);
        }
        else{
            setPages((Math.ceil(events.length/6)))
        }
    },[events])
    useEffect(()=>{
        pageToBlog(currentPage);
    },[currentPage]);
//    useEffect(()=>{
//        setSearchedArray([...categories])
//    },[categories])
    const pageToBlog=(page)=>{
        setEventsToShow((6*page)-6);
        return (6*page)-6;
    }
    const nextPage=(nextValue)=>{
        setCurrentPage(nextValue);
    }
    return(
        <div className="events">
            <div className="header">
                <div>
                    <Header events/>
                </div>
                <div className="HeaderBot ">
                    <img src={faqImage} alt="students" className="blurImage"/> 
                </div>
            </div>
            <div className="body">
                <div className="row">
                    <div className="col-9">
                        <div className="row heading">
                            <div className="text">
                                Events
                            </div>
                            <div className="d-flex">
                                <div className="horizontalLine"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                            </div>
                        </div>
                        <div className="row">
                        {events.map((event,index)=>{
                            if(index>EventsToShow-1 && index<EventsToShow+6){
                                return(
                                    
                                    <div className="blogCard" key={index}>
                                        {/* {console.log(blog)} */}
                                        <div className="w-100">
                                            <img src={event.img} alt={event.title} className="w-100"/>
                                        </div>
                                        
                                        <div className="blogTitle">
                                            {event.title}
                                        </div>
                                        <div className="blogDescription">
                                            {event.description}
                                        </div>
                                        <div className="date">
                                            <img src={calender} alt="" className="img-img-fluid"/>
                                            <div className="text">
                                            {event.date}
                                            </div>
                                        </div>
                                        <div className="date">
                                            <img src={watch} alt="" className="img-img-fluid"/>
                                            <div className="text">
                                            {event.time}
                                            </div>
                                        </div>
                                        <div className="date">
                                            <img src={location} alt="" className="img-img-fluid"/>
                                            <div className="text">
                                            {event.location}
                                            </div>
                                        </div>
                                        <div className="extra">
                                            <button className="">
                                                Read More
                                            </button>
                                            
                                        </div>
                                    </div>
                                
                            )
                            }
                       
                    })}
                    </div>
                    </div>
                    <div className="col-3 categories">
                        <div className="heading">
                            Recent News
                        </div>
                        <div className="box">
                            <div className="searchBox">
                                <button className={`btn btn-md btn1 w-50 ${latest?"active":""}`} onClick={()=>{
                                    setLatest(true)
                                }}>Latest</button>
                                <button className={`btn btn-md btn2 w-50 ${!latest?"active":""}`} onClick={()=>{
                                    setLatest(false)
                                }}>Trending</button>
                            </div>
                            
                            {searchedArray.map((item,index)=>{
                                return(
                                    <div className="text" key={index}>
                                        {item.name}
                                        
                                        {(index==categories.length-1)?<></>:<>
                                        <hr/>
                                        </>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
                <div className="pageChange row">
                    <SubPages pages={pages} currentPage={currentPage} nextPage={nextPage}/>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
export default Events;