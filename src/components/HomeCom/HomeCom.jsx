import React from 'react';
import "./HomeCom.css"
import {Link} from "react-router-dom";

const HomeCom = () => {
    return (
        <div className="header-backround">
            <div className="header-linear">
                <div className="header-text">
                    <h1>
                        Your Gateway
                        to any Destination in the World
                    </h1>
                    <p>
                        In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula
                        ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus
                        lectus.
                    </p>
                    <Link to="/about">
                        <button>
                            Explore new
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCom;