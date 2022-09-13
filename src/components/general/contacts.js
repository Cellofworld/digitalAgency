import FollowUs from "./followUs";
import blackLogo from "../../img/blackLogo.svg"
import { Yanmap } from "./map";


function Contacts() {
    return (
        <div className="contacts">
            <div className="infoContacts">    
                <img className="blackLogo" src={blackLogo} alt={blackLogo} />
                <div className="moreContacts">
                
                    <div className="numbers">
                        <p className="numberTitle contactsDiscriptionTitle">Телефон</p>
                        <p className="numberOne">+001 987-654-3210</p>
                        <p className="numberTwo">+001 987-654-3210</p>
                    </div>
                    <div className="emailContacts">
                        <p className="numberEmail contactsDiscriptionTitle">Email</p>
                        <p className="email">info@example.com</p>
                    </div>
                    <div className="adressContacts">
                        <p className="numberAdress contactsDiscriptionTitle">Адрес</p>
                        <p className="adress">123/B, Route 66, Downtown, Washington, DC 20004, US </p>
                    </div>
                </div>
                <Yanmap />
            </div> 
            <FollowUs />   
        </div>
    )
}

export default Contacts