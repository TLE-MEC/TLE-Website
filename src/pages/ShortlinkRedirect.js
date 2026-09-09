import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getShortlinkDestination } from "../utils/resources";
import { Loader } from "../components";

function ShortlinkRedirect() {
  const { slug } = useParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    async function resolve() {
      const dest = await getShortlinkDestination(slug);
      if (cancelled) return;
      if (dest) {
        if (/^https?:\/\//i.test(dest)) {
          window.location.href = dest;
        } else {
          window.location.replace(dest);
        }
      } else {
        setStatus("missing");
      }
    }
    resolve();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === "loading") return <Loader />;
  return (
    <div style={{ padding: "6rem 2rem", textAlign: "center" }}>
      <h2>Shortlink “{slug}” not found</h2>
      <p>
        <Link to="/events">View all events</Link>
      </p>
    </div>
  );
}

export default ShortlinkRedirect;
