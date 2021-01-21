import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
import Home from './home/Home';
import About from './about/About'
import Experience from './experience/Experience'
import Contact from './contact/Contact'
import Menu from './simple/menu/Menu'
import Projects from './simple/projects/Projects'
*/
import Navbar from './luxury/navbar/Navbar';
import Presentation from './luxury/presentation/Presentation';
import About from './luxury/about/About';
import Quote from './luxury/quote/Quote';
import Experience from './luxury/experience/Experience';
import Projects from './luxury/projects/Projects';
import Contact from './luxury/contact/Contact';
import Footer from './luxury/footer/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Presentation />
    <About />
    <Quote />
    <Experience />
    <Projects />
    <Contact />
    <Footer />
    { /*
    <Menu />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
    */ }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
