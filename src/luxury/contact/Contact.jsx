import './Contact.css';

function Contact() {
  return (
    <section id='contact-section' className='section-content'>
      <h1 className='section-header'>Contact</h1>
      <form id='contact-form' method='GET' action='mailto:franciscomaria97@hotmail.com' encType='text/plain'>
        <input type='text' id='subject' name='subject' placeholder='Subject' required/>
        <textarea id='message' name='body' placeholder='Write your message here...' rows='10' cols='5' required/>
        <input type='submit' value='Send Email' className='submit-btn' />
      </form>
    </section>
  );
}

export default Contact;