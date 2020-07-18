import React, { Component } from 'react';
import LineIcon from 'react-lineicons';
import portfolio from '../images/portfolio.png'
import w1 from '../images/w-1.jpg'
import '.././App.css';

const imageSrc = [portfolio, w1]

class Home extends Component {
    state = {index: 0}
    setImageIndex = () =>{
        if (this.state.index === imageSrc.length-1) {
            this.setState(state => ({ index: 0 }))
        } else {
            this.setState(state => ({ index: state.index+1 }))
        }
    }
    getImageIndex = () => this.state.index;
    
    render() {
        const idx = this.getImageIndex();
        return (
            <div id="bg" className="header-content d-flex align-items-center">            
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="header-content-right">
                                <h4 className="sub-title">Hello, I’m</h4>
                                <h1 className="title">Dan-Haur Jou</h1>
                                <p>A Research & Development Engineer</p>
                                <a className="main-btn" href="!#" onClick={this.setImageIndex}>Download CV</a>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-6">
                            <div className="header-image d-none d-lg-block">
                                <img src={imageSrc[idx]} alt="portfolio"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-social">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-social-icon">
                                    <ul>
                                        <li><a href="!#" onClick={this.mobileMenu}><LineIcon className="lni lni-facebook-filled"/></a></li>
                                        <li><a href="!#"><LineIcon className="lni lni-instagram-original"/></a></li>
                                        <li><a href="!#"><LineIcon className="lni lni-linkedin-original"/></a></li>
                                        <li><a href="!#"><LineIcon className="lni lni-github-original"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;