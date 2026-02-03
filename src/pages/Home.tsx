import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'


function Home() {

  const [duttyPressed, setDuttyPressed] = useState(false)

  return (
    <div className='homepage'>
      <div className='main-col'>

         <section className="welcome cloud">
          <h1>Hey there!</h1>
          <h2>~ You're at the location of my future personal site and portfolio! ~</h2>
          <p>The hope is to use this place instead of social media moving forward. All my art will be hosted here as well as blog posts, polls, strawpage-style art form, guestbook, Q&A, etc.</p>
          <p>But don't worry! I'm still going to be posting elsewhere, but linking back here rather than hosting my art <i>there</i>.</p>

          <br/>
          <div className='caution'> <h1>RESS CAUTION WORK IN PROGRESS CAUTION WORK</h1> </div>

        </section>

      </div>

      <div className='right-col'>
        <section className='dutchie cloud'>
          <div className='dutchie-speak'>
            <span>Welcome to my</span>
            <br/>
            <span className='fancy-text'>
              <span>~</span>
              <span>W</span>
              <span>E</span>
              <span>B</span>
              <span>S</span>
              <span>I</span>
              <span>T</span>
              <span>E</span>
              <span>~</span>
            </span>
          </div>
          <img
            src={duttyPressed ? 'images/home/DuttyWelcomeBlush.png' : 'images/home/DuttyWelcomeSmile.png'}
            alt="Dutchie Mills smiling and waving with a speech bubble - when clicked he closes his eyes and blushes."
            onMouseDown={() => setDuttyPressed(true)}
            onMouseUp={() => setDuttyPressed(false)}
            onMouseLeave={() => setDuttyPressed(false)} // Handles dragging off
            className="clickable-dutchie"
          />
        </section>

        <section className='socials cloud'>
          <h1>Socials!</h1>
          <p>
            The gallery here is a work in progress, so in the meantime check out my social below:
            <br/>
            (Content Warning - Socials are 18+)
          </p>
          <div className='socials-bar'>
            <Link to="https://derpibooru.org/search?q=artist%3Avoraciouscutie" target='_blank'>
              <img
                src='images/socials/Derpi.svg'
                alt="Derpibooru logo"
              />
            </Link>

            <Link to="https://www.furaffinity.net/user/voraciouscutie/" target='_blank'>
              <img
                src='images/socials/Furaffinity.svg'
                alt="Furaffinity logo"
              />
            </Link>
            
            <Link to="https://aryion.com/g4/user/VoraciousCutie" target='_blank'>
              <img
                src='images/socials/Ekas.svg'
                alt="Eka's Portal logo"
              />
            </Link>

            <Link to="https://x.com/VoraciousCutie" target='_blank'>
              <img
                src='images/socials/X.svg'
                alt="X or Twitter logo"
              />
            </Link>

            <Link to="https://bsky.app/profile/voraciouscutie.bsky.social" target='_blank'>
              <img
                src='images/socials/Bluesky.svg'
                alt="Bluesky logo"
              />
            </Link>

          </div>
        </section>
      </div>

    </div>
  )
}

export default Home