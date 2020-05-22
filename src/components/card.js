import React from 'react';
import "../Assets/css/card.scss"
import {FaGithub} from "react-icons/all";

import {IconContext} from "react-icons";

function Card({projectName,projectDescription,projectLink,GithubLink}) {

    return(

        <div className={'card'} >
            <div>

                <ul>
                    <li>
                        <a target="_blank" rel="noopener noreferrer"  href={projectLink}>
                            <h3>{projectName}</h3>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer"  href={GithubLink}>
                        <IconContext.Provider value={{ style: {fontSize: '20px',color:"white"}}}>
                            <FaGithub/>
                        </IconContext.Provider>
                        </a>
                    </li>
                </ul>

            </div>

            <h5>{projectDescription}</h5>
        </div>

    )

}

export default Card