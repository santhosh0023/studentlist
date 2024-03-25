import { useContext, useState } from "react"
import { ArrContext } from "./ArrContextprovider"

function Listofstudent(props)
{
    const{activityArr,setActivityArr}=useContext(ArrContext)
    const[Delete,setdelete]=useState(false)
    function handledelete(deleteid)
    {
     const updateArr=activityArr.map(function(item)
     {
        if(item.id===deleteid)
        {
            setdelete(true)
            return{...item,favourite:true}
        }
        return item;
     })
     setActivityArr(updateArr)
    }

   const favourites=activityArr.find(item => item.id === props.id && item.favourite)
return(
    <div className="flex  justify-normal gap-10 p-2">
        <p>{props.id}{props.name}</p>
        <button
                className={`rounded-md bg-black text-white ${Delete || favourites ? 'disabled' : ''}`}
                onClick={() => handledelete(props.id)}
                disabled={Delete || favourites}
            >add to favourites</button>
    </div>
)
}
export default Listofstudent