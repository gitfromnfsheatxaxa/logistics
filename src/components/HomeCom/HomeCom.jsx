import React, { useEffect, useState } from "react";
import "./HomeCom.css";

const HomeCom = () => {
    const [bgLoaded, setBgLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => setBgLoaded(true);
        window.addEventListener("load", handleLoad);

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <div className="header-img loaded">
            <div className="header-linear"></div>
        </div>
    );
};

export default HomeCom;
