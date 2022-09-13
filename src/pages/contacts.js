import Contacts from "../components/general/contacts"
import "../components/contacts/contacts.css"
function Contact() {
    return (
       <div className="contact">
        <div className="contactHeader">
            <p className="contactTitle">Наши <br></br> контакты</p>
            <p className="contactSubtitle">Продвижение в Facebook и Instagram для сферы услуг</p>
        </div>
        <Contacts />
       </div>
    )
}
export default Contact