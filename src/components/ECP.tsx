import ecpImg1 from "../assets/img/ecpImg1.png";
import ecpImg2 from "../assets/img/ecpImg2.png";
import ecpImg3 from "../assets/img/ecpImg3.png";
import "../assets/scss/ECP.scss"

function ECP() {
    return (
        <div className="ECP-container">
            <div className='ECP__col'>
                <img className="ECP__col-img" src={ecpImg1}/>
                <h1 className="ECP__col-title">Expertise</h1>
                <p className="ECP__col-text">Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
            </div>
            <div className='ECP__col'>
                <img className="ECP__col-img" src={ecpImg2}/>
                <h1 className="ECP__col-title">Customization</h1>
                <p className="ECP__col-text">Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
            </div>
            <div className='ECP__col'>
                <img className="ECP__col-img" src={ecpImg3}/>
                <h1 className="ECP__col-title">Service</h1>
                <p className="ECP__col-text">We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
            </div>
        </div>
    )
}

export default ECP;