import airbnb from "../../img/clientsImg/airbnb.png"
import airtab from "../../img/clientsImg/airtab.png"
import amazone from "../../img/clientsImg/amazone.png"
import crunch from "../../img/clientsImg/crunch.png"
import hopwerk from "../../img/clientsImg/hopwerk.png"
import hubspot from "../../img/clientsImg/hubspot.png"
import zendesk from "../../img/clientsImg/zendesk.png"
import outreach from "../../img/clientsImg/outreach.png"
import salesforce from "../../img/clientsImg/salesforce.png"
import squere from "../../img/clientsImg/squere.png"

const img = [
    <img className="clientsImg" key={airbnb} src={airbnb} alt={"cl"} />,
    <img className="clientsImg" key={airtab} src={airtab} alt={"cl"}/>,
    <img className="clientsImg" key={amazone} src={amazone} alt={"cl"}/>,
    <img className="clientsImg" key={crunch} src={crunch} alt={"cl"}/>,
    <img className="clientsImg" key={hopwerk} src={hopwerk} alt={"cl"}/>,
    <img className="clientsImg" key={hubspot} src={hubspot} alt={"cl"}/>,
    <img className="clientsImg" key={zendesk} src={zendesk} alt={"cl"}/>,
    <img className="clientsImg" key={outreach} src={outreach} alt={"cl"}/>,
    <img className="clientsImg" key={salesforce} src={salesforce} alt={"cl"}/>,
    <img className="clientsImg" key={squere} src={squere} alt={"cl"}/>
]



 function Clients () {
    return (
        <div className="clients">
            <p className="clientsTitle">Клиенты, которые нам доверяют</p>
            <div className="clientsBox">{img}</div>
            <div className="calling">
                <div className="callingDiscription">
                    <p className="callingTitle">Хотите чтобы мы поучаствовали в развитии Вашего проекта?</p>
                    <p className="callingSubtitle">Просто позвоните нам!</p>
                </div>
                <p className="callingNumber">+371 0000 0000</p>
            </div>
        </div>
    )
}

export default Clients