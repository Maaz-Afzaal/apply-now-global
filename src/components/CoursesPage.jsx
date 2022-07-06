import React,{useState,useEffect,useMemo} from 'react';

import Header from './Header';
import HomeHeader from './subComponents/HomeHeader';
import Footer from './Footer';
import CoursesCard from './subComponents/CoursesCard';
import { getData } from '../utilities';

const Courses =({filter,setFilter})=>{
    // const [courseData,setCourseData]=useState([
    //     {
    //         image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
    //         courseName:"Course Name Here",
    //         universityName:"Uni Name",
    //         countryName:"Country Name",
    //         tutionFee:"$1000 GBP",
    //         applicationFee:"$1 GBP",
    //         inTake:"Sep Jan",
    //         duration:'12 Months',
    //         ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
    //         online:true,
    //         onCampus:true,
    //     },
    //     {
    //         image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
    //         courseName:"Course Name Here",
    //         universityName:"Uni Name",
    //         countryName:"Canada",
    //         tutionFee:"$1000 GBP",
    //         applicationFee:"$1 GBP",
    //         inTake:"Sep Jan",
    //         duration:'12 Months',
    //         ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
    //         online:true,
    //         onCampus:true,
    //     },
    //     {
    //         image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
    //         courseName:"Course Name Here",
    //         universityName:"Uni Name",
    //         countryName:"USA",
    //         tutionFee:"$1000 GBP",
    //         applicationFee:"$1 GBP",
    //         inTake:"Sep Jan",
    //         duration:'12 Months',
    //         ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
    //         online:true,
    //         onCampus:true,
    //     },
    //     {
    //         image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
    //         courseName:"Course Name Here",
    //         universityName:"Uni Name",
    //         countryName:"Pakistan",
    //         tutionFee:"$1000 GBP",
    //         applicationFee:"$1 GBP",
    //         inTake:"Sep Jan",
    //         duration:'12 Months',
    //         ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
    //         online:false,
    //         onCampus:true,
    //     },
    //     {
    //         image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
    //         courseName:"Course Name Here",
    //         universityName:"Uni Name",
    //         countryName:"UK",
    //         tutionFee:"$1000 GBP",
    //         applicationFee:"$1 GBP",
    //         inTake:"Sep Jan",
    //         duration:'12 Months',
    //         ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
    //         online:true,
    //         onCampus:true,
    //     },
    // ])

    const [courseData,setCourseData]=useState([]);
    const [filteredCourseData,setFilteredCourseData]=useState([]);
    const [loading,setLoading]=useState(true);
    const getCoursesData=async ()=>{
        const {result,error}=await getData("/api/course/requirement/list");
        const getObj=(image,courseName,universityName,countryName,tutionFee,applicationFee,inTake,duration,ETS,department,url,level)=>{
            return {image,courseName,universityName,countryName,tutionFee,applicationFee,inTake,duration,ETS,department,url,level}
        }
        if(result){
            const tempArray=[];
            // console.log(result);
            result.body.list.map((item,index)=>{
                // console.log(item);
                const tempData=getObj(item.universityId.logo,
                    item.title,
                    item.universityId.name,
                    item.universityId.city,
                    item.tutionFee,
                    item.applicationFee,
                    item.inTake,
                    item.duration,
                    item.ETS.toString(),
                    item.coursetId.title,
                    item.universityId.website,
                    item.level)
                tempArray.push(tempData)
            })
            setCourseData([...tempArray])
            setLoading(false);
            // console.log(courseData,"aaaaaaaaaaaaaaa")
        }
        else if(error){
            console.log("course page error is",error)
        }
    }
    useEffect(()=>{
        
        if(filter.filterApplied && filter.filterBy==="course"){
            if(filter.course){
                const tempArray=[];
                courseData.map((item,index)=>{
                    console.log(filter.course.toLowerCase(),"asdasd",item.courseName.toLowerCase())
                    // if(item.courseName.toLowerCase().includes(filter.course.toLowerCase()) && item.countryName===filter.country && item?.level===filter.level ){
                        if(item.courseName.toLowerCase().includes(filter.course.toLowerCase()) ){
                        tempArray.push(item)
                        // console.log("filtered array",filter)
                    }
                });
                setFilteredCourseData([...tempArray]);
                console.log(tempArray,"asdasd")
            }
        }
        else{
            setFilteredCourseData([...courseData])
        }
    },[courseData,filter])
    useEffect(()=>{
        getCoursesData();
    },[])
    return(
        <div className='courses'>
            <div className='header'>
                <Header courses/>
                <HomeHeader filter={filter} setFilter={setFilter}/>
            </div>
            <div className='coursesBody century-font'>
            {loading && 
                        <div className="w-100 text-center">

                            <div className="spinner-border mt-5"></div></div>
                        }
                {!loading && <CoursesCard coursesData={filteredCourseData} />
                }
                
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Courses;