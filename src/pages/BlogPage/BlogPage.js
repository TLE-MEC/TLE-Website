import React, { useEffect } from "react";
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
            <img src={blog.cover} alt="" className="smallimg" />
          </div>
          <div
            className="topics"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div className="topic">
              <h4>
                <a href="#topic1">
                  {blog?.introtitle} -{">"} beginning{" "}
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
            <div className="icons_small">
              <div className="icon_name">
                <BsClock className="icon_small" /> {blog.min} min read
              </div>
              <div className="icon_name">
                <FaPenNib className="icon_small" /> {blog.words} words
              </div>
              {/* <div className="icon_name">
                <SlEye className="icon_small" /> 15 views
              </div>
              <div className="icon_name">
                <BiLike className="icon_small" /> 25 likes
              </div> */}
            </div>
          </div>
          <div className="content_blog">
            {/* <p className="para_content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              hendrerit proin mattis fusce. Adipiscing integer ornare id nisl
              elit, elit. Diam aliquam sit pellentesque odio venenatis nisl
              matti
            </p>
            <br /> */}
            <h4
              id="topic1"
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              {blog.introtitle}
            </h4>
            <br />
            <img
              src={blog.img1}
              alt=""
              className="blogimg"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
            <p
              className="para_content"
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              <br />
              {blog.introcontent}
            </p>
            <br />
            <h4
              id="topic2"
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              {blog.bodytitle}
            </h4>
            <br />
            <img
              src={blog.img2}
              alt=""
              className="blogimg"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
            <p
              className="para_content"
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              <br />
              {blog.maincontent}
            </p>
            <br />
            <h4
              id="topic3"
              style={{
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              {blog.conclusiontitle}
            </h4>
            <br />
            <img
              src={blog.img3}
              alt=""
              className="blogimg"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
            <p
              className="para_content"
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              <br />
              {blog.conclusioncontent}
            </p>
            <br />
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
