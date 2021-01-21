import './Contact.css'

function Contact() {
  return (
    <section id='contact' className='sectionBackground'>
      <section className='sectionContents'>
        <h2>Contacts</h2>
        <div id='contactContainer'>
          <div id='linksContainer'>
            <h4>Location</h4>
            <div className='contactLink'>
              <i className="fas fa-map-marker-alt"></i>
              <p>Vila Real, Portugal</p>
            </div>
            <h4>Social</h4>
            <div className='contactLink'>
              <i className="fab fa-linkedin"></i>
              <a href='#'>LinkedIn</a>
            </div>
            <div className='contactLink'>
              <i className='fab fa-github-square'></i>
              <a href='#'>Github</a>
            </div>
            <div className='contactLink'>
              <i className="fas fa-envelope-square"></i>
              <a href='#'>franciscomaria97@hotmail.com</a>
            </div>
          </div>
          <form id='contactFormContainer' method='GET' action='mailto:franciscomaria97@hotmail.com' encType='text/plain' className='flexColumn'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' id='subject' name='subject' placeholder='Subject' required/>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='body' placeholder='Write your message here...' rows='10' cols='5' required/>
            <input type='submit' value='Send Email' className='submitBtn' />
          </form>
        </div>
        <footer>
          <p>This website was created by me using the <a href='https://reactjs.org/'>React</a> framework.</p>
          <p>&copy; Francisco Maria, 2020</p>
        </footer>
      </section>
    </section>
  )
}

export default Contact;