import './Projects.css'

export default function Projects() {

  return (
    <section id="projects" className="projects-section">
      <h2>PROJECTS</h2>
      <div className="project-wrapper">

      <div className="project">
          <div className="project-img">
            <img src="/Schema_Wanderplan.png" alt="wanderplan" />
            <img src="/uxui_1.png" alt="wanderplan" />
            <img src="/uxui_2.png" alt="wanderplan" />
          </div>
          <div className="project-content">
            <h3>Wander Plan (On Process...)</h3>
            <h4>MERN-Stack CRUD App, Token-Based Authentication, Typescript that development from my old Wander plan project when I was study. </h4>
            <p>In the Wander Plan project, I began with competitive and market research to understand user needs and the current landscape, followed by a detailed analysis to define the app's requirements and user personas. I designed a comprehensive database schema and planned the UX/UI using Figma, creating wireframes for visual guidance. Then I'll diagram the system's architecture  for clarity, and I'll track development progress using a Trello board, ensuring a structured approach from conception to execution.
            </p>
            <p><strong>Deployed site</strong> by Render</p>
            <p><strong>Technologies used</strong>: TypeScript | React | Express | Node.js | Postgres SQL | bcrypt </p>
            <ul>
              <li>
                {/* <a className='wanderplan' href="https://github.com/zebelity/Wander-plan" target="_blank">
                <img alt="wanderplan" src="https://img.shields.io/badge/Wander_Plan-%23D3DFEE?style=for-the-badge&logo=github&logoColor=%23181717"/></a>
                <a className='wanderplan' href="https://wander-plan.onrender.com/" target="_blank">
                <img alt="demo" src="https://img.shields.io/badge/Demo-%23fff?style=for-the-badge&logo=render&logoColor=%23181717"/>
                </a> */}
              </li>
            </ul>
          </div>
        </div>

      <div className="project">
          <div className="project-content project2">
            <h3>JOJO Jacket-On Jacket-Off App</h3>
            <h4>Fullstack Weather application - Typescript </h4>
            <p>JOJO is designed to make the decision of wearing a jacket as easy as possible. It combines user preferences with real-time weather data to provide clear and instant recommendations - "Jacket ON" or "Jacket OFF based on the weather at their current location. Also user can search to check at other location as their desire"</p>
            <p><strong>Technologies used</strong>: TypeScript | React | Express | Node.js | Google Geocoding API | Weather API | Trello | Render </p>
            <ul>
              <li>
                <a className='jojoapp' href="https://github.com/zebelity/JOJO-JacketON-JacketOff-app" target="_blank">
                <img alt="servoapp" src="https://img.shields.io/badge/JOJO_App-%23D3DFEE?style=for-the-badge&logo=github&logoColor=%23181717"/></a>
                <a className='jojoapp' href="https://jojo-frontend.onrender.com/" target="_blank">
                <img alt="demo" src="https://img.shields.io/badge/Demo-%23fff?style=for-the-badge&logo=render&logoColor=%23181717"/></a>
              </li>
            </ul>
          </div>
          <div className="project-img">
            <img className='jojoapp' src="/jojoapp_homepage.png" alt="jojoapp" />
            <img className='jojoapp' src="/jojoapp_location.png" alt="jojoapp2" />
            <img className='jojoapp' src="/jojoapp_preferences.png" alt="jojoapp3" />
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src="/happyteatime_homepage.png" alt="happyteatime_homepage" />
            <img src="/happyteatime_reviewpage.png" alt="happyteatime_reviewpage" />
            <img src="/happyteatime_loginpage.png" alt="happyteatime_loginpage" />
          </div>
          <div className="project-content">
            <h3>Happy TeaTime App</h3>
            <h4>MERN-Stack App, Token-Based Authentication</h4>
            <p>Happy TeaTime is a React-based web application that allows users to browse, like, review, and interact with various bubble tea menu items. Users can view detailed information about each menu item, submit their own reviews, and edit or delete their own reviews. The app provides a seamless user experience with real-time updates, allowing users to see their reviews instantly without the need for page refreshes.</p>
            <p><strong>Technologies used</strong>: JavaScript | React | React Router | Axios | Express | MongoDB | JSON Web Tokens | bcrypt </p>
            <ul>
              <li>
                <a className='happyteatime' href="https://github.com/zebelity/happy-teatime-react" target="_blank">
                <img alt="happyteatime" src="https://img.shields.io/badge/Happy_TeaTime-%23D3DFEE?style=for-the-badge&logo=github&logoColor=%23181717"/></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="project">
          <div className="project-content project2">
            <h3>Servo App</h3>
            <h4>Fullstack CRUD App (Traditional Full-Page Refresh) - Group Project</h4>
            <p>A single page application done in HTML, CSS and Javascript with express. That utilizes the Google Maps API, Google Geocoding API and FuturesAPI to help users search for all petrol stations in Australia. The application provides users with the latest prices of oil and gas allows users to find their nearest stations.</p>
            <p><strong>Technologies used</strong>: JavaScript | HTML | CSS | Express | Node.js | EJS | Postgres SQL | Google Maps API | Google Geocoding API | FuturesAPI | Trello | Git </p>
            <ul>
              <li>
                <a className='servoapp' href="https://github.com/zebelity/servo-app" target="_blank">
                <img alt="servoapp" src="https://img.shields.io/badge/Servo_App-%23D3DFEE?style=for-the-badge&logo=github&logoColor=%23181717"/></a>
              </li>
            </ul>
          </div>
          <div className="project-img">
            <img className='servo' src="/servoApp.png" alt="servoapp" />
            <img className='servo' src="/servoapp2.png" alt="servoapp2" />
          </div>
        </div>

      </div>
    </section>
  );
}