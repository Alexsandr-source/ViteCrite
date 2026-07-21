import cloud from "../assets/img/pricingCloud.svg";
import "../assets/scss/OurPricing.scss";

function OurPricing() {
    return (
        <div className="OurPricing">
            <div className="OurPricing__head">
                <h1 className="OurPricing__head-title-sub" >Our Pricing</h1>
                <h2 className="OurPricing__head-title" >Affordable VR Services for Everyone</h2>
                <p className="OurPricing__head-text" >At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>
            </div>
            <div className="OurPricing__body">
                <div className="OurPricing__blocks">
                    <div className="OurPricing__block">
                        <img className="OurPricing__block-img" src={cloud} alt="iconCloud" />
                        <div className="OurPricing__block-content">
                            <h3 className="OurPricing__block-title">Customizable Packages</h3>
                            <p className="OurPricing__block-text">We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                        </div>
                    </div>
                    <div className="OurPricing__block">
                        <img className="OurPricing__block-img" src={cloud} alt="iconCloud" />
                        <div className="OurPricing__block-content">
                            <h3 className="OurPricing__block-title">Flexible Payment Options</h3>
                            <p className="OurPricing__block-text">We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.</p>
                        </div>
                    </div>
                    <div className="OurPricing__block">
                        <img className="OurPricing__block-img" src={cloud} alt="iconCloud" />
                        <div className="OurPricing__block-content">
                            <h3 className="OurPricing__block-title">Satisfaction Guarantee</h3>
                            <p className="OurPricing__block-text">We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.</p>
                        </div>
                    </div>
                </div>
                <div className="OurPricing__price">
                    <p className="OurPricing__price-text-top">Start from</p>
                    <h4 className="OurPricing__price-price">$99</h4>
                    <button className="OurPricing__price-button">get started</button>
                    <p className="OurPricing__price-text-top">30 Days Moneyback Guarantee</p>
                </div>
            </div>
        </div>
    )
}
export default OurPricing