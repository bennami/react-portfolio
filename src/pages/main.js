import React from "react";
import {IconContext} from "react-icons"
import { FaLinkedin, FaInstagram, FaGithub, FaDribbble} from "react-icons/fa"

import work10 from "../img/work10.png"
import eyes from "../img/eyes.svg"
import arrow from "../img/arrow.svg"
import {Link} from "react-router-dom";
import '../Assets/css/homepage.scss';
import Nav from "../components/nav";
import Footer from "../components/footer";
import Card from "../components/card";

const Main = () =>{

    return(
        <>
            <Nav className={"nav-dark"}/>
            <div className={"container-intro"}>
                <div className={"intro-text"}>
                   <h1>Hi, I'm Imane </h1>
                    <p> I design, code and draw</p>
                  <button className="intro-button"><a href="#footer">Get in touch </a></button>
                  <button className="intro-button"><Link to={"/projects"}>Browse projects </Link></button>
                </div>
                <div className={"intro-social"}>
                       <ul>

                           <li>
                               <a  target="_blank" rel="noopener noreferrer" href={"https://github.com/bennami"}>
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                   <FaGithub/>
                                   </IconContext.Provider>
                               </a>
                           </li>
                           <li><p>Github</p></li>
                       </ul>
                       <ul>
                           <li>
                               <a  target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/imane-benyecif-k-87099073/"}>
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                   <FaLinkedin/>
                                   </IconContext.Provider>
                                </a>
                           </li>
                          <li> <p>Linkedin</p></li>
                       </ul>
                       <ul>
                           <li>
                               <a   target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bennami_/">
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                   <FaInstagram/>
                                   </IconContext.Provider>
                               </a>
                           </li>
                          <li> <p>Instagram</p></li>
                       </ul>
                       <ul>
                           <li>
                               <a   target="_blank" rel="noopener noreferrer" href="https://dribbble.com/bennami">
                                   <IconContext.Provider value={{ style: {fontSize: '25px', color: "black"}}}>
                                       <FaDribbble/>
                                   </IconContext.Provider>
                               </a>
                           </li>
                           <li> <p>Dribble</p></li>
                       </ul>
                   </div>
               </div>

            <main>
                <section className="services">
                    <div className="service-container1">
                        <div className={"cards"}>
                        <Card projectName={"weather app"}
                              projectDescription={" a beautifully designed site to get the weather for the upcoming 5 days"}
                              projectLink={"https://bennami.github.io/weather-API/"}
                            />
                        <Card projectName={"Poke-dex"}
                              projectDescription={"The classic poke-dex from the pokemon series in a web app! browse through the entire library of pokemon thanks to the PokeApi"}
                              projectLink={"https://bennami.github.io/weather-API/"}
                        />
                        <Card projectName={"Movie DB"}
                              projectDescription={"This websites features a movie Api that lets you browse through a huge library of movies"}
                              projectLink={"https://bennami.github.io/Movie-browse/#/"}
                        />
                        </div>
                    </div>

                    <div className="service-container2"  id={"about"}>
                        <div className="service-description">
                            <div className={"text"}>Hi! My name is Imane. I am an upcoming web developer and graphic designer. I graduated in 2017 from Saint Lucas Antwerp (as a graphic designer). Since then, I went on and acquired a second degree in Art education and I am currently enrolled in a super intense web development course. My work is a combination of analogue and digital  tools, as well as socially relevant topics. I love to work on projects that involve different mediums such as analogue printing and new digital tools. Right now I am focusing on front end frameworks such as React JS, but I have worked with Symfony PHP for back end projects, MySQL and many more. <span>
                                <Link to={"/projects"}>
                                    Check out some of my work!
                                </Link>
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className="service-container3">
                        <div className="service-img">
                        </div>
                        <div className="service-description">
                            <p className={"bigP"}>I would love to work on your exciting projects!</p>
                            <p>drop me a <Link to={"/contact"}>line</Link> and let's have a coffee :)</p>
                        </div>
                    </div>
                </section>
            </main>
           <Footer/>
        </>
    )

};

export default Main;
