
const Lines=(props)=>{
    return(
        <div className="lines">
            <div className={`${(props.color==="yellow")?"yellowColor":"purpleColor"}`}>
            <div className="horizontalLine"></div>
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
            </div>
        </div>
        
    )
}

export default Lines;