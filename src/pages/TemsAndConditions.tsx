import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import '../assets/scss/ContactUs.scss'

function TemsAndConfitions() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>
          <section className="contact-hero">
            <div className="contact-hero__content">
              <h1 className="contact-hero__title">Tems & Confitions</h1>
              <div className="contact-hero__breadcrumbs">
                <a href="/">Home</a> <span>›</span> <span>Tems & Confitions</span>
              </div>
            </div>
          </section>
        </main>
        <footer>

        </footer>
    </>
  );
}

export default TemsAndConfitions;
