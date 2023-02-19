import React from "react";
import "./BlogPage.css";
import blogPage_ellipse1 from "../../assets/svg/ellipse1.svg";
import blogPage_ellipse2 from "../../assets/svg/ellipse1.svg";
import blogPage_circle from "../../assets/svg/landing_circle.svg";
import blogPage_ellipse3 from "../../assets/svg/ellipse_inner.svg";
import blogimg from "../../assets/png/blogimg.png";
import { BsClock } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
import { SlEye } from "react-icons/sl";
import { BiLike } from "react-icons/bi";
import CustomTitle from "../../utils/CustomTitle";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div id="blogpage">
      <CustomTitle title="Name" />
      <FiArrowLeft
        onClick={() => {
          navigate("/blogs");
        }}
        className="goBack"
      />
      <h1 className="bloghead">BLOGS</h1>

      <img src={blogPage_ellipse1} alt="" className="blogPage_first_ellipse" />
      <img src={blogPage_circle} alt="" className="blogPage_circle" />
      <img src={blogPage_ellipse2} alt="" className="blogPage_second_ellipse" />
      <div className="blog__contentbox">
        <div className="sidebox">
          <div>
            <img src={blogimg} alt="" className="smallimg" />
          </div>
          <div className="topics">
            <div className="topic">
              <h4>
                <a href="#topic1">Topic 1 -{">"} beginning </a>
              </h4>
            </div>
            <div className="topic">
              <h4>
                <a href="#topic2">Topic 2</a>
              </h4>
            </div>
            <div className="topic">
              <h4>
                <a href="#topic3">Topic 3</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="mainbox">
          <div className="title_content">
            <div className="blog_title">
              <h1>Title</h1>
              <h2>By author name</h2>
              <h3>20 may 2022</h3>
              <h4>DSA | Programming | Technology</h4>
            </div>
            <div className="icons_small">
              <div className="icon_name">
                <BsClock className="icon_small" /> 2 min read
              </div>
              <div className="icon_name">
                <FaPenNib className="icon_small" /> 208 words
              </div>
              <div className="icon_name">
                <SlEye className="icon_small" /> 15 views
              </div>
              <div className="icon_name">
                <BiLike className="icon_small" /> 25 likes
              </div>
            </div>
          </div>
          <div className="content_blog">
            <p className="para_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              hendrerit proin mattis fusce. Adipiscing integer ornare id nisl
              elit, elit. Diam aliquam sit pellentesque odio venenatis nisl
              matti
            </p>
            <br />
            <h4 id="topic1">Topic 1 - beginning</h4>
            <br />
            <img src={blogimg} alt="" className="blogimg" />
            <p className="para_content">
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              hendrerit proin mattis fusce. Adipiscing integer ornare id nisl
              elit, elit. Diam aliquam sit pellentesque odio venenatis nisl
              matti
            </p>
            <br />
            <h4 id="topic2">Topic 2</h4>
            <h4 id="topic3">Topic 3</h4>
          </div>
        </div>
        <img
          src={blogPage_ellipse3}
          alt=""
          className="blogPage_third_ellipse"
        />
      </div>
    </div>
  );
};

export default BlogPage;
