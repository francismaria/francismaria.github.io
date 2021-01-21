import './Home.css'
import profilePic from '../images/github_profile.png'
import CircleImage from '../common/circleImage/CircleImage'

function Home() {
  return (
    <section id='home' className='sectionBackground sectionContents'>
      <div id='topContainer'>
        <CircleImage imagePath={profilePic} alt={'Profile Pic'} width={200} height={200}/>
      </div>
      <div id='bottomContainer'>
        <hgroup>
          <h1>Francisco Maria</h1>
          <h2>Software Developer</h2>
        </hgroup>
      </div>
    </section>
  )
}

export default Home;