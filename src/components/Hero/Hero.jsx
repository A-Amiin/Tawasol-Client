import React from 'react'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <>
            <section className="hero-sec">
                <video autoPlay muted loop className="bg-video">
                    <source src="./Videos/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <div className="hero-content">
                        <h1>No noise, just meaningful discussions in your area of expertise!</h1>
                        <p className="d-lg-block d-none">
                            Tawasol is not just another social platform—it's where real conversations happen. Here,
                            every discussion is focused, every profile has a purpose, and every voice matters.
                            Whether you're an engineer, a designer, a thinker, or a creator, you'll find your space,
                            your people, and your discussions. Join a network where knowledge meets connection, and
                            let your expertise shine.
                        </p>
                        <Link className="btn cta-button fw-bold px-3 py-2 fs-6" to="/JoinUs"><span>Be Part of the Discussion</span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero