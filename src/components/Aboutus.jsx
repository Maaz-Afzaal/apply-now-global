import React,{useState} from "react";
import faqImage from '../assets/images/faqImage.png';
import Lines from "./subComponents/Lines";
import Header from "./Header";
import Footer from "./Footer";
const Aboutus=(props)=>{

    return(
        <>
            <div className="aboutusPage">
            <div className="header">
                <div className="">
                    <Header aboutus={true}/>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={faqImage} alt="" className="img img-fluid blurImage"/>
                    </div>
                    <div className="text">
                    Get Every Information You Need About the Courses Abroad with <br/> <span className="">ApplyNowGlobal!</span>
                    <Lines color={"yellow"}/>
                    </div>
                   
                </div>
            </div>
            <div className="body">
                <div className="innerBody">
                <div className="aboutus">
                    <div className="heading d-flex flex-column align-items-start mb-3"><h2>About Us</h2><Lines color={"yellow"}/></div>
                </div>
                <p className="text">
                ApplyNowGlobal is an international education platform that helps students who want to study abroad. It is a Search engine platform Where you can search for universities and courses according to your requirements. You can get complete details, guidance and requirements about institutes on a single platform. We work as the backbone of the international universities and students. We came into existence in 2021; as a registered UCAS (Universities and College Admissions Service). We provide you with accurate information about all the higher education universities in the UK, USA, Europe, and Canada. The best benefit for you is the individualized attention from our expert career counselors. We guide you with all the foreign university's details with the courses they provide. You will surely not get such information from your school or college, and thus your career or goals may suffer a lot because of it. Our multi-lingual counselors will understand your academic performance and devise a plan to get admission to the foreign university of your choice. We aim to stimulate you to select the appropriate program abroad universities. 
                </p>
                <div className="whychoose">
                    <div className="heading mb-3"><h2>Why Choose an International Educational Platform?</h2><Lines color={"yellow"}/></div>
                </div>
                <div className="whychoosebody">
                        <p className="text">
                        Before planning anything, it is essential to be clear about your career goals. Which country do you want to study in? What course/program do you want to choose? Which universities or colleges did you direct? There might be a lot of confusion in your mind, so you have to clear up all your doubts. First, you write down everything on paper and start researching it. Once you know the structure of your plan, you can go to an Educational Platform professional for further guidance. 
                        </p>
                        <p>
                        It is very effective in helping students choose the option that best suits them. The professionals understand the complexity of the visa application process and the land laws. They have solutions to all kinds of issues related to the study visa. Even if you can do it yourself, it is always good to have someone like ApplyNowGlobal who will help you and guide you through this process. If you are unsure, here are the benefits of choosing a professional Educational Platform:
                        </p>
                        <div className="cards row">
                            <div className=" ">
                                <h3>Best Counseling for Studying Abroad</h3>
                                <p>These professionals will help you find a course or program that will benefit your area of interest or topic. Choosing the right program is vital if you plan to study abroad to get international opportunities. They give students a list of universities that offer courses/programs they want to enter. A good and knowledgeable advisor will also tell you how to make an informed decision about your career to enjoy a better future.</p>              
                            </div>
                            <div className=" ">
                                <h3>Professionalism is the Key</h3>
                                <p>Being in the field and working in the same 24/7 is the perfect act to gather a sufficient amount of relevant information on a particular topic or area. The professionals know better about a visa, its process, and details. Therefore, you can avoid unnecessary mistakes when applying for a student visa.</p>
                            </div>
                            <div className=" ">
                                <h3>Quick Response</h3>
                                <p>The Educational Platform professionals know all the points to consider. They will provide you with better guidance on what you need to know to get the results you want.</p>
                            </div>
                            <div className=" ">
                                <h3>Visa Packages and Training</h3>
                                <p>International Educational Platform, such as ApplyNowGlobal, strives to help students find everything under one roof. Because of this approach, students do not have to run from one consultant to another to get things done. </p>
                            </div>
                            <div className=" ">
                                <h3>Transparency</h3>
                                <p>The Educational Platform is straightforward and accurate. The counselors will review your profile and previous schools to understand better which country and university/college you should apply for. They'll also help you apply for a visa from the country you want to go to study abroad.</p>
                            </div>
                        </div>
                </div>
                <div className="whychooseus">
                    <div className="mb-3">
                    <h2>Why Choose Us?</h2>
                    <Lines color={"yellow"}/>
                    </div>
                    
                    <p className="text">There are thousands of fake websites available that provide you with incorrect information. Our website is authentic. We are available here 24/7 to solve all your skepticism. Our expert can help you choose a program and university according to your future goals and create the perfect application so that you stand out from the congregation. Candidate satisfaction is our top-most priority, and we give you 100% accurate results that fully meet your desired goals. Only at ApplyNowGlobal, you will increase your chances of getting into foreign universities. So, what are you waiting for? Contact us now and join your journey towards your career with our excellent services. </p>
                </div>
                <div className="cards row">
                    <div className="">
                        <h3>Our Expert Counselors Facilitate Students to Achieve Their Life Goals</h3>
                        <p>The question that arises in mind is why you need consultants for educational purposes? The only reason is that a candidate needs help to get awareness about foreign universities to get higher studies. Our multi-lingual, international consultants gave you proper support and explained about the study programs abroad. Our planning boards are all multi-lingual UK graduates, many of who have undergone industry-recognized and accredited training. Our team will always provide honest, reliable advice that will meet every candidate's needs individually.</p>
                    </div>
                    <div className=" ">
                        <h3>Our Mission</h3>
                        <p>Our mission is to give feasibility to students who want to study abroad. You can search for the desired university, which courses, and scholarships they provide. You will also notify by the study events-related news. Our platform allows all the students to visualize the scope of foreign education and enhance their language skills. One can also effectuate their academic ambitions by follow-up the education path that suits them the best.</p>
                    </div>
                    <div className=" ">
                        <h3>100% Trust-Worthy</h3>
                        <p>We aim to guide you with the right educational advice that helps you to choose the correct destination for your career. ApplyNowGlobal is a 100% Google authorized website made to help-out out students find their desired courses abroad. We also tell you the admission process and travel budget and support you during your stay. </p>
                    </div>
                    <div className=" ">
                        <h3>International Career Guidance</h3>
                        <p>Our board of advisors understands well what the candidate wants to achieve in life and thus suggests the best course in foreign universities. Time is very precious, so don't hustle here and there and move forward in life with us.</p>
                    </div>
                    <div className=" ">
                        <h3>Availability of Visa Prescriptions</h3>
                        <p>Students will need to require a student visa if they want to study abroad. There is a risk if you get it without professional knowledge. Our consultants are foreign-educated and have enough experience to know what makes for the perfect visa applications. Get advantage of visa acceptance chances with our professionals. </p>
                    </div>
                    <div className=" ">
                        <h3>Save Your Time with Us</h3>
                        <p>We understand that you expect to get higher education at the best possible institution. Here you will search what the foreign university offers and what plan suits you. Our services are transparent to meet the needs of potential students who cherish high-education study abroad. Our assistances are available 24/7, so don't hesitate to contact us.</p>
                    </div>
                    <div className=" ">
                        <h3>Get The Best Educational Advice</h3>
                        <p>Our supportive consultants play a helping hand role for you. They have supreme knowledge of foreign universities and how one can get admission to them. You can tell us your interest, and then we will help you find universities that would be an excellent match for you and create an application with a competitive edge so that you have more chances of getting in.</p>
                    </div>
                   
                </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
            </div>
        </>
    )
}
export default Aboutus;