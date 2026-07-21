import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import '../assets/scss/ContactUs.scss'

function FAQ() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>
          <section className="contact-hero">
            <div className="contact-hero__content">
              <h1 className="contact-hero__title">FAQ</h1>
              <div className="contact-hero__breadcrumbs">
                <a href="/">Home</a> <span>›</span> <span>FAQ</span>
              </div>
            </div>
          </section>
        </main>
        <footer>

        </footer>
    </>
  );
}

export default FAQ;
