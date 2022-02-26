import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CountryDropDown=(props)=>{
    const history=useHistory();
    const list1=[
        "Russia",
        "Germany",
        "United Kingdom",
        "France",
        "Italy",
        "Spain","Ukraine","Polan","Romania","Netherlands","Belgium","Czechia"
    ]
    const list1link=[
        "russia",
        "germany",
        "uk",
        "france",
        "italy",
        "spain","ukraine","polan","romania","netherlands","belgium","czechia"
    ]
    const list2=[
        "Greece","Portugal","Swedan","Hungary","Belarus","Austria","Serbia","Switzerland","Denmark","Finland","Slovakia","Ireland","Norway"
    ]
    const list2link=[
        "greece","portugal","swedan","hungary","belarus","austria","serbia","switzerland","denmark","finland","slovakia","ireland","norway"
    ]
    const list3=[
        "China","India","Indonesia","Pakistan","Japan","Turkey","Thailan","Uzbekistan","Kazakhstan","Azarbaijan","UAE","Tajikstan"
    ]
    const list3link=[
        "china","india","indonesia","pakistan","japan","turkey","thailan","uzbekistan","kazakhstan","azarbaijan","uae","tajikstan"
    ]
    const list4=[
        "Egypt","Ethiopia","Tanzania","South Africa","Morocoo","Algeria","Zimbabwe"
    ]
    const list4link=[
        "egypt","ethiopia","tanzania","southafrica","morocoo","algeria","zimbabwe"
    ]
    const toggle=()=>{
        props.setDropDownOpen(!props.dropdownOpen)
    }
    const open=()=>{
        props.setDropDownOpen(true)
    }
    return(
        <>
        <Dropdown isOpen={props.dropdownOpen} toggle={toggle} className="countryDropDown w-100" onMouseEnter={open}>
        <DropdownToggle className="textLink" caret style={{background:'none',border:'none',color:'#6a2d87ff'}}  >
          COUNTRY 
        </DropdownToggle>
        <DropdownMenu style={{width:"67vw",marginRight:"-1.8vw",background:"#6a2e88ff",borderRadius:"3px"}} className="body p-0 ">
            <div className="row d-flex " >
     
            <div className="col-3">
                <DropdownItem disabled className="bold">Europe</DropdownItem>
                {list1.map((item,index)=>{
                    return(
                        <DropdownItem className="text" onClick={()=>{
                            history.push(`/country/${list1link[index]}`)
                        }}>{item}</DropdownItem>
                    )
                  
                })}
            </div>
            <div className="col-3">
                {list2.map((item,index)=>{
                    return(
                        <DropdownItem className="text" onClick={()=>{
                            history.push(`/country/${list1link[index]}`)
                        }}>{item}</DropdownItem>
                    )
                 
                })}
            </div>
            <div className="col-3">
                <DropdownItem disabled className="bold">Asia</DropdownItem>
                {list3.map((item,index)=>{
                    return(
                        <DropdownItem className="text" onClick={()=>{
                            history.push(`/country/${list1link[index]}`)
                        }}>{item}</DropdownItem>
                    )
                    
                })}
            </div>
            <div className="col-3">
                <DropdownItem disabled className="bold">Africa</DropdownItem>
                {list4.map((item,index)=>{
                    return(
                        <DropdownItem className="text" onClick={()=>{
                            history.push(`/country/${list1link[index]}`)
                        }}>{item}</DropdownItem>
                    )
                    
                })}
                <DropdownItem className="bold" onClick={()=>{
                            history.push(`/country/australia`)
                        }}>Australia</DropdownItem>
                <DropdownItem className="bold" onClick={()=>{
                            history.push(`/country/newzealand`)
                        }}>New zealand</DropdownItem>
                <DropdownItem className="bold" onClick={()=>{
                            history.push(`/country/canada`)
                        }}>Canada</DropdownItem>
                <DropdownItem className="bold" onClick={()=>{
                            history.push(`/country/us`)
                        }}>USA</DropdownItem>
                           
            </div>
            </div>
        </DropdownMenu>
      </Dropdown>
        </>
    )
}

export default CountryDropDown;