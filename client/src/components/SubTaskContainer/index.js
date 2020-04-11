import React from "react";
import CompBtn from "../CompBtn"

function SubTaskContainer({ _id, subTask1, subTask2, subTask3, subTask4, subTask5 }) {
    return (
        <div><div><h3>St1:{subTask1}</h3>
            <CompBtn
            _id
            name = {subTask1}/>
        </div>
            <div><h3>St2:{subTask2}</h3>
            <CompBtn
            _id
            name = {subTask2}/>
            </div>
            <div><h3>St3:{subTask3}</h3>
            <CompBtn
            _id
            name = {subTask3}/>
            </div>
            <div><h3>St4:{subTask4}</h3>
            <CompBtn
            _id
            name = {subTask4}/>
            </div>
            <div><h3>St5:{subTask5}</h3>
            <CompBtn
            _id
            name = {subTask5}/>
            </div>
        </div>

    );
}

export default SubTaskContainer;