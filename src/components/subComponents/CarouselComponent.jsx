import React, { Component } from "react";
//import './news.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react/cjs/react.development";


const News =(props)=>{
    const [loading,setLoading]=useState(false);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: props.itemsToShow
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
      <div className="carouselComponent" >
        <div className="carouselBody">
     
              <Carousel responsive={responsive}>
                {props.data.map((item, indx) => {
                  return (
                    <div className="m-0 carouselCard " key={indx} >
                        <div className="h-100">
                            {console.log(item)}
                        <img
                        src={item?.image}
                        alt=""
                        className="img img-fluid"
                        style={{height:props.height,width:'200px'}}
                      />
                      <div className="carouselText" >
                          {item?.name}
                      </div>
                        </div>
                      
                    </div>
                  );
                })}
              </Carousel>
            </div>
          
     
      </div>
    );
  }


export default News;