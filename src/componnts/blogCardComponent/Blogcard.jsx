import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = ({blog}) => {
  return (
    <div>
        <img src={blog.img} alt="" width="260px" height="200px"/>
        <div className="blogContent">
            <h4>{blog.title}</h4>
            <Link to="/">{blog.link}</Link>
            <p>{blog.desc}</p>
        </div>
    </div>
  )
}

export default Blogcard