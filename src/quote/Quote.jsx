import { useState, useLayoutEffect, useRef } from 'react';
import './Quote.css';

function Quote() {
  let cardRef = useRef(null);
  const [ visibility, setVisibility ] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if(cardRef.current.getBoundingClientRect().top < 600) {
        setVisibility(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <section id='quote-section' className={`spaced-cover section-content ${visibility ? 'visible-section' : 'hidden-section'}`}>
      <article ref={cardRef}>
        <h1 className='section-header'>Personal Statement</h1>
        <div className='quote-container'>
          <p>Hi there, thank you for visiting my website. Hope you are doing good! My name is Francisco and I am a Software Developer. I have been interested and passionate about computer science since my first year of college. I had the opportunity of working with different technologies as well as being involved in numerous projects, from academia and <i>side-jobs</i>. I have always wanted to learn more and challenge myself to acquire new and deeper skills in different areas of expertise within computer science. Machine Learning, Security, Compilers and Software Design and Development are the topics which are the most appealing to me although I very much enjoy others such as Databases Design, Web Development and Cloud Technologies.</p>
          <p>My goal is to develop and offer the best possible solutions throughout my works so that its users are fully satisfied and that I can at least contribute (even if it is just a tiny contribution) to their hapiness! I occasionally write to <a href=''>Medium</a> and whenever I can I contribute to some open-source projects which might be appealing to you (you can know more about them in the projects section). If you would like to get in touch with me please don't hesitate in contacting me, I would have the greatest pleasure in speaking to you. </p>
          <p>... and that is it! Just wanted to leave some words about me and my passion around computer science! Feel free to explore the rest of this page (feedback is welcome!). Thank you for your attention and be safe &#128516;. </p>
        </div>
        <hgroup>
          <h1><i>"Difficulties mastered</i></h1>
          <h1><i>are opportunities won"</i></h1>
          <h5>- Winston Churchill</h5>
        </hgroup>
      </article>
    </section>
  );
}

export default Quote;