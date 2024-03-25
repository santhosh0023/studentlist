import { useContext } from "react"
import { ArrContext } from "../ArrContextprovider"
import Listofstudent from "../Listofsudent"
function Student()
{ const {activityArr}=useContext(ArrContext)
    return(
        <>
         {
                activityArr.map(function(item, index){
                    return <Listofstudent id={item.id} name={item.name} favourite={item.favourite} index={index}></Listofstudent>
                })
            }
        </>
    )
}
export default Student