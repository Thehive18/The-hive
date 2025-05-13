"use client";

import { useEffect, useState } from "react";
import "./Loader.css";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${loading ? "active" : "fade-out"}`}>
      <div className="loader-circle"></div>
    </div>
  );
}

export default Loader;
