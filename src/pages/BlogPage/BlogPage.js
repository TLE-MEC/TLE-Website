import React, { useEffect } from "react";
import "./BlogPage.css";
import blogPage_ellipse1 from "../../assets/svg/ellipse1.svg";
import blogPage_ellipse2 from "../../assets/svg/ellipse1.svg";
import blogPage_circle from "../../assets/svg/landing_circle.svg";
import blogPage_ellipse3 from "../../assets/svg/ellipse_inner.svg";
// import blogimg from "../../assets/png/blogimg.png";
import { BsClock } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
// import { SlEye } from "react-icons/sl";
// import { BiLike } from "react-icons/bi";
import CustomTitle from "../../utils/CustomTitle";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebase";
import { Loader } from "../../components";

const BlogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = React.useState();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    getBlogById(id);
  }, [id]);
  const getBlogById = async (id) => {
    const querySnapshot = await getDoc(doc(db, "blogs", id));
    const data = querySnapshot.data();
    setBlog(data);
    setLoading(false);
  };
  if (loading) return <Loader />;
  return (
    <div id="blogpage">
      <CustomTitle title={blog.title}/>
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
      <div className="parent_container">
        <div className="mobile_view_heading">
          <div className="samplediv">
            <img src={blog.cover} alt="" className="smallimg" />
          </div>
          <div className="blog_title_mobile">
              <h1>{blog.title}</h1>
              <h2>By {blog.author}</h2>
              <h3>{blog.date}</h3>
              <h4>
                {blog.tags.map((tag, index) => {
                  return (
                    <span key={index}>
                      {tag} {index !== blog.tags.length - 1 && " | "}
                    </span>
                  );
                })}
              </h4>
            </div>
            <div className="sampleicon"><div className="icon_name">
                <BsClock className="icon_small" /><p>{blog.min} min read</p>
              </div>
              <div className="icon_name">
                <FaPenNib className="icon_small" /><p>{blog.words} words</p>
              </div></div>
        </div>
        <div className="blog__contentbox">
        <div className="sidebox">
          <div>
            <img src={blog.cover} alt="" className="smallimg" />
          </div>
          <div className="topics">
            <div className="topic">
              <h4>
                <a href="#topic1">
                  {blog?.introtitle}
                </a>
              </h4>
            </div>
            <div className="topic">
              <h4>
                <a href="#topic2">{blog?.bodytitle}</a>
              </h4>
            </div>
            <div className="topic">
              <h4>
                <a href="#topic3">{blog?.conclusiontitle}</a>
              </h4>
            </div>
          </div>
        </div>
        <div className="mainbox">
          <div className="title_content">
            <div className="icons_small">
              <div className="icon_name">
                <BsClock className="icon_small" /><p>{blog.min} min read</p>
              </div>
              <div className="icon_name">
                <FaPenNib className="icon_small" /><p>{blog.words} words</p>
              </div>
              {/* <div className="icon_name">
                  <SlEye className="icon_small" /> 15 views
                </div>
                <div className="icon_name">
                  <BiLike className="icon_small" /> 25 likes
              </div> */}
            </div>
            <div className="blog_title">
              <h1>{blog.title}</h1>
              <h2>By {blog.author}</h2>
              <h3>{blog.date}</h3>
              <h4>
                {blog.tags.map((tag, index) => {
                  return (
                    <span key={index}>
                      {tag} {index !== blog.tags.length - 1 && " | "}
                    </span>
                  );
                })}
              </h4>
            </div>
          </div>
          <div className="content_blog">
            <h4 id="topic1">{blog.introtitle}</h4>
            <br />
            <img src={blog.img1} alt="" className="blogimg" />
            <p className="para_content">
              <br />
              {blog.introcontent}
            </p>
            <br />
            <h4 id="topic2">{blog.bodytitle}</h4>
            <br />
            <img src={blog.img2} alt="" className="blogimg" />
            <p className="para_content">
              <br />
              {blog.maincontent}
            </p>
            <br />
            <h4 id="topic3">{blog.conclusiontitle}</h4>
            <br />
            <img src={blog.img3} alt="" className="blogimg" />
            <p className="para_content">
              <br />
              {blog.conclusioncontent}
              <br/>
            </p>
            <br />
            <h4 id="topic2">Resources</h4>
            <br/>
            <ul className="para_content">
                <li><a style={{textDecoration:'none'}} target="_blank" rel="noreferrer" href="https://www.reddit.com/r/learnprogramming/comments/l0ipjo/list_of_various_programming_resources_i_gathered/">List of programming resources</a></li>
                <li><a style={{textDecoration:'none'}} target="_blank" rel="noreferrer" href="https://youtu.be/jjqgP9dpD1k">Computational Thinking</a></li>
            </ul>
          </div>
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
