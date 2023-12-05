import React from 'react'

const AboutCard = ({card}) => {
  return (
    <div>
        <div data-aos="fade-up">
            <img src={card.img} alt="" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
        </div>
    </div>
  )
}

export default AboutCard