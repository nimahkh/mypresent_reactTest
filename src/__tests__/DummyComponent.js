import React from "react";
import { shallow} from '../enzymeConfig';
import {DummyComponent} from "../Components/DummyComponent";

const dummyData=[
    {
        id:1,
        message:'first message',
        author:{
            name:"IRC",
            family:"Iran React Community"
        }
    },
    {
        id:2,
        message:'second message',
        author:{
            name:"IRC",
            family:"Iran React Community"
        }
    },
    {
        id:3,
        message:'third message',
        author:{
            name:"IRC_Iran",
            family:"Iran React Community"
        }
    },
]

describe('Test dummy Component', () => {
    it('renders three div components', () => {
        const wrapper = shallow(<DummyComponent data={dummyData}/>);
        expect(wrapper.find("div.authors")).toHaveLength(3);
    });

})
