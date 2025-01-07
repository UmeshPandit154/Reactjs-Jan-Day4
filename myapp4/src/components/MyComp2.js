//1. import area

// import something from somelibrary
import React from "react"
// import something from somelocation

// import { NamedImport } from somelocation
import { MyComp3 } from "./MyComp3"

//2. function defination area
export const MyComp2=()=>{
    //Every function return something

    return ( 
              <React.Fragment>
                  <span>MyComp2 </span>
                  <MyComp3 />
              </React.Fragment>
              
           )
}


//3. export area

//3.1 Default export

//3.2 Named export

