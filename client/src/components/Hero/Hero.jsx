import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <section className='container hero-wrapper'>
                <div className='paddings innerWidth hero-container'>
                    <h1>
                        Make Your Business More
                        <br />
                        <span className='heading_1'>Powerful With Puzzle</span>
                    </h1>

                    <h3>Business In Africa Can Be, Tough, We Make It Easy</h3>

                    <div className='business_community'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe_wpm09k2uTQ2X_-ADw5R_joers34JnQVHTLzJ61QhcqVTjw/viewform'>
                            <img
                                src='./img/Launch Your Business hero.png'
                                alt='logo'
                                width={200}
                                className="button"
                            />
                        </a>

                        <a href='https://whatsapp.com/channel/0029Va62eDxFHWq3nhQP831X'>
                            <img
                                src='./img/Join Community.png'
                                alt='logo'
                                width={200}
                                className="button"
                            />
                        </a>
                    </div>
                    <div className='business_community_mobile'>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe_wpm09k2uTQ2X_-ADw5R_joers34JnQVHTLzJ61QhcqVTjw/viewform'>
                            <img
                                src='./img/Launch Your Business hero.png'
                                alt='logo'
                                width={150}
                                className="button"
                            />
                        </a>

                        <a href='https://whatsapp.com/channel/0029Va62eDxFHWq3nhQP831X'>
                            <img
                                src='./img/Join Community.png'
                                alt='logo'
                                width={150}
                                className="button"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* Youtube video */}
            <div className='youtube_container'>
                <iframe
                    width={560}
                    height='315'
                    src='https://www.youtube.com/embed/frIkqkshgx8?si=VbBCLbfP5fJdnjN2'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                ></iframe>
            </div>

            {/* Youtube video fold */}
            <div className='youtube_container_fold'>
                <iframe
                    width={260}
                    height={156}
                    src='https://www.youtube.com/embed/frIkqkshgx8?si=VbBCLbfP5fJdnjN2'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Hero;
