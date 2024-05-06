import React from 'react'
import Navbar from '../navbar/Navbar'

const Home = () => {
    return (
        <div className='home-main'>
            <Navbar />
            <div className='home-content'>
                <div className='home-top'>
                    <div className='home-title'>
                        Popular Topics🔥
                    </div>
                    <>Hola</>
                    <>amigos</>
                </div>
                <div className='home-slider'>
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