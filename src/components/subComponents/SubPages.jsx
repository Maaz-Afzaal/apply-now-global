import React,{useEffect, useState} from "react";

const SubPages=(props)=>{
    
    const [pages,setPages]=useState([]);
    useEffect(()=>{
        console.log(props)
        const tmpArray=[];
        for(let i=1;i<=props.pages;i++){
            tmpArray.push(i);
        }
        setPages([...tmpArray]);
    },[props])
    const handleNextPage=(next)=>{
        props.nextPage(next);
    }
    if(props.pages==2){
        return(
            <div className="row d-flex justify-content-center  pages">
                <div className="text d-flex">
                    <div onClick={()=>{handleNextPage(props.currentPage-1)}} className={`${(props.currentPage==1)?"invisible":"m-3"}`}>{'<<'}</div>
                    <div className={(props.currentPage==1)?"active m-3":"m-3"} onClick={()=>{handleNextPage(1)}} >1</div>
                    <div className={(props.currentPage==2)?"active m-3":"m-3"} onClick={()=>{handleNextPage(2)}}>2</div>
                   
                    <div onClick={()=>{handleNextPage(props.currentPage+1)}} className={`${(props.currentPage==2)?"invisible":"m-3"}`}>{'>>'}</div>
                </div>
            </div>
        )
    }
    else if(props.pages==3){
        return(
            <div className="row d-flex justify-content-center  pages">
                <div className="text d-flex">
                    <div onClick={()=>{handleNextPage(props.currentPage-1)}} className={`${(props.currentPage==1)?"invisible":"m-3"}`}>{'<<'}</div>
                    <div className={(props.currentPage==1)?"active m-3":"m-3"} onClick={()=>{handleNextPage(1)}} >1</div>
                    <div className={(props.currentPage==2)?"active m-3":"m-3"} onClick={()=>{handleNextPage(2)}}>2</div>
                    <div className={(props.currentPage==3)?"active m-3":"m-3"} onClick={()=>{handleNextPage(3)}}>3</div>
                    <div onClick={()=>{handleNextPage(props.currentPage+1)}} className={`${(props.currentPage==3)?"invisible":"m-3"}`}>{'>>'}</div>
                </div>
            </div>
        )
    }
    else{
        if(props.currentPage<props.pages-2){
            return(
                <div className="row pages">  
                <div className="text d-flex">
                    <div onClick={()=>{handleNextPage(props.currentPage-1)}} className={`${(props.currentPage==1)?"invisible":"m-3"}`}>{'<<'}</div>
                    <div className="active m-3" onClick={()=>{handleNextPage(props.currentPage)}} >{props.currentPage}</div>
                    <div className="m-3" onClick={()=>{handleNextPage(props.currentPage+1)}}>{props.currentPage+1}</div>
                    <div className="m-3" onClick={()=>{handleNextPage(props.currentPage+2)}}>{props.currentPage+2}</div>
                    <div className="dots align-self-center">...</div>
                    <div className="lastPage m-3" onClick={()=>{handleNextPage(props.pages)}}>{props.pages}</div>  
                    <div onClick={()=>{handleNextPage(props.currentPage+1)}} className={`${(props.currentPage==props.pages)?"invisible":"m-3"}`}>{'>>'}</div>
                </div>
                   
            </div>
            )
           
        }
        else{
            return(
                <div className="row d-flex pages">
                    <div className="text d-flex">
                    <div onClick={()=>{handleNextPage(props.currentPage-1)}} className={`${(props.currentPage==1)?"invisible":"m-3"}`}>{'<<'}</div>
                    <div className={(props.currentPage==1)?"active m-3":"m-3"} onClick={()=>{handleNextPage(1)}} >1</div>
                    <div className="dots align-self-center">...</div>
                    <div className={`${props.currentPage==props.pages-2?"active m-3":"m-3"}`} onClick={()=>{handleNextPage(props.pages-2)}} >{props.pages-2}</div>
                    <div className={`${props.currentPage==props.pages-1?"active m-3":"m-3"}`}onClick={()=>{handleNextPage(props.pages-1)}}>{props.pages-1}</div>
                    <div className={`${props.currentPage==props.pages?"active m-3":"m-3"}`} onClick={()=>{handleNextPage(props.pages)}}>{props.pages}</div>
                    <div onClick={()=>{handleNextPage(props.currentPage+1)}} className={`${(props.currentPage==props.pages)?"invisible":"m-3"}`}>{'>>'}</div>
                </div>
               
                </div>
            )
        }
           
        
    }
}

export default SubPages;