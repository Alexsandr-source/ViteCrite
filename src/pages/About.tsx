import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import '../assets/scss/ContactUs.scss'

function About() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>
          <section className="contact-hero">
            <div className="contact-hero__content">
              <h1 className="contact-hero__title">About us</h1>
              <div className="contact-hero__breadcrumbs">
                <a href="/">Home</a> <span>›</span> <span>About us</span>
              </div>
            </div>
          </section>
        </main>
        <footer>

        </footer>
    </>
  );
}

export default About;
