import Img1 from "../assets/img/blockImg1.png"
import Img2 from "../assets/img/blockImg2.png"
import Img3 from "../assets/img/blockImg3.png"
import Img4 from "../assets/img/blockImg4.png"
import Img5 from "../assets/img/blockImg5.png"
import Img6 from "../assets/img/blockImg6.png"
import "../assets/scss/OurService.scss"

function OurService() {
    return (
        <div className="OurService-container">
            <div className="OurService-head">
                <div className="OurService-col">
                    <p className="OurService-title">OUR SERVICE</p>
                    <h1 className="OurService-title-sub">Our Service</h1>
                </div>
                <div className="OurService-col">
                    <p className="OurService-text">We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
                </div>
            </div>
            <div className="OurService-blocks">
                <div className="OurService-content">
                    <div className="OurService__block">
                        <img src={Img1} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Development
                        </h2>
                        <p className="OurService__block-text">
                            From concept to creation, our team of VR developers will bring your vision to life.
                        </p>
                        <button className="OurService__block-button">
                            LEARN MORE
                        </button>
                    </div>
                    <div className="OurService__block">
                        <img src={Img2} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Design
                        </h2>
                        <p className="OurService__block-text">
                            Our talented VR designers will create immersive and engaging environments that will captivate your audience.
                        </p>
                        <button className="OurService__block-button">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="OurService-content">
                    <div className="OurService__block">
                        <img src={Img3} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Consulting
                        </h2>
                        <p className="OurService__block-text">
                            Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.
                        </p>
                        <button className="OurService__block-button">
                            LEARN MORE
                        </button>
                    </div>
                    <div className="OurService__block">
                        <img src={Img4} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Games
                        </h2>
                        <p className="OurService__block-text">
                            We offer a wide selection of VR games that are suitable for players of all ages and skill levels.
                        </p>
                        <button className="OurService__block-button">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="OurService-content">
                    <div className="OurService__block">
                        <img src={Img5} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Events
                        </h2>
                        <p className="OurService__block-text">
                            Make your next event unforgettable with our VR event services.
                        </p>
                        <button className="OurService__block-button">
                            LEARN MORE
                        </button>
                    </div>
                    <div className="OurService__block">
                        <img src={Img6} alt="" className="OurService__block-img" />
                        <h2 className="OurService__block-title">
                            VR Entertainment
                        </h2>
                        <p className="OurService__block-text">
                            reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.
                        </p>
                        <button className="OurService__block-button">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurService