import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';

const CardFaq=(props)=>{
    const [collapse,setCollapse]=useState([]);
    useEffect(()=>{
        const isOpen=[]
        props.content.forEach((item)=>{
            isOpen.push(item.isOpen)
        })
        setCollapse([...isOpen])
    },[])
    const toggle=(index)=>{
        const tempArray=[]
        for(let i=0;i<collapse.length;i++){
            // tempArray.push(false);
            if(i==index){
                tempArray.push(!collapse[i])
            }
            else{
                tempArray.push(false)
            }
        }
        setCollapse([...tempArray])
        console.log(tempArray)
    }
    return(
        <div className="cardFaq row">
            {props.content.map((item,index)=>{
                return(
                   
                         <div className="questionBox1 w-100" >
                        <div className="question" onClick={()=>{toggle(index)}} data-event={index}>
                            <div>
                            {item.question}
                            </div>
                            <div className="circle">
                                {collapse[index]?<div className="symbol" >-</div>:<div className="symbol">+</div>}
                            </div>
                        </div>
                        <Collapse isOpen={collapse[index]}>
                        <div className="answer" style={{textAlign:"justify"}} >
                            {item.answer}
                        </div>
                        </Collapse>
                        
                    </div>
                   
                )
            })}
        </div>
    )
}
export default CardFaq;