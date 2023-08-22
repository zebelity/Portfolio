import { useEffect, useState } from 'react'
import { getGreeting } from './api'
import './App.css'
import About from 'components/About'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Footer from 'components/Footer'

function App () {
  const [message, setMessage] = useState<string|null>(null)

  const recipientEmail = 'chatkamon_bee@hotmail.com';
  const emailSubject = '';
  const emailBody = '';

  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  useEffect(() => {
    setTimeout(async () => {
      const result = await getGreeting()

      setMessage(result.message)
    }, 500)
  })

  return (
    <>
    <div className='page-wrapper'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <ul>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="https://drive.google.com/file/d/1jwQplm_Z1t6Xvg_4MDp_gwSvaOiL-RN6/view?usp=sharing" target="_blank">Resume</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href={mailtoLink}>Contact me</a></li>
          </ul>
        </div>
        <div className='navbar-right'>
          <ul>
            <li>
              <a className='linkedin-logo' href="https://www.linkedin.com/in/chatkamon-chantaraparsop/" target="_blank">
                <img alt="linkedin" 
                src="https://img.shields.io/badge/LINKEDIN-%23181717?style=for-the-badge&logo=linkedin&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fchatkamon-chantaraparsop%2F" /></a>
            </li>
            <li>
                <a className='github-logo' href="https://github.com/zebelity" target="_blank">
                <img alt="github" 
                src="https://img.shields.io/badge/GITHUB-%23181717?style=for-the-badge&logo=github" /></a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className='content-header'>
        <div className='home-header'>
          <h1>Hello! I'm Bee.</h1>
          <h1>A Software Engineer based in Sydney.</h1>
          {message !== null
            ? <div className='code message'>{JSON.stringify({ message }, null)}</div>
            : <div className='code'>Loading server response...</div>
          }
        </div>
        <div className='img-profile'>
          <img src="../public/profile_image.jpeg" alt="profileImg" />
        </div>
      </div>

      <br/><About /><br/>
      <br/><Projects /><br/>
      <br/><Skills /><br/>

      < Footer/>
      
    </div>
    </>
  )
}

export default App
