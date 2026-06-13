import "./Hero.css"

import profile from "../assets/profile.jpg"

import {

motion

}

from "framer-motion"

function Hero(){

return(

<section className="hero">

<div className="hero-grid">

<div className="hero-left">

<motion.p

initial={{opacity:0,y:30}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

className="intro"

>

Hi, I'm

</motion.p>

<motion.h1

initial={{opacity:0,x:-50}}

animate={{opacity:1,x:0}}

transition={{duration:.9}}

>

Saloni Verma

</motion.h1>

<motion.h2

initial={{opacity:0}}

animate={{opacity:1}}

transition={{delay:.4}}

>

Web Developer &
UI/UX Enthusiast

</motion.h2>

<p>
Building responsive websites, user-focused digital experiences, and modern web solutions through development, design, and creative problem-solving.
</p>

<div className="hero-buttons">

<button>

View Projects

</button>

<a href="#resume">

Resume

</a>

</div>

</div>

<div className="hero-right">

<div className="profile-glow">

<img

src={profile}

alt="profile"

/>

</div>

</div>

</div>

</section>

)

}

export default Hero;