import MyProfile from "../assets/my_profile.jpeg";
import git from "../assets/Github.png";
import React from "react";

export const SlideOne=(props)=>{
    return(
        <React.Fragment>
                <span className="faded">
                    <img src={MyProfile}/>
                </span>
            <div style={props.slide}>nima habibkhoda</div>

            <ul className={"myProjects"} style={props.slide.orderList}>
                <li>
                        <span>
                            IRC
                        </span>
                    <span style={props.slide.gitlinks}>
                            With love
                        </span>
                </li>

                <li>
                        <span>
                            <img style={props.slide.gitLogo} src={git}/>
                        </span>
                    <span style={props.slide.gitlinks}>
                            https://github.com/nimahkh
                        </span>
                </li>
            </ul>

            <div style={props.slide}>Repositories</div>

            <ul className={"myProjects"} style={props.slide.unOrderList}>
                <li>
                    Persian React book
                </li>
                <li>
                    Persian React Admin panel
                </li>
            </ul>

        </React.Fragment>
    )
}
