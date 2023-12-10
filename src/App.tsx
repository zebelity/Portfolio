import './App.css'
import About from 'components/About'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Footer from 'components/Footer'
import Contact from 'components/Contact'

function App () {

  return (
    <>
    <div className='page-wrapper'>
      <nav className='navbar'>
        <div className='navbar-left'>
          <ul>
            <li className="nav-item"><a href="#about">About</a></li>
            <li className="nav-item"><a href="#projects">Projects</a></li>
            <li className="nav-item"><a href="https://drive.google.com/file/d/1OdvbUxillt6KO6GMO4bSI3KTvlU8RYTq/view?usp=sharing" target="_blank">Resume</a></li>
            <li className="nav-item"><a href="#skills">Skills</a></li>
            <li className="nav-item"><a href="#contact">Contact me</a></li>
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
          <p className='message'>"I looked back to my engineering roots, something I always had a keen interest in growing up."</p>
        </div>
        <div className='img-profile'>
          <img src="/profile_image.jpeg" alt="profileImg" />
        </div>
      </div>

      <br/><About /><br/>
      <br/><Projects /><br/>
      <br/><Skills /><br/>
      <br/><Contact /><br/>

      < Footer/>
      
    </div>
    </>
  )
}

export default App
