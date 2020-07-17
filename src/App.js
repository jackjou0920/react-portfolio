import React, { Component } from 'react';
import LineIcon from 'react-lineicons';
import $ from 'jquery';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Timeline from './components/timeline';
import Travelling from './components/travelling';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.addEventListener('load', this.preloading);
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() { 
    window.removeEventListener('load', this.preloading);
    window.removeEventListener('scroll', this.handleScroll);
  }

  preloading = () => {
    $('.preloader').delay(300).fadeOut(500);
  }

  handleScroll = () => {
    if($(window).scrollTop() > 600){
      $('.back-to-top').fadeIn(200)
    } else{
      $('.back-to-top').fadeOut(200)
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div>
        <div className="preloader">
          <div className="loader_34">
            <div className="ytp-spinner">
              <div className="ytp-spinner-container">
                <div className="ytp-spinner-rotator">
                  <div className="ytp-spinner-left">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                  <div className="ytp-spinner-right">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <header id="home" className="header-area">
          <Header/>
          <Home/>
        </header>
      
        <About/>
        <Timeline/>
        <Travelling/>
        <Projects/>
        <Contact/>
        <Footer/>

        <div className="back-to-top" onClick={this.scrollToTop}><LineIcon className="lni lni-chevron-up"/></div>
      </div>
    );
  }
}

export default App;
