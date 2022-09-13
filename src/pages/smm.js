import CreateTable from "../components/smm/table"
import OfferDescription from "../components/smm/offerDiscription"
import CommunicationTable from "../components/smm/comunicationTable"
import TargetAds from "../components/smm/targetAds"
import UseTarget from "../components/smm/useTarget"
import SettingsTarget from "../components/smm/settingsTarget"
import GoalAds from "../components/smm/goalAds"
import SmmTabs from "../components/smm/smmTabs"
import CostSmm from "../components/smm/costSmm"
import Clients from "../components/general/clients"
import Contacts from "../components/general/contacts"
import "../components/smm/smm.css"

function Smm() {

    return (
       <div className="smm">
        <div className="smmDiscription">
            <p className="smmTitle">Продвижение в Facebook и Instagram для сферы услуг</p>
            <p className="smmSubtitle">От ведения страниц до таргетированной рекламы</p>
        </div>
       <OfferDescription />
        <CreateTable />
        <CommunicationTable />
        <TargetAds />
        <UseTarget />
        <SettingsTarget />
        <GoalAds />
        <SmmTabs />
        <CostSmm />
        <Clients />
        <Contacts />
       </div>
    )
}
export default Smm