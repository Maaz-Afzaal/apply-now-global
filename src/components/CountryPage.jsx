import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Lines from './subComponents/Lines';
import Footer from './Footer';
import { getData } from "../utilities";

import header1 from '../assets/images/header1.png';


const CountryPage=()=>{
    const param=useParams();
    const [countryName,setCountryName]=useState();
    const [activeTab,setActiveTab]=useState(1);
    const [countryId,setCountryId]=useState(null);
    const [studentLife,setStudentLife]=useState([]);
    const [details,setDetails]=useState(null);
    const [detailsToShow,setDetailsToShow]=useState();
    const [loading,setLoading]=useState(true);
    const getCountryName=async()=>{
        const {result,error}=await getData("/api/country/list/")
        if(result){
            const tempArray=[];
            
            console.log("params are",result);
            
            const isCountryFound=result?.body?.country?.filter((item,index)=>{
                let country_name=item.name.toLowerCase();
                country_name=country_name.replace(/\s/gm, '');
                country_name=country_name.replace(/\./g,"");
                // console.log(item,"item name",item.name)
                if(country_name===param.countryname){
                    
                    // getCountryData();
                }
                return country_name===param.countryname;
            });
            if(isCountryFound[0]){
                setCountryName(isCountryFound[0].name);
                setCountryId(isCountryFound[0]?._id);
                console.log('bbbbbbbbbbb',isCountryFound[0]);
                // getCountryData();
            }
            else{
                setCountryName(param?.countryname?.toUpperCase());
                setCountryId(null);
                setDetails(null);
                setDetailsToShow(null);
                console.log('aaaaaaaaaa',isCountryFound);
                setLoading(false);
            }
            
        }
        else if(error){
            console.log("error for country page is",error)
        }
    }
    const getCountryData=async ()=>{
        const {result,error}=await getData("/api/student_life/list");

        if(result){
          
            const requiredCountry=result?.body?.data?.filter((country)=>{
                return country.countryId?._id===countryId
        })
            if(requiredCountry[0]){
               setDetails({...requiredCountry[0]});
               setLoading(false);
            }
            else{
                setLoading(false);
            }
        }
    }
    useEffect(()=>{
        if(!loading){
            if(activeTab===1 && details){
                setDetailsToShow(details?.student_life);
                // setLoading(false);
            }
            else if(activeTab===2 && details){
                setDetailsToShow(details?.scholarships_funding || "Coming Soon...");
                // setLoading(false);
            }
            else if(activeTab===3 && details){
                setDetailsToShow(details?.visa_guidance || "Coming Soon...");
                // setLoading(false);
            }else {
                setDetailsToShow("Coming Soon....")
                // setLoading(false);
            }
        }
        
    },[details,activeTab,loading]);
    useEffect(()=>{
        setLoading(true);
        getCountryName();
    },[param]
    )
    useEffect(()=>{
        if(countryId){
            getCountryData();
        }
        
    },[countryId])
    // useEffect(()=>{
    //     if(countryName){
    //         const tempArray=[
    //             {heading:"",
    //             list:[],
    //                 content:["The UK has a long-storied tradition in excellent higher education. Since around a quarter of British universities are among the most reputed and highest ranking in the world, England, Scotland, Wales and Northern Ireland manage to attract nearly half a million international students each year.",
    //             "By studying in the UK, you’ll not only achieve world-class education, you’ll also get to know more about the unique British culture and perfect your English language and skills. One of the most cosmopolitan places on earth, you’ll meet all kinds of people and have an enriching study experience!"]},
    //             {
    //                 heading:'Manners and Behaviour',
    //                 content:[
    //                     "A country that is quick to embrace the infuences of other cultures, for example one of the favourite national dishes is Indian curry, you will fnd a lot of diversity in the UK especially in its big cities. The British are generally friendly, polite and reserved, with a sense of humour which can sometimes be a bit sarcastic.",
    //                     "Whilst there isn’t much formal etiquette in the UK, being polite, punctual and greeting people with a smile will always stand you in good stead."
    //                 ],
    //                 list:[],
    //             },
    //             {
    //                 heading:"Food",
    //                 content:[
    //                     "Revolving around simple, hearty dishes, Irish cuisine makes the most of seasonal produce especially lamb, green veg and, of course, potatoes"
    //                 ],
    //                 list:[
    //                     "Fish and Chips",
    //                     "Sunday roast dinner with Yorkshire pudding",
    //                     "Full English breakfast",
    //                     "Bangers and mash",
    //                     "Toad in the hole",
    //                     "Shepherd’s pie/cottage pie",
    //                     "Steak and kidney pie",
    //                     "Haggis"
    //                 ]
    //             },
    //             {
    //                 heading:`Cost of Study in ${countryName}`,
    //                 content:[
    //                     "Degree courses in the UK are typically shorter than in other countries, making studying in the UK more cost-effective when compared to countries such as the USA.",
    //                     "Undergraduates can expect to pay around £10,000 - £38,000 in tuition fees depending on what course you choose to study",
    //                     "For post-graduate specialisations, the tuition fee varies depending on your course"
    //                 ],
    //                 list:[
    //                     "£14,100 (for classroom-based programs)",
    //                     "£16,200 (for laboratory-based programs)",
    //                     "£21,700 (for clinical programs)",
    //                     "£19,000 (for MBA related programs)"
    //                 ]
    //             },
    //             {
    //                 heading:`Student Accommodation in the ${countryName}`,
    //                 content:[
    //                     "During the frst year of university, you can usually expect to be offered a place in Halls of Residence or other accommodation run by the university itself. This is shared, self-catering accommodation with other students and is a great way to get to know people and make new friends.",
    //                     "Halls of Residence normally have shared bathrooms and kitchens, and are usually mixed sex accommodation. There is help available to fnd alternative student-friendly accommodation if this isn’t suitable for you.",
    //                     "On average, you will need around £10-12,000 per year to cover accommodation"
    //                 ],
    //                 list:[],
    //             },
    //             {
    //                 heading:`Typical Monthly Costs in the ${countryName}`,
    //                 list:[
    //                     "Accommodation: £535 (£640 in London)",
    //                     "Utility bills: £50",
    //                     "Mobile Phone: £10-30",
    //                     "Broadband internet: £20",
    //                     "Study materials: £60",
    //                     "Travel: £45 (£90 in London)",
    //                     "Groceries: £50",
    //                     "Typical night out: £30",
    //                     "Gig ticket: £5-45",
    //                     "Cinema ticket: £8-12"
    //                 ],
    //                 content:[]
    //             },{
    //                 heading:`Work and Study in the ${countryName}`,
    //                 content:[
    //                     "A great way of challenging and expanding your language skills as well as helping you support yourself, it’s possible for international students to work whilst studying in the UK.",
    //                     "In general, if you are studying at degree level, you are ale to work for a maximum of 20 hours per week during term-time, and up to 40 hours during holidays.",
    //                     "Your bio-metric residence permit should provide information on what hours you are able to work whilst you’re studying, but you can also check you are eligible to work in the UK or speak to one of our advisors who will be happy to give you more information."
    //                 ],
    //                 list:[],
    //             }
    //         ]
    //         setStudentLife([...tempArray]);
            
    //     }
    //     else{
            
    //         const tempArray=[{
    //             heading:`Coming Soon...`,
    //             content:[],
    //             list:[],
    //         }]
    //         setStudentLife([...tempArray]);
    //     }
        
    // },[countryName])
    return(
        <div className="countryPage">
            <div className="header">
                <div className="">
                    <Header country={true}/>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={header1} alt="" className="img img-fluid blurImage"/>
                    </div>
                    <div className="text">
                    Study In {countryName || param.countryname.toUpperCase()}
                    <Lines color={"yellow"}/>
                    </div>
                   
                </div>
            </div>
            <div className="countryPageBody">
                <div className="tabs  ">
                    <div className={`col-3 pointer ${(activeTab===1)?"active":""}`} onClick={()=>{setActiveTab(1)}}>

                        Student Life In {countryName || param.countryname.toUpperCase()}
                    </div>
                    <div className={`col-3 pointer ${(activeTab===2)?"active":""}`} onClick={()=>{setActiveTab(2)}}>
                        Scholarships {'&'} Funding
                    </div>
                    <div className={`col-3 pointer ${(activeTab===3)?"active":""}`} onClick={()=>{setActiveTab(3)}}>
                        {countryName || param.countryname.toUpperCase()} Visa Guidance
                    </div>
                </div>
                <div className="restBody">
                    {
                        countryName && <>
                          <div className="heading">
                        {
                            activeTab===1 && <>
                        Student Life In {countryName}
                            </>
                        }
                        {
                            activeTab===2 && <>
                                Scholarships and Fundings
                            </>
                        }
                        {
                            activeTab===3 && <>
                            Visa Guidance
                            </>
                        }
                        
                    </div>
                        </>
                    }
                  
                    <div className="content mt-2" style={{textAlign:'justify'}}>
                        {
                            loading && <div className="w-100 text-center m-4">
                                <div className="spinner-border"></div>
                            </div>
                        }
                        {!loading && <>{detailsToShow}</> }
                        {/* {studentLife.map((item,index)=>{
                            return(
                                <>
                                    <div className="head">
                                    {item?.heading}
                                    
                                </div>
                                <div className="para">
                                    {item.content.map((i,a)=>{
                                        return(
                                            <>
                                                <p key={a} style={{textAlign:"justify"}}>
                                                    {i}
                                                </p>
                                            </>
                                        )
                                    })}
                                    </div>
                                    <div className="lists">
                                        <ul>
                                            {item?.list.map((i,a)=>{
                                                return(
                                                    <>
                                                        <li style={{textAlign:"justify"}}>{i}</li>
                                                    </>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </>
                                
                            )
                        })

                        } */}
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default CountryPage;