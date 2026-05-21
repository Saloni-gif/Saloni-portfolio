function Skills(){

const skills=[

"HTML",
"CSS",
"JavaScript",
"React",
"Git",
"Responsive Design"

]

return(

<section
id="skills"
>

<h2 className="title">

Skills

</h2>

<div className="skills-grid">

{

skills.map((skill)=>(

<div
className="skill-card"
key={skill}
>

{skill}

</div>

))

}

</div>

</section>

)

}

export default Skills;