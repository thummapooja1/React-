import Ipldata from "./ipldata";
import "../../App.css"

const Iplmatch=()=>{
    const {name,source,players,trophy}=Ipldata
    return(
        <>
        {Ipldata.map((eachIpldata)=>(
          <div className="main">
            <h3>{eachIpldata.name}</h3>
            <img src={eachIpldata.source} width={100} height={100}/>
            <h3>{eachIpldata.players}</h3>
            <h3>{eachIpldata.trophy}</h3>

            
            </div>
        ))}
        </>
        
    )
}
export default Iplmatch;