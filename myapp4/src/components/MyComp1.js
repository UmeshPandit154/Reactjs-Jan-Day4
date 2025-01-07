//1. import area

// import something from somelocation/somelibrary

import { MyComp2 } from "./MyComp2";



//2. function defination area
function MyComp1(){ // PascalCase
    //Every function return something
    return <h1>OKLABS <MyComp2 /> </h1>
  }


//3. export area
// There are 2 ways you can export in NodeJs
//3.1 Default Export

export default MyComp1;

//3.2 Named Export