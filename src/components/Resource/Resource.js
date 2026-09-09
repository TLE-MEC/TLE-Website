import React, { useEffect, useState } from "react";
import "./Resource.css";
import { BiLinkExternal } from "react-icons/bi";
import { FaFilePdf } from "react-icons/fa";
import AOS from "aos";

import { getResources } from "../../utils/resources";

import res_ellipse_circle from "../../assets/svg/about_ellipse_circle.svg";
import books from "../../assets/svg/books.svg";

function Resource() {
  AOS.init({
    duration: 800,
  });

  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchResources() {
      try {
        const list = await getResources();
        if (!cancelled) setResources(list);
      } catch (error) {
        console.error("Failed to load resources:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchResources();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="resources" id="resources">
      <img src={res_ellipse_circle} alt="" className="res_ellipse_circle" />
      <div className="resources_container">
        <h1 className="section__header">RESOURCES</h1>

        <p className="section__text">
          Here are some resources we&apos;ve made specifically to guide you in your
          learning, updated every couple of months. Let us know what else
          you&apos;d like to see here!
        </p>
        <div className="resources__div">
          {loading ? (
            <p className="section__text">Loading resources…</p>
          ) : (
            resources.map((res) => {
              const href = res.url || res.driveUrl || "";
              if (!href) return null;
              const isPdf =
                href.toLowerCase().includes(".pdf") ||
                href.toLowerCase().includes("drive.google");
              return (
                <div data-aos="slide-up" className="resources__card" key={res.id}>
                  <div className="resources__card__left">
                    <img
                      src={books}
                      alt=""
                      className="resources__card__img"
                      width="600"
                    />
                  </div>
                  <div className="resources__card__right">
                    <h4>{res.name}</h4>
                    <p>{res.desc}</p>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="resourceCard__btn"
                    >
                      {isPdf ? (
                        <>
                          Report <FaFilePdf size={20} />
                        </>
                      ) : (
                        <>
                          Open <BiLinkExternal size={22} />
                        </>
                      )}
                    </a>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Resource;
