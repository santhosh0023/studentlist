import { ArrContext } from "./ArrContextprovider"
import { useContext } from "react"
function Favouriteitem(props)
{
    const{activityArr,setActivityArr}=useContext(ArrContext)
    function handleremove(deleteid)
    {
        var removeArr=activityArr.map(function(item)
        {
            if(item.id===deleteid)
            {
              return{...item,favourite:false}
            }
            else{
               return item
            }
            
        })
        setActivityArr(removeArr)
    }
    return(
        <div className="flex ">
        
        <p>{props.name}</p>
        <button className="rounded-md text-red-600 text-white"  onClick={()=>handleremove(props.id)}>remove</button>
        
        </div>
    )
}
export default Favouriteitem