import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="mac-window">
        <div className="mac-titlebar">
          <div className="mac-button close-button"></div>
          <div className="mac-button minimize-button"></div>
          <div className="mac-button extend-button"></div>
        </div>
        <div className="mac-content">
          <h2>ABOUT ME</h2>
          <div className="about-content">
          <pre>
              {`
I'm a software engineer based in Sydney with a background in physiotherapy. I have a passion for applying my skills, care and attention to detail to help people achieve their goals without pain and frustration.

I always want to learn and grow. Software engineering allows me to create excellent user experiences, making a real and meaningful impact on people's lives by solving their pain points.

I have recently completed General Assembly’s Software Engineering Immersive, a 400+ hour bootcamp where I have built experience with both frontend and backend technologies.

People would describe me as fun, caring, analytical, organized, and dependable.
              `}
          </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
