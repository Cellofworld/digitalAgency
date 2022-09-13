
import React from "react"
import { useState } from "react"
import slide1 from "../../img/sliderImg/slide_1.png"
import slide2 from "../../img/sliderImg/slide_2.png"
import slide3 from "../../img/sliderImg/slide_3.png"
import slide4 from "../../img/sliderImg/slide_4.png"
import slide5 from "../../img/sliderImg/slide_5.png"
import slide6 from "../../img/sliderImg/slide_6.png"
import slide7 from "../../img/sliderImg/slide_7.png"
import slide8 from "../../img/sliderImg/slide_8.png"

const img = [
    <img className="slideImg" key={slide1} src={slide1} alt={"sld"} />,
    <img className="slideImg" key={slide2} src={slide2} alt={"sld"}/>,
    <img className="slideImg" key={slide3} src={slide3} alt={"sld"}/>,
    <img className="slideImg" key={slide4} src={slide4} alt={"sld"}/>,
    <img className="slideImg" key={slide5} src={slide5} alt={"sld"}/>,
    <img className="slideImg" key={slide6} src={slide6} alt={"sld"}/>,
    <img className="slideImg" key={slide7} src={slide7} alt={"sld"}/>,
    <img className="slideImg" key={slide8} src={slide8} alt={"sld"}/>
]
export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

 
function prevImg() {
    setActiveIndex(prevImgIndex)
}
function nextImg() {
    setActiveIndex(nextImgIndex)
}
 


    return (
       <div className="slider">
        <div className="sliderDiscription">
            <p className="sliderTitle">Наши последние работы</p>
            <p className="sliderSubtitle">От задачи к результату</p>
        </div>
        <div className="sliderImg">
        {img[prevImgIndex]}
        {img[activeIndex]}
        {img[nextImgIndex]}
        </div>
        <div className="navigationSlider">
        <button className="next" onClick={nextImg}></button>
        <button className="prev" onClick={prevImg}></button>
        </div>
       </div>
    )
}