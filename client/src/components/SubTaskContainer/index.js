import React from "react";
import CompBtn from "../CompBtn"
import Completed from "../Completed"

function SubTaskContainer({ 
    task, 
    _id,
    complete, 
    subTask1,
    st1Complete, 
    subTask2,
    st2Complete,  
    subTask3,
    st3Complete,  
    subTask4,
    st4Complete,  
    subTask5,
    st5Complete,
    stComplete
}) {
    return (
        <div><div><h3>St1:{subTask1}</h3>
            {stComplete(st1Complete, <CompBtn />, <Completed />)}
        </div>
        <div><h3>St2:{subTask2}</h3>
            {stComplete(st2Complete, <CompBtn />, <Completed />)}
        </div>
        <div><h3>St3:{subTask3}</h3>
            {stComplete(st3Complete, <CompBtn />, <Completed />)}
        </div>
        <div><h3>St4:{subTask4}</h3>
            {stComplete(st4Complete, <CompBtn />, <Completed />)}
        </div>
        <div><h3>St5:{subTask5}</h3>
            {stComplete(st5Complete, <CompBtn />, <Completed />)}
        </div>
        </div>

    );
}

export default SubTaskContainer;