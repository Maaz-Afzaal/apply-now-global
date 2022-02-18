import React,{useState} from "react";

import CardFaq from './subComponents/CardFaq';
import Header from "./Header";
import Footer from "./Footer";
import faqImage from '../assets/images/faqImage.png';
const Faqs=()=>{
    const [categoryActive,setCategoryActive]=useState({
        general:true,
        application:false,
        entry:false,
        working:false,
        scholarship:false,
        visa:false,
        services:false,
    })
    const [questions,setQuestions]=useState([
        {   category:"General",
            isActive:true,
            content:[
            {question:"How to study Abroad",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation.",},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"What are the requirements to study abroad",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programm your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How long are study abroad programmes",
            isOpen:false,
            answer:"Studying abroad is a big decision that i decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How to apply to study abroad",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"What goes into applying to a university abroad",
            isOpen:false,
            answer:"Studying abroad is a big decision thfnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How old do you have to be to study abroad",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a lotance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]},
        {category:"Application",
        isActive:false,
            content:[
            {question:"What is the procedure of application",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]},
        {category:"Entry",
        isActive:false,
            content:[
            {question:"What is the procedure of application",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]},
        {category:"Working",
        isActive:false,
            content:[
            {question:"What is the procedure of application",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]},
        {category:"Scholarships",
        isActive:false,
            content:[
            {question:"How to get full scholarship?",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]},
        {category:"About Visas",
        isActive:false,
            content:[
            {question:"How to get Visa",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]},
        {category:"Services",
        isActive:false,
            content:[
            {question:"What services are we providing/",
            isOpen:true,
            answer:"Studying abroad is a big decision that involves a lot of investment in terms of time, ener-gy and fnance. Not all study abroad programmes are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
            {question:"How does studying abroad work",
            isOpen:false,
            answer:"Studying abroad is a big decision that involves a ls are created equal. To hasten your decision-making and to obtain comprehensive guidance as to how to study abroad, reach out to experts at IEC Abroad for a consultation."},
        ]}
    ])
    const changeQuestions=(index)=>{
        const tempArray=[]
        for(let i=0;i<questions.length;i++){
            
            if(i==index){
                if(questions[i].isActive){
                    tempArray.push(questions[i])
                }
                else{
                    // const secTempArray=[];
                    tempArray.push({isActive:true,category:questions[i].category,content:questions[i].content});
                    
                }
            }
            else{
                tempArray.push({isActive:false,category:questions[i].category,content:questions[i].content})
            }
            setQuestions([...tempArray])
        }
    }
    return(
        <div className="faq">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <div className="header">
                    <div className="headerImage">
                        <img src={faqImage} alt="FAQs" className="img img-fluid blurImage"/>
                        <div className="content">
                            <div className="headerTextBold">Frequently Asked Questions</div>
                            <div className="d-flex">
                            <div className="horizontalLine"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            <div className="square"></div>
                            </div>
                            
                            <div className="headerText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</div>
                            
                            
                        </div>
                        
                    </div>
                </div>
                {/* header ends */}
                <div className="body">
                    <div className="row">
                        <div className="col-12 col-md-4 pr-5">
                        <div className="categories">
                            {questions.map((categories,index)=>{
                                return(
                                    <div className="box" onClick={()=>{changeQuestions(index)}}>
                                    <div className="text">
                                        {categories.category}
                                    </div>
                                    <div className="arrow">
                                        <div className={`${(categories.isActive)?"rotateUp":""}`}>
                                            {'>'}
                                        </div>
                                    </div>
                                    </div>
                                )
                            })}
                        </div>
                        </div>
                        <div className="col-12 col-md-7 ml-md-4 questions mt-5 mt-md-0">
                            {questions.map((question)=>{
                                return(
                                    <div className="questionBox">
                                        {
                                            (question.isActive?
                                                <>
                                                    <CardFaq content={question.content}/>
                                                </>:
                                                <>
                                                </>
                                                )
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}
export default Faqs;