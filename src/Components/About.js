import React from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";


function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is an important Part of A Balanced Diet
            </h1>
            <p className='primary-text'>
                As Foodies, we believe that food plays a crucial role in a healthy lifestyle.
            </p>
            <p className='primary-text'>
                That's why we're committed to offering deliciously crafted, quality ingredients, ensuring your dining experience is not only enjoyable but also nourishing.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillCircleFill/>  Watch Video
                </button>
            </div>
        </div>
    </div>
  );
}

export default About;
