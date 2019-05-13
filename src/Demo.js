import React from 'react';
import {SlideOne} from "./Components/SlideOne";
import {SlideTwo} from "./Components/SlideTwo";
import {SlideThree} from "./Components/SlideThree";
import {SlideFour} from "./Components/SlideFour";
import {SlideFifth} from "./Components/SlideFifth";
import {SlideSixth} from "./Components/SlideSixth";

const slide = {

    first: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'left',
        orderList: {
            listStyleType: 'none',
            fontSize: 25,
            textAlign: 'left',
        },
        unOrderList: {
            listStyleType: 'disc',
            fontSize: 25,
            textAlign: 'left',
        },
        gitLogo: {
            width: 32
        },
        gitlinks:{
            fontSize:20,
            marginLeft:10
        }
    },
    second:{
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'left',
        orderList: {
            listStyleType: 'none',
            fontSize: 25,
            textAlign: 'left',
        },
        unOrderList: {
            listStyleType: 'number',
            fontSize: 18,
            textAlign: 'left',
        },
        gitLogo: {
            width: 32
        },
        gitlinks:{
            fontSize:20,
            marginLeft:10
        },
        image:{
            position:'relative',
            width:'50%',
        }
    },
    three:{
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'left',
        orderList: {
            listStyleType: 'none',
            fontSize: 25,
            textAlign: 'left',
        },
        unOrderList: {
            listStyleType: 'number',
            fontSize: 18,
            textAlign: 'left',
        },
        container:{
          padding:60
        },
        backImage:{
            backgroundColor:'#000',
            borderRadius:10
        },
        image:{
            position:'relative',
            width:'50%',
        }
    }
}

export default [
    {
        id: "bored",
        className: "slide",
        data: {
            x: -1000,
            y: -1500,
        },
        content: [
            <SlideOne slide={slide.first}/>
        ]
    },
    {
        className: "slide",
        data: {
            y: -1500
        },
        content: [
            <SlideTwo slide={slide.second}/>
        ]
    },
    {
        className: "slideNoPadding",
        data: {
            x: 1000,
            y: -1500
        },
        content: [
            <SlideThree slide={slide.three}/>
        ]
    },
    {
        id: "title",
        data: {
            scale: 4
        },
        content: [
            <SlideFour/>
        ]
    },
    {
        className: "slide",
        data: {
            x: 2000,
            y: -1500
        },
        content: [
            <SlideFifth slide={slide.three}/>
        ]
    },
    {
        className: "slide",
        data: {
            x: 3000,
            y: -1500
        },
        content: [
            <SlideSixth slide={slide.three}/>
        ]
    },
    {
        data: {
            x: 4000,
            y: 2000,
            rotateZ: 90,
            scale: 4
        },
        content: [
            <h1 style={{color:'#fff'}}>Lets do it</h1>
        ]
    },
];
