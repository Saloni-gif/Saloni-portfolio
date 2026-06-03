import "./Skills.css";

import {
 FaHtml5,
 FaCss3Alt,
 FaJs,
 FaReact,
 FaGitAlt,
 FaFigma
} from "react-icons/fa";

function Skills() {

const skills = [

{
icon:<FaHtml5 />,
name:"HTML",
desc:"Semantic and accessible web structures",
level:9
},

{
icon:<FaCss3Alt />,
name:"CSS",
desc:"Responsive layouts and premium UI styling",
level:9
},

{
icon:<FaJs />,
name:"JavaScript",
desc:"Interactive modern frontend development",
level:8
},

{
icon:<FaReact />,
name:"React",
desc:"Component architecture and SPA development",
level:8
},

{
icon:<FaGitAlt />,
name:"Git",
desc:"Version control and collaboration",
level:7
},

{
icon:<FaFigma />,
name:"UI Design",
desc:"Wireframes and visual design systems",
level:7
}

];

return (

<section
id="skills"
className="skills"
>

<h2 className="skills-title">

My Skills

</h2>

<div className="skills-grid">

{skills.map((skill,index)=>(

<div
key={index}
className="skill-card"
>

<div className="skill-top">

<div
className="skill-icon"
>

{skill.icon}

</div>

<div>

<h3>

{skill.name}

</h3>

<p>

{skill.desc}

</p>

</div>

</div>

<div
className="dots"
>

{

[...Array(10)]

.map((_,i)=>(

<span

key={i}

className={
i < skill.level
? "dot active"
: "dot"
}

>

</span>

))

}

</div>

</div>

))

}

</div>

</section>

);

}

export default Skills;