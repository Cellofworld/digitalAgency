import SecondHeadAbout from "../components/about/headerabout"
import AboutChoice from "../components/about/abotChoice"
import NumberUs from "../components/about/numberForUs"
import Clients from "../components/general/clients"
import Contacts from "../components/general/contacts"
import "../components/about/about.css"

function AboutUs() {
    return (
       <div className="aboutUs">
         <div className="aboutHeader">
                <div className="discriptionAbout">
                    <div className="headTitle">О нас</div>
                    <div className="titleDiscription about">
                        Ora – маркетинговое агентство, специализирующееся на работе с малым бизнесом.
                    </div>
                </div>
            </div>
        <SecondHeadAbout />
        <AboutChoice />
        <NumberUs />
        <Clients />
        <Contacts />
       </div>
    )
}
export default AboutUs