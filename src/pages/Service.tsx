import NavBar from '../components/NavBar';
import wave from '../assets/img/wave.png';
import '../assets/scss/ContactUs.scss'

function Service() {
  return (
    <>
        <img src={wave} className="wave-bg"/>
        <NavBar/>
        <main>
          <section className="contact-hero">
            <div className="contact-hero__content">
              <h1 className="contact-hero__title">Service</h1>
              <div className="contact-hero__breadcrumbs">
                <a href="/">Home</a> <span>›</span> <span>Service</span>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}

export default Service;
