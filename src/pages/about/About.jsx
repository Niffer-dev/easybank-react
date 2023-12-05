import {useState} from 'react'
import eicon1 from "../../assets/eicon1.svg"
import eicon2 from "../../assets/eicon2.svg"
import eicon3 from "../../assets/eicon3.svg"
import eicon4 from "../../assets/eicon4.svg"
import AboutCard from "../../componnts/aboutCardComponent/AboutCard"

const About = () => {

    const [myName, setMyName] = useState("")

    const aboutArray = [
        {
            img:eicon1,
            title:"Online Banking",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            img:eicon2,
            title:"Simple budgeting",
            desc:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
        },
        {
            img:eicon3,
            title:"Fast Onboarding",
            desc:"Our modern web apps allow you to keep track of your finances wherever you are in the world."
        },
        {
            img:eicon4,
            title:"Open AI",
            desc:"Mobile applications allow you to keep track of your finances wherever you are in the world."
        }
    ]

    return (
    <section className="about">
        <div className="about-header">
            <h1>Why choose Easybanking?</h1>
            <p>We leaverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>

        <div className="about-body">
            {aboutArray.map((card) => (
                <AboutCard card={card}/>
            ))}
            
        </div>
    </section>

    )
}

export default About