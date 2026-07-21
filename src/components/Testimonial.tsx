import manTop from "../assets/img/Go.png";
import manBottom from "../assets/img/Jo.png";
import img1 from "../assets/img/testimonalImg1.png";
import img2 from "../assets/img/testimonalImg2.png";
import img3 from "../assets/img/testimonalImg3.png";
import img4 from "../assets/img/testimonalImg4.png";
import img5 from "../assets/img/testimonalImg5.png";
import img6 from "../assets/img/testimonalImg6.png";
import "../assets/scss/Testimonial.scss";

function Testimonial() {

    return (
        <div className="Testimonial">
            <div className="Testimonial-container">
                <div className="Testimonial__header">
                    <h1 className="Testimonial-title">TESTIMONIAL</h1>
                    <h2 className="Testimonial-text">What Our Clients Are Saying</h2>
                </div>

                <div className="center">
                    <img className="center-img" src={manTop} alt="" />
                    <div className="center-circle">
                        <img className="center-circle-img" src={manBottom} alt="" />
                    </div>
                </div>

                <div className="orbit orbit2">
                    <div className="circles orbit2-circles">
                        <img src={img1}/>
                        <div className="circles__dropdown">
                            <p className="circles__dropdown-info">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h3 className="circles__dropdown-name">Robert Fox - CEO Anono</h3>
                        </div>
                    </div>
                </div>

                <div className="orbit orbit3">
                    <div className="circles orbit3-circles">
                        <img src={img2}/>
                        <div className="circles__dropdown">
                            <p className="circles__dropdown-info">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h3 className="circles__dropdown-name">Robert Fox - CEO Anono</h3>
                        </div>
                    </div>
                </div>

                <div className="orbit orbit4">
                    <div className="circles orbit4-circles">
                        <img src={img3}/>
                        <div className="circles__dropdown">
                            <p className="circles__dropdown-info">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h3 className="circles__dropdown-name">Robert Fox - CEO Anono</h3>
                        </div>
                    </div>
                </div>

                <div className="orbit orbit5">
                    <div className="circles orbit5-circles">
                        <img src={img4}/>
                        <div className="circles__dropdown">
                            <p className="circles__dropdown-info">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h3 className="circles__dropdown-name">Robert Fox - CEO Anono</h3>
                        </div>
                    </div>
                </div>

                <div className="orbit orbit6">
                    <div className="circles orbit6-circles">
                        <img src={img5}/>
                        <div className="circles__dropdown">
                            <p className="circles__dropdown-info">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h3 className="circles__dropdown-name">Robert Fox - CEO Anono</h3>
                        </div>
                    </div>
                    <div className="circles orbit7-circles">
                        <img src={img6}/>
                        <div className="circles__dropdown">
                            <p className="circles__dropdown-info">The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.</p>
                            <h3 className="circles__dropdown-name">Robert Fox - CEO Anono</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Testimonial