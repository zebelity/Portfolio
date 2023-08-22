import './Projects.css'

export default function Projects() {

  return (
    <section id="projects" className="projects-section">
      <h2>PROJECTS</h2>
      <div className="project-wrapper">

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

        <div className="project">
          <div className="project-img">
            <img src="/wanderplan_loginpage.png" alt="wanderplan" />
            <img src="/wanderplan_homepage.png" alt="wanderplan" />
            <img src="/wanderplan_itempage.png" alt="wanderplan" />
          </div>
          <div className="project-content">
            <h3>Wander Plan</h3>
            <h4>MEN-Stack CRUD App, Traditional Full-Page Refresh App with Optional Inclusion of Some Client-Side Rendering. </h4>
            <p>The application allows users to add itinerary items to their trips, including flights, car trips, hotels, and sightseeing activities. Users can specify the type of each itinerary item, along with relevant details such as location, time, and booking references. To ensure privacy and personalized experiences, the application provides user authentication functionality. Users need to log in and access their own trips and itineraries.</p>
            <p><strong>Deployed site</strong> by Render</p>
            <p><strong>Technologies used</strong>: JavaScript | HTML | CSS | Express | Node.js | EJS | Postgres SQL | bcrypt </p>
            <ul>
              <li>
                <a className='wanderplan' href="https://github.com/zebelity/Wander-plan" target="_blank">
                <img alt="wanderplan" src="https://img.shields.io/badge/Wander_Plan-%23D3DFEE?style=for-the-badge&logo=github&logoColor=%23181717"/></a>
                <a className='wanderplan' href="https://wander-plan.onrender.com/" target="_blank">
                <img alt="demo" src="https://img.shields.io/badge/Demo-%23fff?style=for-the-badge&logo=render&logoColor=%23181717"/>
</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}