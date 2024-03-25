import { createContext, useState } from "react"
const ArrContext=createContext()

function ArrContextProvider(data)
{
 const[activityArr,setActivityArr]=useState([
    {id:1,
     name:"santa",   
     favourites:false   
    },
    {id:2,
     name:"ricky",   
     favourites:false   
    },
    {id:3,
     name:"andrew",   
     favourites:false   
    },
    {id:4,
     name:"stark",   
     favourites:false   
    },
    {id:5,
     name:"tom",   
     favourites:false   
    }

    
    ])
 return(
    <ArrContext.Provider value={{activityArr,setActivityArr}}>
       {data.children}
    </ArrContext.Provider>
 )
}
export default ArrContextProvider

export {ArrContext}