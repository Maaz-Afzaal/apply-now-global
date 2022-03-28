import React,{useEffect, useState,useMemo} from "react";

import Header from "./Header";
import Footer from "./Footer";
import SubPages from "./subComponents/SubPages";
import { getData } from "../utilities";

import faqImage from '../assets/images/faqImage.png';
import blog_1 from '../assets/images/blog_1.png';
import blog_2 from '../assets/images/blog_2.png';
import blog_3 from '../assets/images/blog_3.png';
import blog_4 from '../assets/images/blog_4.png';
import blog_5 from '../assets/images/blog_5.png';
import blog_6 from '../assets/images/blog_6.png';
import searchIcon from '../assets/images/searchIcon.png';


const textLimit=(text)=>{
    const splitText=text.split(' ');
    let returnText=""
    if(splitText.length>34){
        for(let i=0;i<35;i++){
            returnText=returnText+splitText[i]+" ";
        }
        returnText=returnText+" ..."
    }
    else{
        returnText=text;
    }
    return returnText;
}


const Blogs=()=>{
    const [loading,setLoading]=useState(true);
    const [blogToShow,setBlogsToShow]=useState(null);
    const [pages,setPages]=useState(null)
    const [currentPage,setCurrentPage]=useState(1);
    const [search,setSearch]=useState('');
    const [searchedArray,setSearchedArray]=useState([]);
    const [categories,setCategories]=useState([
        // {name:"Advice",blogs:"142"},
        // {name:"Australia",blogs:"23"},
        // {name:"Canada",blogs:"32"},
        // {name:"Fairs",blogs:"11"},
        // {name:"India",blogs:"55"},
        // {name:"Inforgraphic",blogs:"23"},
        // {name:"Ireland",blogs:"142"},
        // {name:"Latest Events",blogs:"56"},
        // {name:"New zealands",blogs:"12"},
        // {name:"News & events",blogs:"43"},
        // {name:"Past Events",blogs:"41"},
        // {name:"Uk",blogs:"142"},
        // {name:"Uncategorized",blogs:"67"},
        // {name:"USA",blogs:"27"},
        
    ])
    // const [blogs,setBlogs]=useState([
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad1",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test2",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad3",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university4",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad5",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_5,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university6",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_6,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad7",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test8",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad9",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_5,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university10",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_6,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad18",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_5,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_6,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university10",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_6,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad18",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university10",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_6,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad18",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university10",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_6,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad18",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_1,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Graduate Schemes and preparing for test",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_2,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"How to prepare for studying abroad",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_3,
    //     },
    //     {
    //         date:"Feburary 5,2020",
    //         title:"Tips for deaf students at university",
    //         description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //         img:blog_4,
    //     },
    // ])

    const [blogs,setBlogs]=useState([]);
    // {
    //     date:"Feburary 5,2020",
    //     title:"How to prepare for studying abroad1",
    //     description:"Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.Ever heard of the saying: “If you fail to prepare, prepare to fail?” Well, you don’t have to worry about that. You’re already on your way to success because you are genius.",
    //     img:blog_1,
    // },
    const getAllBlogs=async (searchedCategory)=>{
       
            const {result,error}=await getData("/api/blog/list");
        const getObj=(date,title,description,img,category)=>{
            return {date,title,description,img,category}
        }
        if(result){
            const tempArray=[];
            const tempCategoryArray=[];
            result.body.map((item,index)=>{
                tempArray.push(getObj(item.date,item.title,item.body,item.image,item.category))
                tempCategoryArray.push(item.category)
                
            })
            if(!searchedCategory){
                setBlogs([...tempArray])
            }
            else{
                const newArray=tempArray.filter((i,idx)=>{
                    console.log(searchedCategory,"i is ",i)
                    return i.category==searchedCategory
                })
                console.log(newArray)
                setBlogs([...newArray])
            }
            const blogCounts={};
            tempCategoryArray.forEach((x) => {
                blogCounts[x] = (blogCounts[x] || 0) + 1;
              });
            const categoryArray=[...new Set(tempCategoryArray)]
            const categoryArrayWithCounts=[]
            categoryArray.map((categoryName,index)=>{
                categoryArrayWithCounts.push({name:categoryName,blogs:blogCounts[`${categoryName}`]})
            })
            
            setCategories([...categoryArrayWithCounts])
            setLoading(false)
        }
        else{
            console.log("blogs error is",error)
        }
        
        
    }
    const searchedCategories=(value)=>{
        if(value==""){
            setSearchedArray([...categories])
        }
        else{
            const tmpArray=[];
            categories.filter((item)=>{
                
                if(item.name.toLowerCase().includes(value.toLowerCase())){
                    tmpArray.push(item);
                }
                return item.name.toLowerCase().includes(value.toLowerCase());
            })
            setSearchedArray([...tmpArray])
            console.log(searchedArray)
        }
            
        
    }
    useEffect(()=>{
        getAllBlogs();
    },[])
    useEffect(()=>{
        if((blogs.length/6)%1==0){
            setPages(blogs.length/6);
        }
        else{
            setPages((Math.ceil(blogs.length/6)))
        }
    },[blogs])
    useEffect(()=>{
        pageToBlog(currentPage);
    },[currentPage]);
   useEffect(()=>{
       setSearchedArray([...categories])
   },[categories])
    const pageToBlog=(page)=>{
        setBlogsToShow((6*page)-6);
        return (6*page)-6;
    }
    const nextPage=(nextValue)=>{
        setCurrentPage(nextValue);
    }
    return(
        <>
        
        
            <div className="blog">
            <div className="header">
                <div>
                    <Header blogs/>
                </div>
                <div className="HeaderBot ">
                    <img src={faqImage} alt="students" className="blurImage"/> 
                </div>
            </div>
            <div className="body">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row heading">
                            <div className="text pointer" onClick={()=>{
                                getAllBlogs();
                            }}>
                                Articles
                            </div>
                            <div className="d-flex">
                                <div className="horizontalLine"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                            </div>
                        </div>
                        <div className="row ">
                        {loading && 
                        <div className="w-100 text-center">

                            <div className="spinner-border mt-5"></div></div>
                        }
                        {!loading && blogs.map((blog,index)=>{
                            if(index>blogToShow-1 && index<blogToShow+6){
                                return(
                                    <div className="col-12 col-md-6 col-lg-4 d-flex align-items-strech">
                                    <div className="blogCard" key={index}>

                                        <div className="w-100" style={{height:"250px"}}>
                                            <img src={blog.img} alt={blog.title} className="w-100" style={{height:"250px",borderRadius:"10px 10px 0 0"}}/>
                                        </div>
                                        <div className="date">
                                            {blog.date}
                                        </div>
                                        <div className="blogTitle">
                                            {blog.title}
                                        </div>
                                        <div className="blogDescription" >
                                            {textLimit(blog.description)}
                                        </div>
                                        <div className="extra pointer" onClick={()=>{
                                            alert("Coming soon...")
                                        }}>
                                            Read More
                                        </div>
                                    </div>
                                    </div>
                                
                            )
                            }
                       
                    })}
                    </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 categories">
                        <div className="heading">
                            Categories
                        </div>
                        <div className="box">
                            <div className="searchBox">
                                <input type="text" value={search} onChange={e=>{
                                    setSearch(e.target.value)
                                    if(e.target.value==""){
                                        
                                    }
                                    else{
                                        searchedCategories(e.target.value)
                                        
                                    }
                                }} 
                                onBlur={()=>{
                                    searchedCategories(search)
                                }}
                                />
                                <div className="searchInputIcon">
                                    <img src={searchIcon} alt="seacrh box" className="searchInput"/>
                                </div>
                                
                            </div>
                            
                            {searchedArray.map((item,index)=>{
                                return(
                                    <div className="text pointer" key={index} onClick={()=>{getAllBlogs(item.name)}}>
                                        {item.name} ({item.blogs})
                                        
                                        {(index==categories.length-1)?<></>:<>
                                        <hr/>
                                        </>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                </div>
                <div className="mt-4 ">
                    <div className="pageChange">
                        {pages>1 && <SubPages pages={pages} currentPage={currentPage} nextPage={nextPage}/>}
                    
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
export default Blogs;