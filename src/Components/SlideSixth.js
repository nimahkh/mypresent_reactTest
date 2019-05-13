import React from "react";

export const SlideSixth = (props) => {
    return (
        <React.Fragment>
            <div style={props.slide.container}>
                <div style={props.slide}>Types of Testing</div>

                <ul style={props.slide.unOrderList}>
                    <li>
                        <h3>
                            Unit test
                        </h3>
                    </li>
                    <li>
                        <h3>
                            TDD test
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Functional Test
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Acceptance Test (ATDD : puppeteer , jest , json-server , Enzyme  )
                        </h3>
                    </li>
                    <li>
                        <h3>
                            Automated UI Test
                        </h3>
                    </li>
                </ul>
            </div>

        </React.Fragment>
    )
}
