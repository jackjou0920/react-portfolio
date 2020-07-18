import React, { Component } from 'react';
import LineIcon from 'react-lineicons';
import w1 from '../images/w-1.jpg'
import '.././App.css';

class Projects extends Component {
    render() {
        return (
            <section id="projects" className="project-area pt-125 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title pb-25">
                                <h2 className="title">My Recent Works</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-project text-center mt-30">
                                <div className="project-image">
                                    <img src={w1} alt="project"/>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <h3 className="project-title">Product Design</h3>
                                        <ul>
                                            <li><a className="image-popup" href={w1}><LineIcon className="lni lni-plus"/></a></li>
                                            <li><a href="!#"><LineIcon className="lni lni-link"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-project text-center mt-30">
                                <div className="project-image">
                                    <img src={w1} alt="project"/>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <h3 className="project-title">Product Design</h3>
                                        <ul>
                                            <li><a className="image-popup" href={w1}><LineIcon className="lni lni-plus"/></a></li>
                                            <li><a href="!#"><LineIcon className="lni lni-link"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-project text-center mt-30">
                                <div className="project-image">
                                    <img src={w1} alt="project"/>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <h3 className="project-title">Product Design</h3>
                                        <ul>
                                            <li><a className="image-popup" href={w1}><LineIcon className="lni lni-plus"/></a></li>
                                            <li><a href="!#"><LineIcon className="lni lni-link"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-project text-center mt-30">
                                <div className="project-image">
                                    <img src={w1} alt="project"/>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <h3 className="project-title">Product Design</h3>
                                        <ul>
                                            <li><a className="image-popup" href={w1}><LineIcon className="lni lni-plus"/></a></li>
                                            <li><a href="!#"><LineIcon className="lni lni-link"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-project text-center mt-30">
                                <div className="project-image">
                                    <img src={w1} alt="work"/>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <h3 className="project-title">Product Design</h3>
                                        <ul>
                                            <li><a className="image-popup" href={w1}><LineIcon className="lni lni-plus"/></a></li>
                                            <li><a href="!#"><LineIcon className="lni lni-link"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-project text-center mt-30">
                                <div className="project-image">
                                    <img src={w1} alt="project"/>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-content">
                                        <h3 className="project-title">Product Design</h3>
                                        <ul>
                                            <li><a className="image-popup" href={w1}><LineIcon className="lni lni-plus"/></a></li>
                                            <li><a href="!#"><LineIcon className="lni lni-link"/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-more text-center mt-50">
                                <a className="main-btn" href="!#">more projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;