import React, { useEffect } from "react";
import "./HomeCom.css";

const HomeCom = () => {
    useEffect(() => {
        // Lazy load background image on window load
        window.addEventListener("load", () => {
            const headerImg = document.querySelector(".header-img");
            if (headerImg) {
                headerImg.classList.add("loaded");
            }
        });

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("load", () => {
                const headerImg = document.querySelector(".header-img");
                if (headerImg) {
                    headerImg.classList.remove("loaded");
                }
            });
        };
    }, []);

    return (
        <div className="header-img">
            <div className="header-linear"></div>
            <div className="header-text">
            </div>
        </div>
    );
};

export default HomeCom;
