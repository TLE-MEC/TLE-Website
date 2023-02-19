import React, { useEffect, useState } from "react";
import "./BlogListPage.css";
import blogPage_ellipse1 from "../../assets/svg/ellipse1.svg";
import blogPage_ellipse2 from "../../assets/svg/ellipse1.svg";
import blogPage_circle from "../../assets/svg/landing_circle.svg";
import blogPage_ellipse3 from "../../assets/svg/ellipse_inner.svg";
// import pic1 from "../../assets/png/pic1.jpg";
import { BsClock } from "react-icons/bs";
import { FaPenNib } from "react-icons/fa";
// import { SlEye } from "react-icons/sl";
// import { BiLike } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import CustomTitle from "../../utils/CustomTitle";
import { getDocs, collection } from "firebase/firestore";
import db from "../../utils/firebase";
import { Loader } from "../../components";

const BlogListPage = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  async function getBlogs() {
    let temp = [];
    const querySnapshot = await getDocs(collection(db, "blogs"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setBlogs(temp);
    console.log(temp);
    setLoading(false);
  }
  useEffect(() => {
    getBlogs();
  }, []);
  if (loading) return <Loader />;
  return (
    <div id="container">
      <CustomTitle title="Blogs" />
      <FiArrowLeft
        onClick={() => {
          navigate("/");
        }}
        className="goBack"
      />
      <img src={blogPage_ellipse1} className="blogPage_first_ellipse" alt="" />
      <img src={blogPage_circle} alt="" className="blogPage_circle" />
      <img src={blogPage_ellipse2} alt="" className="blogPage_second_ellipse" />
      <h1 className="heading">BLOGS</h1>
      <div className="blog_card-components">
        {blogs.map((blog, index) => {
          return (
            <div className="card" key={index}>
              <div className="img">
                <img className="pic" src={blog.cover} alt=""></img>
              </div>
              <div className="content">
                <div className="dsa_icons">
                  <div className="dsa">
                    {blog.tags.map((tag, index) => {
                      return (
                        <span key={index}>
                          {tag} {index !== blog.tags.length - 1 && " | "}
                        </span>
                      );
                    })}
                  </div>
                  <div className="icons">
                    <div className="icon">
                      <BsClock /> {blog.min} min read
                    </div>
                    <div className="icon">
                      <FaPenNib /> {blog.words} words{" "}
                    </div>
                    {/* <div className="icon">
                      <SlEye /> 15 Views
                    </div>
                    <div className="icon">
                      <BiLike />
                      25 Likes
                    </div> */}
                  </div>
                </div>
                <p className="title">{blog.title}</p>
                <div className="author_date">
                  <div className="author">By {blog.author}</div>
                  <div>{blog.date}</div>
                </div>
                <div className="content_info">
                  <p className="details">
                    {" "}
                    {blog.introcontent.length < 200
                      ? blog.introcontent
                      : blog.introcontent.substring(0, 200)}
                    <Link to="/blogpage" className="readmore">
                      {" "}
                      read more....
                    </Link>
                  </p>
                </div>
              </div>
              <img
                src={blogPage_ellipse3}
                alt=""
                className="blogPage_ellipse3"
              />
            </div>
          );
        })}

        {/* <div className="card">
          <div className="img">
            <img className="pic" src={pic1} alt=""></img>
          </div>
          <div className="content">
            <div className="dsa_icons">
              <div className="dsa"> DSA | programming | technology </div>
              <div className="icons">
                <div className="icon">
                  <BsClock /> 2 min read
                </div>
                <div className="icon">
                  <FaPenNib /> 208 words{" "}
                </div>
                <div className="icon">
                  <SlEye /> 15 Views
                </div>
                <div className="icon">
                  <BiLike />
                  25 Likes
                </div>
              </div>
            </div>
            <p className="title">Title</p>
            <div className="author_date">
              <div className="author">By Author name </div>
              <div> 20 May 2022</div>
            </div>
            <div className="content_info">
              <p className="details">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis hendrerit proin mattis fusce. Adipiscing integer
                ornare id nisl elit, elit. Diam aliquam sit pellentesque odio
                venenatis nisl matti
                <Link to="/blogpage" className="readmore">
                  {" "}
                  read more....
                </Link>
              </p>
            </div>
          </div>
          <img src={blogPage_ellipse3} alt="" className="blogPage_ellipse3" />
        </div> */}

        {/* <div className="card">
          <div className="img">
            <img className="pic" src={pic1} alt=""></img>
          </div>
          <div className="content">
            <div className="dsa_icons">
              <div className="dsa"> DSA | programming | technology </div>
              <div className="icons">
                <div className="icon">
                  <BsClock /> 2 min read
                </div>
                <div className="icon">
                  <FaPenNib /> 208 words{" "}
                </div>
                <div className="icon">
                  <SlEye /> 15 Views
                </div>
                <div className="icon">
                  <BiLike />
                  25 Likes
                </div>
              </div>
            </div>
            <p className="title">Title</p>
            <div className="author_date">
              <div className="author">By Author name </div>
              <div> 20 May 2022</div>
            </div>
            <div className="content_info">
              <p className="details">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis hendrerit proin mattis fusce. Adipiscing integer
                ornare id nisl elit, elit. Diam aliquam sit pellentesque odio
                venenatis nisl matti
                <Link to="/blogpage" className="readmore">
                  {" "}
                  read more....
                </Link>
              </p>
            </div>
          </div>
          <img src={blogPage_ellipse3} alt="" className="blogPage_ellipse3" />
        </div> */}
      </div>
    </div>
  );
};
export default BlogListPage;
