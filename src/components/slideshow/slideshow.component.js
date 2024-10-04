import React, {useState} from 'react';
import './slideshow.styles.css';

const Slideshow =()=>{
    const[slideIndex, setSlideIndex]=useState(1);
    const slides=[
        {
            src: "/photos/one.jpg", caption: "Caption One"
        },
        {
            src: "/photos/two.jpg", caption: "Caption Two"
        },
        {
            src: "/photos/three.jpg", caption: "Caption Three"
        }
    ];

    const plusSlide=(n)=>{
        setSlideIndex(
            (prevIndex)=>
                prevIndex+n>slides.length?1 : prevIndex+n<1? slides.length : prevIndex+n
            
        );
    }

    const currentSlide=(n)=>{
        setSlideIndex(n);
    }

    return(
        <div>
        <div className="slideshow-container" >
            {slides.map(
                (slide, index)=>{
                    return(
                            <div
                                className={`mySlides fade ${index+1===slideIndex?"active" : "none"}`}
                                key={index}
                                style={{display: index+1 ===slideIndex? "block" : "none"}}
                                >
                                <div className="numbertext">{index+1}/{slides.length}</div>
                                <img src={slide.src} alt={slide.caption} style={{width:"100%"}} />
                                <div className="text" >{slide.caption}</div>
                            </div>
                    );
                }
            )}
            <a className="prev" onClick={()=> plusSlide(-1)}>❮</a>
            <a className="next" onClick={()=> plusSlide(1)}>❯</a>
            <br/>
            <div style={{textAlign:"center"}}>
                {slides.map((_, index)=>{
                    return(
                            <span className={`dot ${index+1===slideIndex? "active" : ""}`}
                            key={index}
                            onClick={()=>currentSlide(index+1)} ></span>
                    );
                })}
            </div>
        </div>
        </div>
    );
};
export default Slideshow;