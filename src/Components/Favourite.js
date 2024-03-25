import { useContext } from "react"
import { ArrContext } from "../ArrContextprovider"
import Favouriteitem  from "../Favouriteitem"
function Favourite()
{
const {activityArr,setActivityArr}=useContext(ArrContext)
const favouriteitems=activityArr.filter(item=>item.favourite)
return(
    <div>
         {
                favouriteitems.map(function(item, index){
                    return <Favouriteitem id={item.id} name={item.name} favourite={item.favourite} index={index} activityArr={activityArr} setActivityArr={setActivityArr}></Favouriteitem>
                })
            }
    </div>
)
}
export default Favourite