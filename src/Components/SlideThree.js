import unitTest from "../assets/testing-react-applications.jpg";
import React from "react";

export const SlideThree = (props) => {
    return (
        <React.Fragment>
            <div style={props.slide.backImage}>
                <img src={unitTest} style={props.slide.image}/>
            </div>

            <div style={props.slide.container}>
                <div style={props.slide}>React testing tools</div>

                <ul style={props.slide.unOrderList}>
                    <li>
                        <h3>
                            Jest
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Enzyme
                        </h3>
                    </li>
                    <li>
                        <h3>
                            React testing library
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Sinon
                        </h3>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    )
}
