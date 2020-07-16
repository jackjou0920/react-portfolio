import React, { Component } from 'react';
import $ from 'jquery';
import logo from '../images/logo.png'
import '.././App.css';

class Header extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        var scroll = $(window).scrollTop();
        // Sticky
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
        // Section Menu Active
        $('.page-scroll').each(function() {
            var sectionOffset = $(this.hash).offset().top - 70;
            if ( sectionOffset <= scroll ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    }

    toggle = () => {
        $(".navbar-toggler").toggleClass('active');
    }

    mobileMenu = () => {
        console.log("11234567890")
        // $(".navbar-toggler").removeClass('active');
        // $(".navbar-collapse").removeClass("show");
    }

    render() {
        return ( 
            <div className="navigation fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="index.html">
                                    <img src={logo} alt="Logo"/>
                                </a>
                                <button className="navbar-toggler" type="button" onClick={this.toggle} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                    <span className="toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto" >
                                        <li className="nav-item active"><a className="page-scroll" onClick={this.mobileMenu.bind(this)} href="#home" >Home</a></li>
                                        <li className="nav-item"><a className="page-scroll" onclick={this.mobileMenu.bind(this)} href="#about">About</a></li>
                                        <li className="nav-item"><a className="page-scroll" onclick={this.mobileMenu.bind(this)} href="#skills">Skills</a></li>
                                        <li className="nav-item"><a className="page-scroll" onclick={this.mobileMenu.bind(this)} href="#projects">Projects</a></li>
                                        <li className="nav-item"><a className="page-scroll" onclick={this.mobileMenu.bind(this)} href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Header;