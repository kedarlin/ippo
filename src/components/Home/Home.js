import React, { useRef, useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    
    const sliderRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (sliderRef.current && sliderRef.current.firstChild) {
            setCardWidth(sliderRef.current.firstChild.clientWidth);
        }
    }, []);
    const handleScrollLeft = () => {
        const newPosition = Math.max(scrollPosition - cardWidth, 0);
        setScrollPosition(newPosition);
        sliderRef.current.scrollLeft = newPosition;
    };
    
    const handleScrollRight = () => {
        if (sliderRef.current) {
            const scrollableWidth = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
            const newPosition = Math.min(scrollPosition + cardWidth, scrollableWidth);
            setScrollPosition(newPosition);
            sliderRef.current.scrollLeft = newPosition;
        }
    };


    return (
        <div className='home-main'>
            <Navbar />
            <div className='home-content'>
                <div className='home-top'>
                    <div className='home-title'>
                        Popular Topics🔥
                    </div>
                    <div style={{display: "flex"}}>
                        <div onClick={handleScrollLeft} className='home-icons'><FaArrowLeft /></div>
                        <div onClick={handleScrollRight} className='home-icons'><FaArrowRight /></div>
                    </div>
                </div>
                <div ref={sliderRef} className='home-slider' style={{ scrollBehavior: 'smooth', scrollLeft: scrollPosition }}>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                    <div className='home-card'>
                        <div className='home-sub'>
                            <img src='/Assets/rocket.png' alt='home-img' className='card-img'/>
                            <div className='home-card-cont'>
                                <div className='home-card-title'>Introduction to Rocket Science</div>
                                <div className='home-card-desc'>Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals,design, construction, operation and</div>
                            </div>
                        </div>
                        <div className='home-read'>READ</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home