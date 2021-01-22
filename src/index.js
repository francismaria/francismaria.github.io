import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar/Navbar';
import Presentation from './presentation/Presentation';
import About from './about/About';
import Quote from './quote/Quote';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
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
