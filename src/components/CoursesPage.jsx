import React,{useState,useEffect} from 'react';

import Header from './Header';
import HomeHeader from './subComponents/HomeHeader';
import Footer from './Footer';
import CoursesCard from './subComponents/CoursesCard';
const Courses =()=>{
    const [courseData,setCourseData]=useState([
        {
            image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
            courseName:"Course Name Here",
            universityName:"Uni Name",
            countryName:"Country Name",
            tutionFee:"$1000 GBP",
            applicationFee:"$1 GBP",
            inTake:"Sep Jan",
            duration:'12 Months',
            ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
            online:true,
            onCampus:true,
        },
        {
            image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
            courseName:"Course Name Here",
            universityName:"Uni Name",
            countryName:"Canada",
            tutionFee:"$1000 GBP",
            applicationFee:"$1 GBP",
            inTake:"Sep Jan",
            duration:'12 Months',
            ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
            online:true,
            onCampus:true,
        },
        {
            image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
            courseName:"Course Name Here",
            universityName:"Uni Name",
            countryName:"USA",
            tutionFee:"$1000 GBP",
            applicationFee:"$1 GBP",
            inTake:"Sep Jan",
            duration:'12 Months',
            ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
            online:true,
            onCampus:true,
        },
        {
            image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
            courseName:"Course Name Here",
            universityName:"Uni Name",
            countryName:"Pakistan",
            tutionFee:"$1000 GBP",
            applicationFee:"$1 GBP",
            inTake:"Sep Jan",
            duration:'12 Months',
            ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
            online:false,
            onCampus:true,
        },
        {
            image:'https://www.hsconsultants.net/uploads/ranked-universities/02.png',
            courseName:"Course Name Here",
            universityName:"Uni Name",
            countryName:"UK",
            tutionFee:"$1000 GBP",
            applicationFee:"$1 GBP",
            inTake:"Sep Jan",
            duration:'12 Months',
            ETS:"MonthsIELTS-6(6),PTE-58(51),TOEFL-92(20),Duolingo-110",
            online:true,
            onCampus:true,
        },
    ])

    return(
        <div className='courses'>
            <div className='header'>
                <Header/>
                <HomeHeader/>
            </div>
            <div className='coursesBody'>
                <CoursesCard coursesData={courseData}/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Courses;