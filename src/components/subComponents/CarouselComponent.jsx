import React, { useState} from "react";
//import './news.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
const CarouselComponent =(props)=>{
    const [loading,setLoading]=useState(false);
    const history=useHistory();
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
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group" style={{position:"absolute",bottom:"1%",right:"0%",padding:"3px"}}>
              <div className="d-flex">
                <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} 
                style={{background:"none",borderRadius:"50%",border:`1px ${props.color} solid`,color:props.color,fontSize:"20px",fontWeight:"600",width:"2rem",height:"2rem",
                display:"flex",justifyContent:"center",alignItems:"center",marginRight:"5px"}}>{'<'}</Button>
                <Button onClick={() => next()} style={{background:"none",borderRadius:"50%",border:`1px ${props.color} solid`,color:props.color,fontSize:"20px",fontWeight:"600",width:"2rem",height:"2rem",
                display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"5px"}}>{'>'}</Button>
                {/* <Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button> */}
              </div>
              
          </div>
        );
      };
    return (
      <div className="carouselComponent mt-3" >
        <div className="carouselBody">
     
              <Carousel responsive={responsive}
              infinite={true}
              arrows={false} customButtonGroup={<ButtonGroup />}
              >
                {props.data.map((item, indx) => {
                  return (  
                    <div className="m-0 carouselCard pointer" key={indx} style={{height:`calc(${props.height} + 75px)`}} onClick={()=>{
                      if(item.link){
                        history.push(item.link)
                      }
                    }}>
                        <div className="h-100">
                            
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


export default CarouselComponent;