import React,{useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CountryDropDown=(props)=>{
    const list1=[
        "Russia",
        "Germany",
        "United Kingdom",
        "France",
        "Italy",
        "Spain","Ukraine","Polan","Romania","Netherlands","Belgium","Czechia"
    ]
    const list2=[
        "Greece","Portugal","Swedan","Hungary","Belarus","Austria","Serbia","Switzerland","Denmark","Finland","Slovakia","Ireland","Norway"
    ]
    const list3=[
        "China","India","Indonesia","Pakistan","Japan","Turkey","Thailan","Uzbekistan","Kazakhstan","Azarbaijan","UAE","Tajikstan"
    ]
    const list4=[
        "Egypt","Ethiopia","Tanzania","South Africa","Morocoo","Algeria","Zimbabwe"
    ]
    const toggle=()=>{
        props.setDropDownOpen(!props.dropdownOpen)
    }
    const open=()=>{
        props.setDropDownOpen(true)
    }
    return(
        <>
        <Dropdown isOpen={props.dropdownOpen} toggle={toggle} className="countryDropDown" onMouseEnter={open}>
        <DropdownToggle className="header" caret style={{background:'none',border:'none',color:'#6a2d87ff'}}  >
          COUNTRY 
        </DropdownToggle>
        <DropdownMenu style={{width:'100vw',background:"transparent",border:"none"}} className="body p-0">
            <div className="row d-flex" style={{width:"70vw",marginLeft:"15vw",background:"#6a2e88ff",borderRadius:"3px"}}>
     
            <div className="col-3">
                <DropdownItem disabled className="bold">Europe</DropdownItem>
                {list1.map((item)=>{
                    return(
                        <DropdownItem className="text">{item}</DropdownItem>
                    )
                  
                })}
            </div>
            <div className="col-3">
                {list2.map((item)=>{
                    return(
                        <DropdownItem className="text">{item}</DropdownItem>
                    )
                 
                })}
            </div>
            <div className="col-3">
                <DropdownItem disabled className="bold">Asia</DropdownItem>
                {list3.map((item)=>{
                    return(
                        <DropdownItem className="text">{item}</DropdownItem>
                    )
                    
                })}
            </div>
            <div className="col-3">
                <DropdownItem disabled className="bold">Africa</DropdownItem>
                {list4.map((item)=>{
                    return(
                        <DropdownItem className="text">{item}</DropdownItem>
                    )
                    
                })}
                <DropdownItem className="bold">Australia</DropdownItem>
                <DropdownItem className="bold">New zealand</DropdownItem>
                <DropdownItem className="bold">Canada</DropdownItem>
                <DropdownItem className="bold">USA</DropdownItem>
                           
            </div>
            </div>
        </DropdownMenu>
      </Dropdown>
        </>
    )
}

export default CountryDropDown;