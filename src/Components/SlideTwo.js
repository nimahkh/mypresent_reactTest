import unitTest from "../assets/unitTest.png";
import React from "react";

export const SlideTwo=(props)=>{
    return(
        <React.Fragment>
            <img src={unitTest} style={props.slide.image}/>

            <div style={props.slide}>why using test?</div>

            <ul style={props.slide.unOrderList}>
                <li>
                    Jacob Kaplan-Moss: “Code without tests is broken by design”.
                </li>
                <li>
                    segregate and test each part of the program .
                </li>
                <li>
                    first isolating the units, testing each, then integrating them and testing the whole.
                </li>
                <li>
                    finding software bugs early.
                </li>
                <li>
                    improves the quality of the code.
                </li>
                <li>
                    Issues are found at an early stage.
                </li>
                <li>
                    allows the programmer to refactor code.
                </li>
                <li>
                    provides documentation of the system.
                </li>
                <li>
                    simplify the debugging process.
                </li>
            </ul>

        </React.Fragment>
    )
}
