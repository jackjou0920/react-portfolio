import React, { Component } from 'react';
import LineIcon from 'react-lineicons';
import Counter from './counter';
import $ from 'jquery';
import '.././App.css';

class About extends Component  {
    componentDidMount() {
        if($('.progress-line').length){
            $('.progress-line').each(function( index ) {
                var el = $(this);
                var percent = el.data('width');
                console.log(el)
                console.log(percent)
                $(el).css('width', percent+'%').animate({width: percent + "%"}, 1500);
            });
        }
    }

    render() {
        return (
            <section id="about" className="about-area pt-125 pb-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="title">About Me</h2>
                                <p>Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis leo.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50">
                                <h5 className="about-title">Hi There! I'm Mark Parker</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <ul className="clearfix">
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <LineIcon className="lni lni-calendar"/>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Date of birth:</span> 20 Sep. 1995</p>
                                            </div>
                                        </div> 
                                    </li>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <LineIcon className="lni lni-envelope"/>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Email:</span> jackjou0920@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <LineIcon className="lni lni-phone"/>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Phone:</span> +886-961282505</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-info d-flex align-items-center">
                                            <div className="info-icon">
                                                <LineIcon className="lni lni-map-marker"/>
                                            </div>
                                            <div className="info-text">
                                                <p><span>Location:</span> New Taipei, Taiwan</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                
                        <div className="col-xl-5 offset-xl-1 col-lg-6">
                            <div className="about-skills pt-25">
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Machine Learning / Deep Learning</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <Counter end={70}/>
                                            </div>

                                            {/* <div class="count-box counted">
                                                <span class="counter">70</span>
                                            </div>
                                            % */}
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="70"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Python</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <Counter end={90}/>
                                            </div>

                                            {/* <div class="count-box counted">
                                                <span class="counter">90</span>
                                            </div>
                                            % */}
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="90"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Java / C</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <Counter end={80}/>
                                            </div>

                                            {/* <div class="count-box counted">
                                                <span class="counter">80</span>
                                            </div>
                                            % */}
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="80"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill-item mt-25">
                                    <div className="skill-header">
                                        <h6 className="skill-title">Web Development</h6>
                                        <div className="skill-percentage">
                                            <div className="count-box counted">
                                                <Counter end={60}/>
                                            </div>

                                            {/* <div class="count-box counted">
                                                <span class="counter">60</span>
                                            </div>
                                            % */}
                                        </div>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="bar-inner">
                                            <div className="bar progress-line" data-width="60"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;