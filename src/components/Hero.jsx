import profile from "../assets/profile.jpg"

function Hero(){

return(

<section className="hero">

<div className="hero-text">

<h1>

Saloni Verma

</h1>

<h2>

Frontend Developer

</h2>

<p>

Building beautiful modern web experiences with React

</p>

<a
href="#projects"
className="btn"
>

View Projects

</a>

</div>

<div className="hero-image">

<img
src={profile}
/>

</div>

</section>

)

}

export default Hero;