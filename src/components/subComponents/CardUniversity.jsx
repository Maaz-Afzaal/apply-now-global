import React from "react";

const Card=(props)=>{

    return(
        <div className="cardUniversity">
            {(props.type=="text")?
                    <div className="cardBody">
                            <div className="heading">
                                {props.heading}
                            </div>
                            <div className="content">
                                {props.content.map((item)=>{
                                    return(
                                        <p>{item}</p>
                                    )
                                })}
                            </div>
                    </div>
        
            :
                <div className="cardBody">
                    <div className="heading">
                            {props.heading}
                    </div>
                    <div className="content">
                    <ol>
                        {props.content.map((item)=>{
                            return(
                                
                                    <li>{item}</li>
                                
                            )
                        })}
                    </ol>
                </div>
                </div>
                
           
        }
        </div>
    )
}
export default Card;