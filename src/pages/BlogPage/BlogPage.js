import React from 'react'
import './BlogPage.css'
import blogPage_ellipse1 from '../../assets/svg/ellipse1.svg'
import blogPage_ellipse2 from "../../assets/svg/ellipse1.svg";
import blogPage_circle from "../../assets/svg/landing_circle.svg";



const BlogPage = () => {
  return (
    <div>BlogPage
   
        <img src={blogPage_ellipse1} className="blogPage_first_ellipse" alt="" />
        <img src={blogPage_circle} alt="" className="blogPage_circle" />
        <img src={blogPage_ellipse2} alt="" className="blogPage_second_ellipse" />
    </div>
  )
}

export default BlogPage