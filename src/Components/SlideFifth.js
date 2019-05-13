import React from "react";
import {DummyComponent} from "./DummyComponent";

const dummyData=[
    {
        id:1,
        message:'first message',
        author:{
            name:"nima",
            family:"habibkhoda"
        }
    },
    {
        id:2,
        message:'second message',
        author:{
            name:"nima",
            family:"habibkhoda"
        }
    },
    {
        id:3,
        message:'third message',
        author:{
            name:"nima",
            family:"habibkhoda"
        }
    },
]

export const SlideFifth = (props) => {
    return (
        <React.Fragment>
            <div style={props.slide.container}>
                <div style={props.slide}>{"Create a test with CRA"}</div>

                <ul style={props.slide.unOrderList} type="number">
                    <li>
                        <h3>
                            {"open a terminal"}
                        </h3>
                    </li>
                    <li>
                        <h3>
                            {"write 'npm run test' command"}
                        </h3>
                    </li>
                </ul>

                <div style={props.slide}>{"Test list"}</div>

                <DummyComponent data={dummyData}/>

            </div>
        </React.Fragment>
    )
}
