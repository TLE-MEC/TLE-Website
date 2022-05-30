import React from "react";
import HashLoader from "react-spinners/HashLoader";

import './Loader.css'

function Loader() {
  return (
    <div className="loader">
      <HashLoader color="#0B8B8B" loading={true} size={150} />
    </div>
  )
}

export default Loader