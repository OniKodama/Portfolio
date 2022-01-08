import {useEffect, useRef} from 'react'
import './Intro.scss'
import Img1 from '../../images/man.png'
import Img2 from '../../images/down.png'
import { init } from 'ityped'

const Intro = () => {
    
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay: 1500,
            backSpeed: 400,
            showCursor: true,
            strings: ['FrontEnd', 'Developer' ] })
    },[]);

    
    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "imgContainer">
                    <img src = {Img1} alt = "Hello!"/>
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>Hi There, I' Am</h2>
                    <h1>Julian Sanchez</h1>
                    <h3>React JS<span ref = {textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src = {Img2} alt = "" />
                </a>
            </div>
        </div>
    )
}

export default Intro
